# Supabase Schema Contract
_Updated automatically by supabase-worker. Frontend worker reads this to wire live buttons and queries._

## Table: `tenants`
- **Description:** Stores information about different tenants/organizations.
- **Columns:**
  - `id`: `uuid` (Primary Key, automatically generated)
  - `name`: `text` (Unique, Not Null)
  - `slug`: `text` (Unique, Not Null)
  - `created_at`: `timestamptz` (Not Null, default now())
  - `updated_at`: `timestamptz` (Not Null, default now())
- **Relationships:**
  - Has many `account_registrations`
  - Has many `profiles`
- **RLS Policies:**
  - `Tenants are viewable by their members`: `SELECT` access for authenticated users who are members of the tenant or are `global_admin`.
  - `Tenant admins can update their own tenant`: `UPDATE` access for authenticated `tenant_admin` members of the tenant.

## Table: `profiles`
- **Description:** Stores user-specific profile information.
- **Columns:**
  - `id`: `uuid` (Primary Key, automatically generated)
  - `user_id`: `uuid` (Foreign Key to `auth.users.id`, Not Null, Unique, ON DELETE CASCADE)
  - `tenant_id`: `uuid` (Foreign Key to `public.tenants.id`, Not Null, ON DELETE CASCADE)
  - `first_name`: `text`
  - `last_name`: `text`
  - `avatar_url`: `text`
  - `locale`: `text`
  - `timezone`: `text`
  - `metadata`: `jsonb` (Not Null, default `{}`)
  - `created_at`: `timestamptz` (Not Null, default now())
  - `updated_at`: `timestamptz` (Not Null, default now())
- **Relationships:**
  - Belongs to one `auth.users`
  - Belongs to one `public.tenants`
- **RLS Policies:**
  - `Users can read their own profile`: `SELECT` access for the user who owns the profile.
  - `Users can update their own profile`: `UPDATE` access for the user who owns the profile.
  - `Tenant members can view profiles within their tenant`: `SELECT` access for authenticated users who are members of the same tenant or are `global_admin`.

## Table: `account_registrations` (Updated)
- **Description:** Manages user account registrations and their status.
- **Columns (New/Modified):**
  - `tenant_id`: `uuid` (Foreign Key to `public.tenants.id`, ON DELETE CASCADE)
- **RLS Policies (Updated):**
  - `Users can read their own registration within their tenant`: `SELECT` access for authenticated users to their own registration, scoped by tenant.
  - `Admins and approvers can read all registrations within their tenant`: `SELECT` access for `global_admin` or `approver` roles, scoped by tenant.
  - `Admins and approvers can review registrations within their tenant`: `UPDATE` access for `global_admin` or `approver` roles, scoped by tenant.

## Enum: `app_role` (Updated)
- **Values (New):**
  - `tenant_admin`: A new role for tenant-specific administrative tasks.
