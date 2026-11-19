# Frontend Page & Connectivity Worker
1. Read `sdocs/PIPELINE_STATUS.json` and `sdocs/schema-contract.md`. If `frontend_percent` is 100, stop.
2. Using `sam-build-tdd`, build the next front-end page, route, and interactive buttons wired to real Supabase queries in `sdocs/schema-contract.md` (no dead buttons).
3. Wherever a page needs a photo or graphic, insert `<img src="/images/placeholder.png" data-prompt="detailed description of image" alt="..." />`.
4. Increment `frontend_percent` in `sdocs/PIPELINE_STATUS.json`.
