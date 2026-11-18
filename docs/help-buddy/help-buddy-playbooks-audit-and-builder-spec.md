# Help Buddy Playbooks — Batch 1 and 10,000-ticket audit

**Status:** Draft catalog prepared for review; not published to production.  
**Database inspected:** Supabase project `fzwbvccvqnbvzbqfgiep`, table `public.tickets`.  
**Audit window:** 2020-02-10 through 2026-11-11 (UTC), based on ticket timestamps.

## Executive audit findings

| Measure | Result |
|---|---:|
| Ticket records | 10,000 |
| Organizations represented | 6 |
| Distinct category labels | 18 |
| Distinct ticket titles | 767 |
| Blank titles / categories | 0 / 0 |
| Explicitly marked synthetic/test records | 750 |
| Tickets titled `Service workflow assistance` | 4,404 |

The data is useful for validating that the ticketing model covers identity, endpoint, network, security, HR, finance, software, knowledge, and marketplace operations. It is not sufficiently descriptive to infer 30 precise troubleshooting procedures from historical ticket content alone.

## Category distribution

| Category | Tickets | Distinct titles | Test/demo-pattern records |
|---|---:|---:|---:|
| Hardware | 1,192 | 91 | 90 |
| Knowledge & Workflow | 1,161 | 61 | 60 |
| Software & Productivity | 1,101 | 1 | 0 |
| Finance & Billing | 1,100 | 1 | 0 |
| Identity & Access | 1,015 | 94 | 90 |
| Endpoint & Device | 940 | 4 | 0 |
| Security & Compliance | 924 | 2 | 0 |
| Network & Connectivity | 822 | 1 | 0 |
| HR & Staffing | 705 | 2 | 0 |
| Marketplace & Subscriptions | 529 | 2 | 0 |
| Endpoint | 90 | 90 | 90 |
| Security | 90 | 90 | 90 |
| Network | 90 | 90 | 90 |
| Infrastructure | 60 | 60 | 60 |
| Email & Collaboration | 60 | 60 | 60 |
| Device Management | 60 | 60 | 60 |
| Software | 60 | 60 | 60 |
| General | 1 | 1 | 0 |

Category labels should be normalized into a canonical taxonomy while retaining the original label for reporting. Suggested mappings: `Endpoint` → `Endpoint & Device`; `Network` → `Network & Connectivity`; `Security` → `Security & Compliance`; `Software` → `Software & Productivity`. Keep `Infrastructure`, `Device Management`, and `Email & Collaboration` as subcategories or service domains rather than silently discarding them.

## Data quality and interpretation

- 4,404 generic workflow titles are not actionable scenario names. They are distributed across Hardware (1,102), Knowledge & Workflow (1,101), Software & Productivity (1,101), and Finance & Billing (1,100).
- 750 tickets are explicitly marked synthetic/test/demo. These should be excluded from real-world demand ranking, but retained in a separate test-data segment.
- Top identifiable patterns include laptop hardware service requests, mobile-device compliance reviews, device enrollment, endpoint replacement, employee onboarding, recruitment support, new employee access provisioning, role assignment review, MFA issues, directory synchronization, network performance degradation, endpoint security alert review, security policy validation, marketplace product access, and enterprise license adjustment.
- Descriptions and resolution summaries commonly use generic placeholders such as “Historical service request with linked requester, assignee, department, SLA policy, and lifecycle history” and “Resolution and closure recorded in the service history.” These are not actual troubleshooting narratives.
- Ticket sources are evenly distributed across portal (1,851), monitoring (1,850), phone (1,850), email (1,850), marketplace (1,849), and synthetic_seed (750).
- Priority/status values span Critical, High, Medium, and Low and statuses including accepted, cancelled, closed, escalated, in_progress, new, offered, resolved, and waiting. Priority should not be copied blindly into templates; it must be determined from impact and urgency.

## Industry benchmark principles

The checklist model follows established ITSM patterns:
- Jira Service Management separates user-facing request types from underlying work types and workflows; multiple request forms can reuse a common workflow.
- Incident intake should capture impact, urgency, severity, affected services/assets, and responders.
- Problem work should capture root cause and workaround; change work should capture risk, impact, implementation, test, rollback/backout, schedule, and approvers.
- Zendesk-style ticket operations emphasize routing, triggers, views, and skills/teams. Help Buddy's first builder intentionally remains a simple ordered checklist editor—not a node-based automation canvas.
- ServiceNow is included as a benchmark reference for service catalog, incident/problem/change disciplines; the present audit does not claim feature-by-feature parity validation.

## Batch 1 — 30 master playbooks

The accompanying `help-buddy-playbooks-batch-1.json` contains the complete checklist content, default assignment, default priority, approval flag, escalation route, completion requirements, and version metadata for each of these:
1. Password reset
2. Account locked or sign-in blocked
3. New user account creation
4. Access request or permission change
5. MFA setup, recovery, or replacement
6. Laptop or desktop malfunction
7. New computer or equipment request
8. Monitor, keyboard, mouse, or peripheral issue
9. Device enrollment and configuration
10. Lost or stolen device
11. Software installation request
12. Application error or software not working
13. Microsoft 365 application issue
14. Email sending or receiving problem
15. Email account setup or mailbox configuration
16. Wi-Fi or network connectivity
17. VPN or remote-access issue
18. Network outage or service interruption
19. Suspicious email or phishing report
20. Suspected password or account compromise
21. Security incident or unauthorized access
22. Endpoint security alert investigation
23. Employee onboarding
24. Employee offboarding
25. Employee role, department, or manager change
26. Invoice, billing, or payment question
27. Purchase or spending approval
28. Knowledge article or procedure update
29. Business process or workflow assistance
30. Subscription, license, or marketplace access

## Help Buddy Playbook Builder — implementation specification

### Purpose and navigation
A full page named **Help Buddy Playbook Builder**, reachable from the Help Buddy section of the hamburger menu. It is separate from the Help Buddy side panel/character chat. It is a straightforward checklist editor, not an automation canvas.

### Main page
- Search and filter by name, category, status, owner, and scope.
- Tabs/filters: Master Playbooks, Company Playbooks, Department Playbooks, Drafts, Pending Approval, Published, Archived.
- Each row shows name, category, version, status, owner, last updated, and whether it is a protected master.
- Actions depend on permissions: View, Customize, Edit Draft, Submit for Approval, Publish, Duplicate, Archive, Roll Back.

### Checklist editor
- Edit playbook name, description, category, trigger/when to use, default priority, default assignment team, escalation path, and approval requirement.
- Add, edit, delete, and reorder checklist steps using simple up/down controls or drag-and-drop.
- Each step has label/instructions, required/optional flag, evidence required flag, and optional owner/team.
- Add completion requirements and escalation notes.
- Preview the checklist as Help Buddy will present it to the ticket assignee.
- Save draft, submit for approval, publish, or discard changes.
- No branching canvas, nodes, connectors, scripting, or autonomous actions in this first release.

### Master, company, and department inheritance
- Global master templates are protected and cannot be edited in place.
- Company Admin can create a company child copy from a master and customize that copy.
- Department Manager can add department-scoped steps to the company version where authorized.
- Child versions record `parent_playbook_id`, source master version, tenant/company, department scope, and creator.
- A child customization never changes the global master or another company's copy.

### Versioning and ticket snapshots
- Every published change creates a new immutable version.
- Existing tickets keep the exact playbook version and checklist snapshot they started with.
- New tickets use the currently published version selected by tenant/category/request type.
- Rollback republishes a previous version as a new version; it does not rewrite historical ticket snapshots.

### Permissions and approvals
- Global Admin: manage global master catalog and publish global versions.
- Company Admin: customize company child playbooks and submit/publish within company scope if policy allows.
- Department Manager: propose/add department-specific steps within assigned department scope.
- Help Desk Agent: view and execute published playbooks on tickets; cannot edit templates.
- Governance/Auditor: read versions, approvals, change history, and execution evidence.
- Require manager/resource-owner approval for sensitive changes; privileged/security playbooks require Security/Governance review.
- Enforce authorization server-side for every read/write/publish action and tenant/department scope. Do not rely on hidden UI controls.

### Audit trail
Record actor, action, timestamp, old/new version, scope, approval decision, reason, and affected playbook. Keep a revision diff and support rollback.

### Ticket execution
- When a ticket is created or a playbook is selected, copy a snapshot of the published playbook version into the ticket execution record.
- Checklist completion records step ID, label snapshot, completed by, timestamp, evidence reference, and notes.
- Help Buddy may summarize, remind, and recommend the next step, but cannot bypass approvals, perform privileged actions without authorization, or mark a step complete without authorized evidence.

### Suggested data model
- `help_buddy_playbooks`: stable identity, category, scope, parent, owner, status.
- `help_buddy_playbook_versions`: immutable version number, content JSON, published_at, created_by, change_summary.
- `help_buddy_playbook_approvals`: version, approver, decision, reason, decided_at.
- `ticket_playbook_runs`: ticket_id, playbook_id, version_id, immutable snapshot, started_at, completed_at.
- `ticket_playbook_step_runs`: run_id, step_snapshot, status, completed_by, completed_at, evidence_ref, notes.
- `help_buddy_playbook_audit`: actor, action, scope, target, before/after references, timestamp.

Do not deploy this schema until it has been reconciled with the existing Supabase schema, RLS model, and current ticket relationships. In particular, define tenant isolation and permission checks before exposing tables through the Data API.

## Recommended next data-quality improvements

1. Replace generic `Service workflow assistance` titles with structured request types and a user-friendly summary.
2. Add required fields by request type: affected service/asset, impact, urgency, location, error code, business purpose, approval owner, and desired completion date.
3. Store the actual diagnostic steps and resolution notes rather than generic placeholders.
4. Add a canonical category/subcategory taxonomy with a mapping from historical labels.
5. Mark test/demo data explicitly and exclude it from production demand analytics.
6. Add links among related incident, problem, change, access request, asset, and knowledge records.

## Publication status

The 30 playbooks and builder specification are drafted as portable artifacts. They are not yet inserted into Supabase or wired into the application. The connected GitHub integration reported read-only repository permissions (pull access but no push); branch creation on `Optimus-Prime-Maximus/Global_Command_Center` returned HTTP 403. Therefore no commit or pull request was created. The repository's current `README.md` is only the text `eeddd`, so there is no existing application source in that repository to safely modify through the available connection.