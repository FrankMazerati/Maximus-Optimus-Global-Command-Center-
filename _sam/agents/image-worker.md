# Page Visual Asset Worker
1. Scan all front-end files for `<img>` tags with `data-prompt="..."` attributes that do not yet point to a unique generated file in `public/images/`.
2. Run `node scripts/generate-page-images.js` to download free images from Pollinations.ai and update the `src` attributes.
3. Update `images_percent` in `sdocs/PIPELINE_STATUS.json`.
