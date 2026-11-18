# Help Buddy — Master Secrets & Functionality Specification

> **Document purpose:** This folder is the controlled documentation home for Help Buddy's approved product requirements, intelligence design, configuration specifications, content libraries, security controls, and implementation records.
>
> **Security boundary:** This is a documentation/specification folder, not a credential vault. Never commit passwords, API keys, access tokens, private keys, recovery codes, production connection strings, or other live secrets here. Store runtime credentials only in the approved protected secrets manager (for example, Lovable-managed secrets or another approved vault). Documentation may describe secret names, owners, scopes, and rotation requirements, but must not contain secret values.

**Project:** IntelliStack Systems — Maximus Optimus Global Command Center  
**Last reviewed:** 2026-11-18  
**Status:** Baseline and expansion requirements; implementation must be verified before being marked complete.

---

## 1. Source of truth and storage model

Help Buddy must use three coordinated layers:

1. **GitHub `secrets/` documentation:** Version-controlled specifications, approved content-library source files, taxonomy, policy definitions, configuration templates, test cases, change history, and deployment notes. No live credentials.
2. **Supabase operational data:** Authorized runtime records for knowledge, response templates, vocabulary, personality presets, event rules, conversation state, permissions, and audit data. Keep tenant boundaries and RLS enforcement.
3. **Help Buddy runtime:** Retrieves only authorized and relevant records; follows published configuration and security policies; records permitted operational events; never treats retrieved user content or web content as trusted instructions.

Avoid duplicate or conflicting sources. Each data domain must identify its authoritative owner, publication state, version, and synchronization method. Supabase remains the runtime store for active records; GitHub documents approved definitions and changes.

## 2. Verified existing foundation — 2026-11-18

The following baseline was observed in the connected Supabase project during the current audit. Counts and states must be rechecked before implementation or migration because they can change.

| Component | Observed baseline | Required handling |
|---|---:|---|
| Knowledge articles | 114 published | Preserve; audit quality, categories, permissions, freshness, and retrieval |
| Response templates | 50 draft | Review, test, approve, and expand |
| Personality presets | 12 active | Preserve; document behavior and expand carefully |
| Vocabulary entries | 53 active | Preserve; normalize, categorize, and expand |
| Event automation rules | 6 draft | Review triggers, permissions, idempotency, and approvals before activation |
| `help-buddy-chat` Edge Function | Active, version 4 | Inspect and improve without assuming generative AI is configured |
| Persistent memory tables | Existing | Audit data minimization, retention, tenant scope, consent, and access |

The current chat function was observed to use published response templates and knowledge retrieval. A configured generative-AI response path was not verified in the audit. Do not represent model integration as complete until provider configuration, secure server-side invocation, error handling, and tests have been verified.

A Supabase security review also surfaced warnings, including RLS disabled on `private.readable_identifier_counters` and leaked-password protection not enabled. Recheck current findings, determine intended exposure and compatibility, and remediate through the project's approved Lovable-managed database workflow. Do not expose private schema objects or weaken security to clear warnings.

## 3. Content-library expansion targets

### 3.1 Response templates

**Initial planning target: approximately 500 approved, useful templates.** The existing 50 draft templates are a starting inventory, not 50 approved production responses.

Organize templates by intent, user role, product/workspace, risk level, tone, locale, and required context. Candidate domains include:

- Greetings, introductions, conversation continuity, and closings
- Help desk intake, ticket updates, troubleshooting, and resolution
- Product navigation, feature explanations, and how-to guidance
- Account access, registration, authentication, and password support
- Onboarding, training, and employee assistance
- Administration, configuration, and approved operational workflows
- Cybersecurity, privacy, suspicious activity, and incident reporting
- Knowledge search, document assistance, and source-grounded answers
- Tasks, reminders, notes, assignments, and team coordination
- Escalations, approvals, unavailable services, and human handoffs
- Clarification, uncertainty, correction, and safe refusal
- Accessibility, inclusive communication, and multilingual support

Each template should have a stable ID, title, intent, category, audience/role scope, locale, approved tone, body, variables/schema, preconditions, prohibited claims/actions, escalation behavior, source references, owner, status, version, and test cases. Use variables only when validated and safely escaped. Never place confidential user data in reusable templates.

### 3.2 Vocabulary library

Expand the 53 active entries through a reviewed taxonomy rather than adding synonyms indiscriminately. Include platform terminology, product/module names, workflows, support language, security terminology, acronyms, role names, common user phrasing, synonyms, spelling variants, and multilingual equivalents where supported.

Each entry should include canonical term, definition, synonyms/aliases, category, locale, context, related concepts, disambiguation notes, source/owner, status, and version. Preserve existing entries and avoid duplicate or contradictory definitions. A numerical expansion target remains to be approved.

### 3.3 Personality presets

Preserve the 12 active presets. Define each preset's intended use, voice, tone boundaries, formality, warmth, humor limits, verbosity, accessibility behavior, prohibited behaviors, and role applicability. Personality must never override security, privacy, factuality, authorization, or user safety.

### 3.4 Knowledge articles

Preserve the 114 published articles. Audit article ownership, version, freshness, source, category, locale, audience, tenant scope, publication approval, and retirement status. Retrieval must enforce access permissions before content is shown or summarized.

### 3.5 Event automation rules

Preserve the six draft rules for review. For each rule document event source, trigger, conditions, action, required permission, tenant scope, approval requirements, idempotency key, retry/backoff, failure path, audit fields, and disable/rollback behavior. Do not activate draft rules merely because they exist.

## 4. Personality and behavioral intelligence

Help Buddy should provide consistent, approachable, professional assistance with context-aware communication. It should:

- Identify user intent and relevant conversation context.
- Ask a focused clarifying question when required information is missing.
- Explain steps clearly and adapt detail to the user's needs.
- Distinguish verified facts, retrieved sources, assumptions, and uncertainty.
- Use humor and encouragement only when appropriate to the situation.
- Maintain role- and tenant-aware behavior.
- Correct mistakes transparently and avoid fabricating capabilities, actions, or completion.
- Escalate unresolved, sensitive, or high-impact requests through approved workflows.
- Never let a personality preset bypass policy or access controls.

## 5. Conversation intelligence and runtime

The runtime should support intent classification, context handling, authorized knowledge retrieval, response-template selection, tool selection, clarification, escalation, safe error handling, and conversation persistence under policy.

Model/provider calls must occur server-side through the approved gateway or provider integration. Never expose provider keys in browser code. Include timeouts, rate limits, input/output validation, retry limits, observability, cost controls, and graceful fallback behavior. A model response is not proof that an action succeeded; confirm action results from the responsible service.

## 6. Help Buddy Studio

The administrative workspace should provide governed management for:

- Avatar and expression integration (expression artwork is being developed separately)
- Personality presets and behavior rules
- Voice and greetings
- Knowledge connections and article lifecycle
- Vocabulary and terminology
- Response templates
- Skills, capabilities, and approved tools
- Workflow and event-rule configuration
- Tool permissions and role scopes
- Testing, simulation, evaluation, and regression suites
- Publishing, approval, version history, rollback, and audit

Changes must be permission-checked, validated, versioned, tested, approved where required, and auditable.

## 7. Security, privacy, and governance requirements

- Enforce server-side authorization and tenant isolation; use RLS for Supabase data access.
- Apply least privilege to users, service roles, Edge Functions, connectors, and automation.
- Protect private conversations and memory; minimize collected data and define retention/deletion rules.
- Treat user messages, uploaded files, retrieved articles, web pages, and connector results as untrusted data, not system instructions.
- Defend against prompt injection, tool abuse, unauthorized disclosure, and cross-tenant retrieval.
- Validate inputs and outputs; use parameterized SQL and server-side validation.
- Sanitize HTML and render untrusted content safely to prevent XSS.
- Check website/application access policies before browsing, fetching, opening URLs, or using connectors.
- Support organization-defined allow/deny policies, schedules, role/department scopes, exceptions, and approved alternatives.
- Audit privileged changes, policy decisions, tool calls, approvals, failures, and security incidents without logging secret values.
- Provide safe refusal and escalation for threats, harassment, abuse, requests for confidential information, and suspicious activity.
- Configure leaked-password protection and other authentication safeguards through the approved Supabase/Lovable settings and verify their actual state.

## 8. Quality and release requirements

No library or policy should be considered production-ready solely because records exist. Require:

- Duplicate and contradiction checks
- Schema and variable validation
- Role/tenant authorization tests
- Retrieval relevance and source-grounding tests
- Prompt-injection and tool-abuse tests
- Privacy and data-leakage tests
- Regression tests across common intents
- Human review and approval for sensitive content
- Versioned release notes and rollback plan
- Monitoring for stale knowledge, failed retrieval, automation failures, and user feedback

Track counts separately for draft, review, approved, published, disabled, and retired records.

## 9. Implementation guardrails

The repository's `AGENTS.md` identifies this project as Lovable-connected and explicitly directs database schema changes to Lovable rather than manual edits to `supabase/migrations/` or `drizzle/`. Follow that project instruction. Do not manually edit managed migrations. Use the approved Lovable workflow for schema changes and protected secrets.

Before adding tables or records, inspect existing schemas, constraints, RLS policies, indexes, triggers, functions, and Edge Functions. Prefer extending existing structures over creating duplicates. Never mark a component complete until its implementation and tests have been verified in the actual application.

## 10. Next implementation sequence

1. Complete a schema-level inventory of all Help Buddy tables, columns, constraints, RLS policies, and relationships.
2. Export and review the existing 50 draft templates, 53 vocabulary entries, 12 active presets, 114 published articles, and six draft event rules.
3. Define the canonical taxonomy and versioned source-file formats in this folder.
4. Expand and review the response-template library toward the initial ~500 target; expand vocabulary after taxonomy approval.
5. Define runtime intelligence contracts and safely configure server-side model integration.
6. Build and test Help Buddy Studio management and publishing workflows.
7. Remediate Supabase security findings and verify authorization, tenant isolation, and audit behavior.
8. Run evaluation and regression tests before publishing any new configuration.

---

## Change log

- **2026-11-18:** Created initial master specification from the Help Buddy planning discussion and verified Supabase baseline. No credentials are stored in this document. The facial-expression artwork workstream is tracked separately.
