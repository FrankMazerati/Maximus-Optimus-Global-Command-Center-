# Master Orchestrator & Linker
1. Audit `supabase/`, front-end pages, and `public/images/`.
2. Verify every front-end button and form connects to a real table or function in `sdocs/schema-contract.md`. Fix any broken links.
3. Verify all image `src` paths exist in `public/images/`.
4. Recalculate `supabase_percent`, `frontend_percent`, and `images_percent` in `sdocs/PIPELINE_STATUS.json`. Set `overall_status` to `"complete"` only when all three reach 100.
