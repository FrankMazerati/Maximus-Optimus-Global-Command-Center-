-- Migration for tenants and user profiles, and updating account_registrations for tenant_id.

-- Create the tenants table
CREATE TABLE public.tenants (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  slug text NOT NULL UNIQUE,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- RLS for tenants table
ALTER TABLE public.tenants ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Tenants are viewable by their members" ON public.tenants
  FOR SELECT TO authenticated USING (
    EXISTS (SELECT 1 FROM public.account_registrations WHERE tenant_id = tenants.id AND user_id = auth.uid())
    OR public.has_role(auth.uid(), 'global_admin')
  );

CREATE POLICY "Tenant admins can update their own tenant" ON public.tenants
  FOR UPDATE TO authenticated
  USING (
    EXISTS (SELECT 1 FROM public.account_registrations WHERE tenant_id = tenants.id AND user_id = auth.uid() AND public.has_role(auth.uid(), 'tenant_admin'))
  )
  WITH CHECK (
    EXISTS (SELECT 1 FROM public.account_registrations WHERE tenant_id = tenants.id AND user_id = auth.uid() AND public.has_role(auth.uid(), 'tenant_admin'))
  );

-- Add tenant_id to account_registrations
ALTER TABLE public.account_registrations
ADD COLUMN tenant_id uuid REFERENCES public.tenants(id) ON DELETE CASCADE;

-- Update existing registrations to have a default tenant_id if necessary, or handle in application logic.
-- For now, allow null to ease migration. Application logic should handle assignment.
-- ALTER TABLE public.account_registrations ALTER COLUMN tenant_id SET NOT NULL; -- This can be added later once tenant assignment is in place.

-- Add index for tenant_id on account_registrations
CREATE INDEX account_registrations_tenant_id_idx ON public.account_registrations (tenant_id);

-- Update RLS for account_registrations to include tenant isolation
CREATE POLICY "Users can read their own registration within their tenant" ON public.account_registrations
  FOR SELECT TO authenticated USING (auth.uid() = user_id AND tenant_id IN (SELECT tenant_id FROM public.account_registrations WHERE user_id = auth.uid()));

CREATE POLICY "Admins and approvers can read all registrations within their tenant" ON public.account_registrations
  FOR SELECT TO authenticated USING (
    (public.has_role(auth.uid(), 'global_admin') OR public.has_role(auth.uid(), 'approver'))
    AND tenant_id IN (SELECT tenant_id FROM public.account_registrations WHERE user_id = auth.uid())
  );

CREATE POLICY "Admins and approvers can review registrations within their tenant" ON public.account_registrations
  FOR UPDATE TO authenticated
  USING (
    (public.has_role(auth.uid(), 'global_admin') OR public.has_role(auth.uid(), 'approver'))
    AND tenant_id IN (SELECT tenant_id FROM public.account_registrations WHERE user_id = auth.uid())
  )
  WITH CHECK (
    (public.has_role(auth.uid(), 'global_admin') OR public.has_role(auth.uid(), 'approver'))
    AND tenant_id IN (SELECT tenant_id FROM public.account_registrations WHERE user_id = auth.uid())
  );

-- Create the profiles table
CREATE TABLE public.profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  tenant_id uuid REFERENCES public.tenants(id) ON DELETE CASCADE NOT NULL,
  first_name text,
  last_name text,
  avatar_url text,
  locale text,
  timezone text,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT profiles_metadata_is_object CHECK (jsonb_typeof(metadata) = 'object'),
  CONSTRAINT profiles_metadata_size CHECK (pg_column_size(metadata) < 16384)
);

-- RLS for profiles table
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read their own profile" ON public.profiles
  FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Tenant members can view profiles within their tenant" ON public.profiles
  FOR SELECT TO authenticated USING (
    tenant_id IN (SELECT tenant_id FROM public.account_registrations WHERE user_id = auth.uid())
    OR public.has_role(auth.uid(), 'global_admin')
  );

-- Add a new role type for tenant_admin to app_role
ALTER TYPE public.app_role ADD VALUE 'tenant_admin';

-- Update the touch_updated_at function trigger for new tables
CREATE TRIGGER tenants_touch BEFORE UPDATE ON public.tenants
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

CREATE TRIGGER profiles_touch BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();
