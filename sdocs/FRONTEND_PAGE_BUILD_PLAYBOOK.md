# Frontend Page Build Playbook
## Maximus Optimus Global Command Center

This file is the mandatory build contract for the SAM Frontend Worker. It is based on the user-supplied consolidated Master Platform Navigation, Page Functionality & IntelliSync Integration Specification dated 18 November 2026. Do not use the superseded 30-workspace draft.

## 1. Approved global navigation order

Build in this exact order. Do not invent, rename, reorder, or add main workspaces. A submenu is a grouping; the destinations beneath it are the actual pages. Do not create endless nested menus.

1. Service Directory
2. IntelliStack Configuration Center
3. My Business Center
4. My Workspace
5. Global ID Center
6. Identity & Access Management
7. IntelliDesk Mission Control Center
8. New Active Directory
9. IntelliBase
10. IntelliStack Marketplace
11. Help Buddy
12. AI Systems & Intelligence
13. IntelliStaff
14. Collaboration & Productivity
15. Connector Hub
16. IntelliSync
17. Migration Center
18. Automation Center
19. Tenant Desk
20. NOC — Network Operations Center
21. SOC — Security Operations Center
22. Reports, Governance, Audits & Administration

Fixed bottom navigation, in this exact order: Service Center • Help Center • Log Out.

Navigation corrections:
- No separate Infrastructure main menu.
- IntelliSphere belongs as a submenu under Collaboration & Productivity, not a main workspace.
- No separate Notification Center or Command & Control Center.
- Request Access must be reachable from Service Directory, IAM, restricted resources, and Help Buddy/service-support contexts.
- Preserve the precise submenu and page destination names from the master specification. Never substitute an older inventory.

## 2. Cycle size and page order

Target **up to five complete page destinations per 10-minute cycle**. Five is a target ceiling, not permission to ship incomplete pages. If the next five cannot be built and locally checked to the required standard in the cycle, complete fewer and report the remaining destinations in order.

Start with the application shell and global header, then the top-level menu, then the first workspace's submenu group and its destinations. Continue through each workspace and its submenu destinations in the approved order above. Finish one coherent contiguous slice before advancing. Never skip ahead to easier pages.

The Orchestrator assigns one frontend task at a time. Within that assigned task, the worker may complete up to five consecutive destinations. Record the exact destination names and route paths in the cycle report and task files_changed. Maintain the next-destination cursor in `sdocs/FRONTEND_BUILD_PROGRESS.json`; update it only after the current contiguous slice is implemented. Do not mark pages complete just because their route or shell exists.

## 3. Mandatory page contract

Every destination must include, as appropriate:
- Correct page title, breadcrumb, workspace context, tenant context, and concise purpose statement.
- Role-aware action bar: primary action first, secondary actions next, overflow for less frequent actions.
- Responsive layout: desktop multi-column, adaptive tablet, phone portrait single-column, compact phone landscape; touch-friendly controls.
- For collections: authorized search, filters, sorting, pagination, saved views where relevant, refresh, visible filter chips and reset.
- For records: owner, tenant, status, created/updated timestamps, source system, linked records, and authorized audit history.
- Real data reads and writes using only documented Supabase tables, RPCs, and Edge Functions in `sdocs/schema-contract.md`.
- Forms with validation, duplicate checks, server-side authorization, field-level permissions, and safe error handling.
- Loading, empty, success, error, permission-denied, disconnected/not-configured, and stale-data states where applicable.
- Audit trail for every persisted change, with actor/time/action/target/result/correlation reference as supported by the backend.
- No dead buttons, placeholder callbacks, fake success messages, hardcoded pretend records, or browser-side authoritative security/reward decisions.

Standard action behavior:
- Create/Add/Register: validated form, duplicate and permission checks, server-authorized create, return record and audit event.
- Edit/Update: load current values, enforce field permissions, validate, preserve before/after history, avoid lost updates.
- Save: persist permitted fields, show progress and confirmed success; preserve drafts where supported.
- Submit/Request Approval: create workflow request, route to authorized approvers, show request ID/status.
- Approve/Reject: enforce approver scope and separation of duties; capture reason, actor, timestamp.
- Assign/Reassign: validate eligibility, scope, availability, update ownership, notify affected users.
- Run/Execute/Activate: validate preconditions, permissions, approvals, environment and duplicate execution; show result.
- Pause/Resume/Disable: preserve configuration/history and explain impact.
- Delete/Remove/Revoke: explicit confirmation, prefer reversible deactivation/soft-delete, audit actor/reason.
- Sync/Import/Export: show source, destination, scope, mapping, preview, approval, validation and result; never silently overwrite authoritative data.
- Retry/Recover: retry only safe/idempotent operations; show prior error and retry count.

## 4. Data ownership and integration

- Respect tenant boundaries, role scopes, data classification, retention, and each system's source-of-truth ownership.
- IntelliSync moves/maps/validates/reconciles authorized data; it does not become the owner of destination business records.
- Connector Hub owns external connection lifecycle and credentials references; IntelliSync owns transfer orchestration.
- Never display a connector as connected until a real connection test confirms it.
- Do not create or activate database objects, connectors, production changes, or destructive operations based solely on this product specification.
- If a required backend contract is missing, stop that action, document the exact missing table/function/contract, and let the Orchestrator route it to Supabase. Do not invent an API.

## 5. Visual direction and reference images

Read `sdocs/IMAGE_REFERENCE_GUIDE.md` before adding visuals. The intended visual language is a premium futuristic global operations center: deep navy/black environment, controlled electric-blue/cyan holographic lighting, polished glass/metal, crisp high-contrast typography, realistic robots, and a professional enterprise atmosphere. Keep the visual system consistent across all workspaces. Use supplied reference images as continuity/style references, not as a reason to copy screenshot UI chrome or text artifacts.

For each needed visual, insert:
`<img src="/images/placeholder.png" data-prompt="specific scene, composition, subject, lighting, aspect ratio, and intended page placement" alt="meaningful description" />`
The Image Worker replaces placeholders with actual local files. Never point a page at a missing asset.

## 6. Verification handoff

Before handoff:
1. Inspect the actual changed files and route tree.
2. Verify all links and buttons have real, documented actions.
3. Verify no unauthorized tenant data is exposed.
4. Verify the page uses real contract-backed data or clearly displays a disconnected/not-configured state.
5. Run available typecheck/lint/build/tests relevant to the project.
6. Record exact page destinations, route paths, files, tests, and blockers.
7. Set only the assigned task to `needs_verification`; never mark it verified or alter verified counts/status.

The Orchestrator independently audits the work. A page is not verified merely because the worker says it is done.
