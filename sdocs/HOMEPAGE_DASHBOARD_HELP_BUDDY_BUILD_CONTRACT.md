# Command Center Homepage, Live Dashboard Widgets & Help Buddy Build Contract
**Approved implementation addendum — 19 November 2026**

This addendum makes the homepage/dashboard, appearance modes, global information strips, quick picks, and Help Buddy module navigation explicit for SAM. It supplements the approved 22-workspace master specification; it does not replace or reorder its workspace/page inventory. The existing login page is considered implemented; do not rebuild or redesign it unless a separately assigned task requires a verified correction.

## 1. Homepage visual system and appearance modes
The homepage's visual identity is the blue holographic Command Center: cool blue, blue-gray, silver, glass and cyan accents. Provide two complete, coordinated themes:
- **Daytime:** pale blue/blue-gray and silver surfaces, white/glass panels, cyan/blue accents, dark high-contrast text, restrained glow.
- **Nighttime:** deep navy/near-black surfaces, dark blue panels, electric-blue/cyan highlights, light high-contrast text, restrained holographic glow.

Requirements:
- One shared layout and component system; theme changes colors, surfaces, borders, shadows, glow and text contrast only. It must not change page structure, navigation, permissions, data, or behavior.
- Put an obvious Day/Night theme control in the homepage/header and Appearance settings. Persist the authenticated user's preference using an approved backend contract; apply a safe default before preference loads and avoid a flash of the wrong theme. If persistence contract is not yet available, document the missing contract and use only a clearly labelled temporary local preference—not pretend it is saved to the account.
- Respect accessible contrast, visible focus, keyboard/touch operation, reduced motion, and chart/status color semantics in both themes.
- Keep the existing login page's approved three-color identity (blue #1769D2, purple #853CC7, green #168653) separate from the authenticated homepage theme palette. Do not accidentally recolor or rebuild login.

## 2. Homepage global information strip
Build compact, responsive widgets beneath the profile/header area. They should be micro-sized at desktop, adapt to tablet/mobile, and expand to useful detail on interaction. Never let the strips crowd out the main workspace.

### Global clocks
- Show a configurable set of world clocks, each with city, IANA time-zone identifier, local time, date, and UTC offset; indicate day/night locally.
- Use reliable timezone conversion (IANA zones / Intl APIs), handle daylight-saving transitions, and label the time zone. Never hard-code a city offset or assume every region changes clocks.
- Allow authorized users to add/remove/reorder/pin clocks; persist preferences only through a documented contract. Provide a useful empty/default state and graceful handling of invalid/unavailable zone data.
- Clock refresh must be accurate without excessive rerenders; no fabricated time or static clock screenshots.

### Global news feed
- Show compact headlines with publisher/source, publication time, topic/category, and a clear open-article action. Provide filters/topics and refresh/last-updated state.
- Use a configured, approved news provider/API through a server-side integration or documented connector. Do not scrape arbitrary sites, invent headlines, or expose provider secrets in the browser.
- Clearly distinguish live, delayed, stale, disconnected, and empty states. Preserve source attribution and timestamps; link to the actual article URL returned by the provider.
- Respect tenant/user policy and configured geography/topics. Do not present AI summaries as publisher text.

### Stock picker / market watch
- Provide a searchable symbol/company picker, selected instruments/watchlist, quote summary, daily change/percentage, market status, currency, source and quote timestamp. A small chart is optional when supported by real historical data.
- Support common equities/ETFs/index instruments only as enabled by the configured market-data provider. Show delayed vs real-time status explicitly.
- Use server-side approved market-data integration; no guessed prices, made-up tickers, hardcoded “live” quotes, or client-exposed API keys. No trade execution or investment advice action is implied by a watchlist.
- Empty, invalid symbol, market closed, rate-limited, stale, disconnected and provider-error states must be handled.

### Quick Picks
- A compact, configurable launcher for the user's most relevant authorized destinations: pinned/favorite pages, recent pages, frequently used services, and approved actions.
- Every pick must navigate to a real route or invoke a real documented action. Filter by role, tenant, entitlement and access policy; do not reveal restricted page names/data as a way around authorization.
- Allow pin/unpin/reorder where supported. Include empty state and clear labels/icons. No decorative cards or placeholder links.

## 3. Help Buddy — module boundaries and tab/page switching
Help Buddy remains workspace 11 in the approved 22-workspace navigation. Preserve the master specification's modules and page names:
- Attachments & Voice: File Attachments, Voice Input, Voice Notes.
- Conversations: New Conversation, Conversation History, Saved Conversations.
- Help Buddy Dashboard: Assigned Work, Support Overview.
- Help Buddy Studio: Avatar, Personality, Voice, Greetings, Knowledge Connections, Skills & Capabilities, Workflow Configuration, Tool Permissions, Testing & Simulation, Publishing & Version History.
- Knowledge Assistance: Knowledge Search, Article Recommendations.
- Notes & Reminders: Quick Notes, Reminders, Saved Information.
- Tasks & Checklists: My Tasks, Team Tasks, Completed Tasks.
- Team Coordination: Manager Coordination, Team Assignments, Escalations.

Navigation and interaction requirements:
- Provide a clear Help Buddy module navigation with tabs or a compact tab/side-tab hybrid appropriate to screen size. Selecting a tab changes to its actual route/page content; browser back/forward, direct links, refresh, keyboard navigation, focus state and active-tab indication must work.
- Do not implement tabs as decorative labels or as buttons that merely change a heading. Each tab must load its assigned module/page, permissions, data and actions.
- Preserve relevant in-progress conversation/draft state when switching modules where safe; do not leak private conversation content into other modules or tenants. Confirm before discarding unsaved edits.
- Studio tabs/actions are role-gated; changes are versioned, tested/simulated and audited before publishing. Tool permissions must be explicit and least-privilege.
- Voice and attachments require permission checks, clear recording/upload state, supported format/size validation, cancellation and failure handling.
- Knowledge search must enforce source-level permissions before results/snippets are returned. Private knowledge bases never leak in search recommendations.
- Notes, reminders, tasks and team assignments must use their authoritative backend services and tenant/role scope.

## 4. Explicit 50/50 implementation ownership
Split delivery between frontend and backend without splitting the user experience:
- **Frontend (SAM Frontend Worker):** shared homepage shell, responsive widget layouts, Day/Night theme presentation and control, clock display and selection UI, news and market-data presentation, quick-pick navigation, Help Buddy module tabs/routes, forms, loading/empty/error/stale/disconnected states, accessibility and interaction wiring.
- **Backend (SAM Supabase Worker):** authenticated user theme and dashboard preferences, per-user clock configuration, quick-pick favorites/recent metadata where approved, tenant-scoped Help Buddy data models, notes/tasks/reminders/conversation metadata where in scope, audit events, RLS, server-side authorization, and exact documented RPC/Edge Function contracts.
- **External provider boundary:** news and market data must be supplied by approved Connector Hub/provider integrations. Supabase owns secure configuration/reference and policy/audit where appropriate; provider secrets remain server-side. Do not fabricate a provider or claim live data until a connection is configured and tested.
- The Orchestrator owns sequencing, conflict coordination and independent verification. Frontend must not invent backend schemas; backend must not create UI-only fake success. If a contract or provider is missing, record a blocker and coordinate the matching task rather than ship a mock.

## 5. Acceptance checklist
A feature is complete only when:
1. It follows the approved 22-workspace structure and existing homepage identity.
2. Both themes work on desktop, tablet and phone without layout or contrast regressions.
3. All data is real and source-attributed, or the UI clearly states not configured/disconnected; never label sample data as live.
4. Every interactive control has a real, authorized action and meaningful failure/empty/loading states.
5. Preferences and records are tenant/user scoped, validated server-side and audited where appropriate.
6. Help Buddy tabs navigate to real modules and preserve safe state; access controls are enforced on every backend request.
7. Build, lint and tests pass; the Orchestrator independently verifies actual implementation. A worker's handoff is not verification.
