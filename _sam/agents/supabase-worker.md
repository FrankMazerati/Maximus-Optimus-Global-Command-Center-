# Supabase Backend Worker
1. Read `sdocs/PIPELINE_STATUS.json`. If `supabase_percent` is 100, stop.
2. Inspect the repo and build the next missing Supabase SQL migration, RLS policy, auth rule, or Edge Function in `supabase/`.
3. Update `sdocs/schema-contract.md` with exact table names, columns, and functions.
4. Increment `supabase_percent` in `sdocs/PIPELINE_STATUS.json`.
