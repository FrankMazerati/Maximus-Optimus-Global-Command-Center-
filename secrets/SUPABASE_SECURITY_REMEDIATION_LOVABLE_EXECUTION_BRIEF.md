# Supabase Security Remediation — Lovable Execution Brief

**Project:** Maximus Optimus Global Command Center  
**Supabase project:** `fzwbvccvqnbvzbqfgiep`  
**Prepared:** 2026-11-18  
**Status:** Remediation required; no production changes made by this brief.

## Important execution boundary

This repository is connected to Lovable. Per `AGENTS.md`, all database/schema/policy changes must be made through Lovable, not by editing `supabase/migrations/` or `drizzle/` manually. Keep credentials and secret values out of GitHub. No Lovable MCP action is connected in this ChatGPT session, so the instructions below must be run in the Lovable editor by an authorized project administrator.

## Verified live findings

1. `public.assistant_messages` has an owner-scoped SELECT policy and an INSERT policy that only accepts `sender_type = 'user'`. The deployed `help-buddy-chat` Edge Function v4 inserts both user and assistant messages using the caller JWT/anon-key client. The assistant insert is therefore blocked by the observed policy. This is a confirmed policy/code mismatch; reproduce with an authenticated integration test before and after the fix.
2. `public.help_buddy_personality_preferences` has a policy named `Users manage own Help Buddy personality preferences`. Its organization-scope branch currently allows any authenticated member whose profile belongs to that organization to insert/update organization-wide settings. Organization-wide writes must require an authorized organization administrator (or global administrator); ordinary members must retain user-scope self-service only.
3. Supabase Security Advisor reports `auth_leaked_password_protection` as disabled. Supabase documentation states this HaveIBeenPwned-based feature is available on Pro plans and above.
4. Security Advisor also reports 16 public `SECURITY DEFINER` functions executable by authenticated users. These are not all automatically vulnerabilities; inspect each function body, grants, search_path, authorization checks, and intended caller before changing privileges. Never blanket-revoke EXECUTE or convert every function to SECURITY INVOKER.

## Lovable implementation instructions

### A. Repair Help Buddy assistant-message persistence without weakening RLS

- Inspect the complete current schema, all `assistant_messages` policies, the `assistant_sessions` ownership model, and the complete deployed `help-buddy-chat` Edge Function before editing.
- Preserve authenticated user-message inserts under the existing owner/session/active-profile/organization/tenant checks.
- Do **not** simply change the policy to allow every authenticated user to insert arbitrary `sender_type='assistant'` rows.
- Implement a narrowly scoped server-only write path for assistant replies. Preferred design: the Edge Function first authenticates the caller with `auth.getUser()`, verifies the active profile, verifies the session belongs to that caller and matches the caller's organization/tenant, and then uses a server-only privileged write path restricted to inserting assistant messages for that already-verified session. Keep the service-role/secret key exclusively in Edge Function server environment; never send it to the browser. Do not use a SECURITY DEFINER function as a generic RLS bypass.
- If a narrowly scoped private-schema RPC is chosen instead, it must validate caller identity and session ownership itself, accept only the minimum required fields, constrain sender type to assistant, validate message size and related IDs, and be inaccessible to anon/authenticated direct API callers unless explicitly required. Explain why the selected design is safer than a broad policy.
- Preserve owner-scoped SELECT and all existing tenant/organization protections. Keep feedback writes owner-scoped.
- Restrict CORS to actual approved application origins (discover the deployed origins; do not guess). Keep JWT verification enabled.
- Add request-size limits, safe error responses (no raw database/internal details to clients), and rate/abuse protection appropriate to this function without breaking the current client contract.
- Test: valid user message succeeds; assistant response persists and is readable by that same owner; another user's session ID is rejected; inactive profile rejected; mismatched tenant/org rejected; unauthenticated request rejected; feedback cannot target another user's assistant message; no service secret appears in client bundles or logs.

### B. Fix organization-wide personality preference authorization

- Inspect `public.is_org_admin(uuid)`, `private.is_global_admin()`, their dependencies, grants, and current organization membership/role tables. Verify that the org-admin helper checks a trusted server-controlled role/membership source; never trust user-editable `raw_user_meta_data` for authorization.
- Preserve user-scope self-service only when `scope_type='user'`, `profile_id=auth.uid()`, and `organization_id IS NULL`.
- For `scope_type='organization'`, require `profile_id IS NULL`, the target organization to be one the caller is authorized to administer, and `public.is_org_admin(organization_id)` (or the verified equivalent); global admins may also manage organization scope.
- Apply equivalent authorization to both USING and WITH CHECK for UPDATE/DELETE/INSERT as appropriate. Ensure users cannot change scope, profile_id, or organization_id to escape their authorization.
- Remove/replace the overly broad organization-member branch in the existing policy; avoid stacking a permissive policy that would continue to grant access.
- Test ordinary member denied for org-scope INSERT/UPDATE/DELETE; org admin allowed only for their own org; global admin allowed as intended; user can still manage only their own user-scope row; cross-org writes denied.

### C. Enable leaked-password protection (dashboard setting)

- In Supabase Dashboard for this project, go to **Authentication → Sign In / Providers → Email** and enable **Prevent use of leaked passwords**, then Save.
- This setting is plan-gated: Supabase documents it as available on **Pro and above**. If the project is on Free, do not keep searching for a missing toggle; report that upgrade is required. As a Free-plan fallback, set an 8+ character minimum and strongest supported character requirements in the same Email provider settings, then verify those settings. These fallbacks do not clear the leaked-password-protection advisor warning.
- Verify by rerunning Security Advisor. Do not test with a real user's account or ask users to change passwords as part of this verification.

### D. Review the 16 SECURITY DEFINER warnings individually

For each reported function, capture definition, owner, grants to PUBLIC/anon/authenticated, search_path, whether it is in an exposed schema, every authorization check, and all call sites. Include at minimum:
- `accept_ticket(uuid)`
- `admin_link_workforce_profile_identity(uuid,uuid,text)`
- `approve_workforce_management_assignment(uuid,text)`
- `ensure_chat_buddy_welcome_message(uuid)`
- `holds_role(uuid)`
- `is_active_member()`
- `is_global_admin()`
- `is_org_admin(uuid)`
- `kb_can_manage()`
- `kb_can_read_base(uuid)`
- `kb_is_super_admin()`
- `marketplace_request_deal_quote(uuid,numeric,text)`
- `request_workforce_management_assignment(...)`
- `revoke_workforce_management_assignment(uuid,text)`
- `revoke_workforce_profile_identity(uuid,text)`
- `set_workforce_management_assignment_locations(uuid,uuid[],text)`

For each function, choose and document one: keep SECURITY DEFINER with hardened fixed search_path and strict internal authorization; move to a non-exposed schema and grant only the server role; revoke unnecessary PUBLIC/anon/authenticated EXECUTE; or safely convert to SECURITY INVOKER after proving callers retain required privileges. Preserve required RPC behavior. Test positive and negative authorization paths for each changed function. Re-run Security Advisor and document any intentional remaining warnings.

## Release and rollback requirements

- Make changes in Lovable's managed workflow; do not hand-edit migration folders.
- Capture pre-change policy/function definitions and current function version before editing.
- Deploy to a test/staging environment first if available.
- Run all tests above, then deploy with a rollback plan.
- Re-run Security Advisor (security and performance), inspect Edge Function logs, and verify chat end-to-end using two separate authenticated test accounts.
- Do not mark a finding fixed until the relevant negative and positive tests pass and the advisor/status check confirms the expected result.
- Do not change the unrelated 50 RLS-enabled/no-policy INFO findings without confirming intended service-only access.

## References

- Supabase password security: https://supabase.com/docs/guides/auth/password-security
- Supabase RLS: https://supabase.com/docs/guides/database/postgres/row-level-security
- Supabase Security Advisor: https://supabase.com/docs/guides/observability/advisors
- Supabase API security: https://supabase.com/docs/guides/api/securing-your-api
