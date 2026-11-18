# Help Buddy — Live Gap Analysis & Implementation Plan

**Audit date:** 2026-11-18  
**Supabase project:** IntelliStack Systems Maximus Optimus Global Command Center (`fzwbvccvqnbvzbqfgiep`)  
**Repository:** `FrankMazerati/Maximus-Optimus-Global-Command-Center-`, branch `main`  
**Audit scope:** Live Supabase inventory, relevant RLS policies, Help Buddy Chat Edge Function, and tracked GitHub application source.  
**Change boundary:** Discovery only. No database rows, schema, RLS policies, Edge Functions, or application source code were changed during this audit.

## 1. Executive result

The live backend is further along than the previous inventory suggested:

- **40 canonical personality presets already exist**, each with a unique key, matching the new 40-mode requirement.
- **9 additional legacy personality presets** remain active. They should be mapped/retained for compatibility, not deleted as duplicates without dependency analysis.
- **120 expression catalog records already exist**, with sequential keys from EX001 to EX120.
- **All 120 expression records have no asset storage path and no animation storage path**; their asset status is `awaiting_artwork`.
- The response-template library contains 50 draft records and no published records in the current status count.
- The current chat Edge Function does not use the personality, expression, vocabulary, or event-rule tables. It performs template example scoring and knowledge QA retrieval, and explicitly returns `generativeModel: "not-configured"`.
- The tracked GitHub `main` source tree has no Help Buddy Studio route or component. The only avatar-named source file is the generic UI avatar component.

**Overall assessment:** The canonical personality and visual-state catalogs are substantially pre-seeded, but the runtime integration, approved visual assets, Studio UI, and production behavior engine are not complete. A security review also found issues that should be addressed before expanding the chat runtime.

## 2. Live inventory

Counts below were queried from the connected Supabase database on the audit date. These are live records, not estimates.

| Domain | Live records | Current status/details | Assessment |
|---|---:|---|---|
| Canonical personality modes | 40 | 40 unique canonical keys, active | Catalog requirement met; runtime use and admin controls not verified |
| Legacy personality presets | 9 | Active, marked legacy | Compatibility inventory; map before retiring |
| All personality preset rows | 49 | 40 canonical + 9 legacy | Do not interpret 49 as 49 required personality modes |
| Expression catalog | 120 | 120 unique sequential expression keys, active | Inventory requirement met |
| Expression artwork paths | 0 of 120 | All 120 asset statuses are `awaiting_artwork` | Artwork not attached/approved in these records |
| Expression animation paths | 0 of 120 | No animation paths populated | Animation not integrated in catalog |
| Response templates | 50 | All draft in status count | No production-ready published library verified |
| Knowledge articles | 114 | Existing inventory | Preserve; recheck publication and retrieval quality before changes |
| Vocabulary entries | 53 | Existing active inventory from current schema/table audit | Runtime use not found in chat function |
| Event rules | 6 | All draft | Preserve; do not activate without review |
| Help Buddy Chat Edge Function | 1 | Active, version 4, JWT verification on | Existing function; integration gaps and likely message-write policy mismatch |
| Avatar user preferences | 0 | `ai_assistant_preferences` has no rows | Schema exists, no user preference data yet |
| User avatar configs | 0 | `assistant_user_avatar_configs` has no rows | Schema exists, no configured user avatars yet |
| Personality preferences | 0 | `help_buddy_personality_preferences` has no rows | Schema exists, no saved preferences yet |
| Character profiles | 201 | Existing records | Inspect Help Buddy-specific profile and asset associations before using |
| Avatar feature options | 117 | Existing records | Reuse after reviewing groups and approved status |

### Important correction

The earlier audit summary's 12-active-personality figure is stale. The live query now returns 49 active rows, consisting of exactly 40 canonical modes and 9 legacy presets. The new target of 40 canonical personality modes is already represented in the live table.

## 3. Database structures that can be reused

No new tables are recommended at this stage. The database already has a meaningful Help Buddy foundation.

| Existing structure | Useful fields/capabilities | Recommended use |
|---|---|---|
| `assistant_personality_presets` | `preset_key`, `tone_rules`, `guardrails`, `default_intensity`, `user_selectable`, `communication_profile`, `behavior_traits`, canonical/legacy flags | Source of the 40 canonical personality profiles; enrich only after auditing current JSON payloads |
| `help_buddy_personality_preferences` | Scope, profile/org, personality key, intensity, enabled, priority | User and organization preferences; correct/verify organization admin authorization first |
| `help_buddy_expression_catalog` | Stable key, category, name, description, emotion tags, visual spec, asset paths, animation manifest, status, version | Canonical 120-state visual catalog |
| `assistant_character_profiles` | Character identity, presentation, description, default personality/outfit/background, metadata | Character identity and default configuration |
| `assistant_user_avatar_configs` | Character, feature selections, locale, renderer mode, custom asset path, version | User-specific avatar configuration |
| `ai_assistant_preferences` | Avatar, outfit, background, theme, accent, text scale, voice, language, expression/behavior preferences | User-approved presentation and communication preferences |
| `assistant_avatar_feature_options` | Feature groups, options, visual specs, availability, status | Existing avatar feature catalog |
| `help_buddy_response_templates` | Intent, examples, variants, follow-ups, tone, audience, permission check, escalation, approval/status, tenant scope, version | Expand the existing library from drafts to reviewed/published content |
| `assistant_vocabulary_entries` | Category, intent, phrase, canonical meaning, suggested response style, tags, locale, status | Expand and normalize terminology; add runtime retrieval |
| `knowledge_articles` and `help_buddy_qa_entries` | Knowledge base scope, visibility, approval, article linkage, confidence threshold, search document, embedding | Preserve and continue authorized, source-grounded retrieval |
| `help_buddy_event_rules` | Event source/type, response template, action, approval, enabled/status, org/tenant scope, metadata | Governed automation after draft review |
| `assistant_sessions`, `assistant_messages` | Owner, tenant/org, context metadata, message kind, intent, confidence, citations, retrieval metadata | Conversation continuity and response audit trail |
| `help_buddy_memory_records` and related tables | User/tenant scope, approval, sensitivity, retention, source refs, events | Existing memory subsystem; retain privacy and consent rules |

The live schema inventory showed RLS enabled on the above Help Buddy-related public tables. Policies were inspected for the main personality, expression, preferences, avatar, response-template, vocabulary, event-rule, article, session, and message tables.

## 4. Runtime gap analysis

### 4.1 Existing Help Buddy Chat Edge Function

The deployed `help-buddy-chat` function is active at version 4 and requires JWT verification. Its current flow:

1. Accepts POST and validates a bearer token using `auth.getUser()`.
2. Checks the user's profile is active and the Help Buddy assistant record is active.
3. Creates or verifies an owner-scoped conversation session.
4. Saves the user message.
5. Handles explicit memory save/retrieval and a hard-coded Knowledge Spaces navigation intent.
6. Loads up to 300 published response templates and scores `user_examples` with normalized keyword overlap.
7. If no template crosses its threshold, calls `help_buddy_search_qa` and uses the best authorized QA result above its confidence threshold.
8. Records unresolved questions for review.
9. Saves the assistant response and returns message/citation/confidence/intent metadata.

### 4.2 Missing runtime capabilities

The current function source contains no queries to:
- `assistant_personality_presets`
- `help_buddy_personality_preferences`
- `help_buddy_expression_catalog`
- `assistant_vocabulary_entries`
- `help_buddy_event_rules`
- `assistant_character_profiles` or avatar preference/configuration tables

It does not currently implement:
- 40-mode personality selection or blending
- Intensity resolution, organization defaults, or user preference precedence
- Context-aware personality transitions and return-to-default behavior
- Emotional/social signal interpretation
- Harassment/hostility/context classification or the five severity levels
- Expression/pose selection and animation transition hints
- A validated structured response object containing personality, visual state, communication style, and escalation status
- Event-rule dispatch or administrator incident escalation
- Generative model calls; the function explicitly identifies the model as not configured

**Assessment:** The current function is a template-and-knowledge retrieval chatbot with memory support, not yet the integrated adaptive Help Buddy described in the specification.

### 4.3 Likely assistant-message insert policy mismatch — high priority to verify

The current Edge Function writes the assistant's reply into `assistant_messages` using a Supabase client initialized with the caller's anon key and bearer JWT. The inspected RLS policies show:
- An owner-scoped SELECT policy.
- An INSERT policy that allows only rows where `sender_type = 'user'`.

The function attempts an INSERT with `sender_type = 'assistant'`. Under the inspected policy set, this insert appears to be rejected by RLS. This is a likely runtime defect that must be reproduced with an authenticated integration test and corrected through the approved Lovable workflow. Do not work around it by exposing a service-role key or blindly granting broader client write access.

A secure correction should use a narrowly scoped server-side write path with authorization tied to the verified session owner and tenant, or a carefully constrained server-only mechanism. Validate the result and test cross-user/cross-tenant denial.

## 5. Avatar Studio and frontend gap analysis

The tracked GitHub `main` branch contains 157 paths, including 111 source paths. The tracked route list currently includes:
- Root login/registration route
- Authenticated route wrapper
- Account route
- Informational content route

The root route renders the sign-in/registration landing page. The authenticated route is a generic auth gate. No Help Buddy Studio, Avatar Studio, Help Buddy chat page, personality management page, expression catalog page, or behavior configuration route was found in the tracked source tree. The only avatar-named component is `src/components/ui/avatar.tsx`, a generic UI primitive—not a character studio.

This is a repository-visible gap, not proof that no other untracked or externally deployed UI exists. Reconcile the GitHub branch with the actual Lovable/Vercel deployed application before deciding whether Studio must be created or whether the implementation lives elsewhere.

## 6. Security and governance findings

### High priority

1. **Organization personality preference policy needs correction/review.** The inspected `help_buddy_personality_preferences` policy allows a signed-in user who belongs to an organization to satisfy the organization-scope predicate. The WITH CHECK condition does not clearly require an organization/global admin role for organization-wide changes. This could allow ordinary organization members to change shared personality settings. Current table row count is zero, but the policy should be corrected before enabling organization preferences. Use explicit admin/authorized-manager checks for organization scope; keep user scope self-service.

2. **Assistant message INSERT policy likely blocks assistant replies.** See section 4.3. Verify and fix before relying on production chat.

3. **Leaked password protection is disabled.** The current Supabase security advisor reports `auth_leaked_password_protection`. Enable it through the approved Auth settings workflow after reviewing the current project auth settings and test registration/password-change behavior.

### Broader project security review

The current security advisor returned:
- 50 tables with RLS enabled but no policies (INFO). This generally means access is denied by default, but every table should be reviewed to confirm intentional service-only/no-client-access behavior. Do not add blanket policies just to clear the warning.
- 16 SECURITY DEFINER functions executable by authenticated users (WARN). Review each function's authorization checks, search_path, grants, intended exposure, and whether it should be callable from the Data API. Do not indiscriminately revoke or convert functions used by existing platform features.
- Leaked password protection disabled (WARN).

These are platform-wide findings, not all Help Buddy-specific. A scoped Help Buddy implementation must not accidentally break unrelated modules while addressing them.

### Existing good controls observed

- The chat Edge Function has JWT verification enabled and validates the user with `auth.getUser()`.
- The function verifies active membership and checks session ownership before continuing a conversation.
- Main Help Buddy tables inspected have RLS enabled.
- Personality and expression catalog write policies are restricted to `private.is_global_admin()`.
- User avatar preferences/configurations have owner-scoped policies.
- Knowledge article retrieval is mediated through a permission-aware QA search function and confidence threshold.

### Additional hardening to assess

- Edge Function CORS currently uses wildcard `Access-Control-Allow-Origin: *`; restrict it to approved application origins where practical.
- Verify rate limiting, abuse controls, maximum request sizes, structured error redaction, and audit events.
- Ensure no model output can grant roles, set escalation status, choose arbitrary asset URLs, or claim unverified action success.
- Treat retrieved knowledge, templates, user files, and connector content as untrusted data, never instructions.
- Preserve secrets only in Lovable-managed Secrets/approved vaults, never GitHub.

## 7. Recommended implementation plan

### Phase 0 — Reconcile source of truth and establish tests
- Confirm which GitHub branch is connected to Lovable and which Vercel deployment is authoritative.
- Compare deployed routes/components with the tracked `main` branch.
- Retrieve the current schema, policies, and exact deployed Edge Function source into the approved source-control workflow.
- Add authenticated integration tests for chat message insert, session ownership, tenant boundaries, and RLS.
- Record a baseline test of current chat behavior before changing it.

### Phase 1 — Close the security blockers
- Correct the assistant-message write path without exposing service-role credentials.
- Restrict organization-level personality preferences to authorized organization/global administrators.
- Enable leaked password protection through Auth settings and verify it.
- Review the relevant Help Buddy policies and the function's CORS/rate-limit behavior.
- Re-run Supabase security advisors and targeted access tests.

### Phase 2 — Personality engine using existing 40 canonical records
- Audit all 40 canonical JSON profiles for complete communication profiles, behavior traits, guardrails, and default intensity.
- Map the nine legacy presets to canonical equivalents; preserve them until dependency and compatibility review is complete.
- Define deterministic blend rules, policy precedence, intensity resolution, temporary overrides, and default reversion.
- Reuse `help_buddy_personality_preferences`; do not create a duplicate preference table.
- Add missing fields only if the current schema cannot represent approved behavior, and only through Lovable.

### Phase 3 — Visual-state catalog and asset lifecycle
- Keep the existing 120 sequential catalog records.
- Map every record to the approved Help Buddy source artwork and asset version.
- Confirm asset storage bucket, access policy, responsive variants, and file naming.
- Add animation manifests/transitions and reduced-motion fallbacks.
- Do not mark an expression ready/published until its actual asset exists, is reviewed, and has a valid storage reference.
- Treat EX020 and EX082 as separately inventoried wink states with distinct approved animation/state definitions.

### Phase 4 — Avatar Studio and admin UI
- Reconcile the deployed app with GitHub first.
- Build or extend Studio with personality list, enable/disable, intensity sliders, blend preview, 120-state visual catalog, upload/compare/approve workflow, test/simulation, publish, version history, and rollback.
- Use existing avatar configuration and feature-option tables.
- Enforce role-based admin controls and audit every privileged change.

### Phase 5 — Behavior intelligence and structured chat response
- Implement contextual signal classification with confidence and uncertainty; do not diagnose or infer sensitive traits.
- Implement the five severity levels with policy-bound escalation and verified action results.
- Extend the existing Edge Function; do not create a second chat system.
- Add a validated response contract containing message, intent/confidence, approved source references, personality blend/intensities, visual state ID, communication style, escalation state, and responsible-service action results.
- Select visual states only by resolving approved catalog IDs server-side.
- Integrate the vocabulary library into normalization/intent assistance after auditing definitions.
- Keep model/provider calls server-side via the project's Lovable AI gateway. Do not add browser keys or claim AI is configured until tested.

### Phase 6 — Content library and workflow expansion
- Audit the 50 draft response templates and establish taxonomy/tests before expanding toward the ~500 initial target.
- Review 53 vocabulary entries and expand after taxonomy approval.
- Preserve 114 published knowledge articles; audit scope/freshness/quality.
- Review six draft event rules for approval, permissions, idempotency, retry, failure, and rollback before enabling.
- Add mappings between personality, response intent, expression, and severity with versioned approvals.

### Phase 7 — Release and regression
- Run acceptance criteria from `HELP_BUDDY_PERSONALITY_EXPRESSION_BEHAVIOR_SPEC.md`.
- Test desktop/tablet/mobile, light/dark, reduced motion, keyboard navigation, and screen readers.
- Test prompt injection, unauthorized tool calls, cross-tenant retrieval, escalation authorization, memory privacy, and action verification.
- Canary release behind an admin-controlled feature flag; monitor failures and rollback if needed.

## 8. First implementation sequence

Recommended immediate work order:
1. Verify and fix the assistant-message insert policy mismatch.
2. Correct organization-scope personality preference authorization.
3. Enable and verify leaked-password protection.
4. Audit the 40 canonical personality profile JSON fields and 120 expression catalog records.
5. Reconcile GitHub/Lovable/Vercel source-of-truth and locate the actual deployed Avatar Studio, if any.
6. Implement the personality engine and Studio against existing structures.
7. Extend the existing chat Edge Function only after the above authorization and integration tests pass.

## 9. Audit limitations

- This was a read-only discovery audit. No end-to-end authenticated test was executed because no user session was supplied to the audit.
- The current GitHub source tree may not include all deployed Lovable/Vercel code if branches or synchronization differ.
- Storage bucket configuration and actual uploaded image files were not fully audited in this pass.
- The exact semantics of every legacy personality preset and every JSON field still require content-level review.
- Security advisor findings are project-wide; remediation requires scoped review to avoid disrupting unrelated platform features.

## 10. Change log

- **2026-11-18:** Initial live gap analysis. Confirmed 40 canonical personality modes, 9 legacy presets, 120 expression catalog entries, no asset/animation paths on those entries, current chat function version 4 with no generative model configured, and no Avatar Studio routes in the tracked main branch. Identified high-priority RLS/policy issues for verification and remediation. No live changes made.
