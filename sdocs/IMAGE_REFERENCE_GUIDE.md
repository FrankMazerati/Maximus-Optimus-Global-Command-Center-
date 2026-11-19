# Image Reference Guide — Maximus Optimus Command Center

## Purpose
These are the user's visual continuity references for the Command Center. The Image Worker and Frontend Worker must consult this guide before generating or selecting page imagery.

## Reference set observed in the current conversation upload
The current conversation contains **six image files**, representing two main scenes in multiple crops/screenshot exports. The two full-quality source images are the preferred references:
- `Frank-Mazerati-QA-Robots-Reference.jpg`: Frank in a black suit and sunglasses, pointing toward a blue holographic display; a blonde woman in black professional attire with glasses and a QA lanyard holds a tablet; multiple dark humanoid robots stand in a blue-lit operations center.
- `Maximus-Optimus-Command-Center-Scene-Reference.jpg`: wide, symmetrical global command center with a central blue holographic human figure above a circular table, two human operators in the foreground, and humanoid robots arranged around the room.

Additional uploaded variants:
- `99.png`: screenshot export of the Frank + QA woman + robots scene; use the clean JPG source instead.
- `97.png`: screenshot export of the global command center scene; use the clean JPG source instead.
- `frank_ref.jpg`: smaller crop/duplicate of the Frank + QA woman scene.
- `center_ref.jpg`: smaller crop/duplicate of the command center scene.

The two preferred JPG source files are not yet committed into this repository. The user must add them to `public/images/reference/` using the filenames above before GitHub Actions workers can read the actual pixels. ChatGPT conversation attachments are not automatically visible to GitHub-hosted Actions runners. Do not pretend the agent can access an attachment that is not in the repository.

## Character and scene continuity rules
- Preserve the same visual identity of the male executive figure shown in the Frank reference: black suit, dark shirt, sunglasses, braided/loc'd hair, jewelry, confident directing posture. Do not invent a new person or claim a generated person is a real-world identity match; use the uploaded image as a visual reference for continuity.
- Preserve the QA colleague's visual role: professional blonde woman, glasses, black business attire, QA lanyard, tablet. Keep her a consistent recurring fictionalized visual character when she appears.
- Preserve the humanoid robot design language: dark polished metallic bodies, blue/cyan highlights, professional non-threatening posture.
- Preserve the Command Center environment: premium deep navy/black operations space, blue holographic surfaces, global map/data displays, circular glass/metal table, cinematic but readable lighting.
- The central holographic human figure belongs to the wide command-center environment and should remain a recurring brand motif where relevant.
- Keep the same general wardrobe, palette, lighting, character proportions, and environment across generated scenes. Avoid random redesigns between pages.
- Do not copy screenshot browser chrome, editing controls, watermarks, stray text, distorted logos, or illegible AI-generated lettering. UI text and logos should be rendered by the application, not baked into generated art.
- Use the reference images for visual guidance, not as the actual background on every page. Choose visuals relevant to each workspace and keep interface controls readable.

## Repository paths expected
After the user imports the two clean JPGs, place them at:
- `public/images/reference/Frank-Mazerati-QA-Robots-Reference.jpg`
- `public/images/reference/Maximus-Optimus-Command-Center-Scene-Reference.jpg`

Do not process or rename these reference masters in `scripts/generate-page-images.js`. The script should generate separate page assets under `public/images/`.

## Current import status
- Two preferred source images identified and inspected.
- Four alternate screenshot/crop duplicates identified and inspected.
- Binary image upload into GitHub has not been performed by this workflow. The six original uploads remain available in this ChatGPT conversation, not in the GitHub repository.
