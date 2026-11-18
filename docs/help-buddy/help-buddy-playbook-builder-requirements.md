# Help Buddy Playbook Builder — product requirements

## Product boundary
The builder manages reusable ticket checklists. It is not a general workflow automation product. No visual node graph, connectors, arbitrary scripts, or autonomous action execution in Batch 1.

## User journey
1. Help Buddy admin opens Hamburger → Help Buddy → Playbook Builder.
2. Admin searches or filters the playbook list.
3. Admin opens a master template and selects **Customize for my company** (never Edit Master).
4. Admin edits defaults and ordered checklist steps.
5. Admin previews the assignee's ticket experience.
6. Admin saves a draft and submits it for required approval.
7. Authorized approver reviews the diff and approves/rejects with a reason.
8. Authorized publisher publishes a new immutable version.
9. New tickets use the new version; existing ticket runs remain pinned to their original version.

## Required editor controls
- Name, description, category, usage trigger
- Default priority, assignment team, escalation route
- Approval required toggle and approval roles
- Ordered steps: instruction, required flag, evidence-required flag, optional owner
- Completion requirements
- Preview, Save Draft, Submit for Approval, Publish, Duplicate, Archive

## Access model
Global Admin owns global masters. Company Admin customizes only their tenant's child playbooks. Department Manager may add department-scoped steps only within their department. Agents execute but do not edit. Governance can inspect version history and evidence. All authorization must be enforced server-side.

## Data integrity
Published versions are immutable. Every ticket run stores a full version snapshot. A rollback creates a new published version based on a previous version; it never mutates old ticket runs.

## Security requirements
Tenant scoping on every query and mutation; least privilege; approval separation of duties; immutable audit events; no secrets in checklist text/evidence; secure evidence references; RLS policies aligned with the existing identity and organization model. Do not use user-editable profile metadata as an authorization source.

## Acceptance criteria
- All 30 catalog entries can be listed, searched, filtered, viewed, and previewed.
- A company can customize a child without changing the global master or another tenant.
- Department additions remain scoped to that department.
- Agents can execute published checklists but cannot edit or publish.
- Approvals are required and recorded for sensitive changes.
- Published versions cannot be edited in place.
- Existing ticket runs do not change after a new version is published.
- Every step completion records actor, time, evidence reference, and notes where required.
- Every UI action has a real server-side implementation and an explicit error/unauthorized state.