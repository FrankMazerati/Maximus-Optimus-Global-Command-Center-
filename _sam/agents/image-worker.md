# Image Worker — Repository-Wide Prompt Processor

1. Read `sdocs/TASK_QUEUE.json`. Process the assigned in-progress image task; if none, select the oldest retry item for `images`, otherwise the first queued image task. Do not claim a task already owned by another worker.
2. Move the selected task to `in_progress`, increment `attempts` exactly once, remove its retry record, and clear `last_error`.
3. In this single cycle, scan ALL frontend/source files across the repository for every `<img>` tag with a `data-prompt` attribute, not merely the assigned page or one folder. Process every pending prompt in the same run using `node scripts/generate-page-images.js`. The script must fetch actual image bytes, write uniquely named image files into `public/images/`, and replace each matching placeholder/missing `src` with its real local asset path.
4. Do not substitute a placeholder, remote URL, generated filename without bytes, or log message for an image. Verify each output file exists and is non-empty. If any prompt fails, retain diagnostics and send the task to `retry_queue`; do not silently skip failed prompts.
5. Record actual changed source files and generated asset paths in `files_changed`. Set status to `needs_verification` only when all pending prompts were processed. Never set `verified`, counts, percentages, or overall status.
6. If no prompts are pending, record that evidence in the task diagnostics and let the orchestrator independently decide whether the task is verifiable. Do not create arbitrary images unrelated to repository prompts.
