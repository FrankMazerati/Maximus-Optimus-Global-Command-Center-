#!/usr/bin/env bash
# Free AI router for one SAM agent prompt.
# Usage: ./scripts/free-ai-router.sh _sam/agents/supabase-worker.md
set -uo pipefail

AGENT_FILE="${1:-}"
if [[ -z "$AGENT_FILE" || ! -f "$AGENT_FILE" ]]; then
  echo "Usage: $0 <agent-prompt-file>" >&2
  echo "Prompt file not found: ${AGENT_FILE:-<missing>}" >&2
  exit 2
fi

REPORT_FILE="sdocs/CYCLE_REPORTS.md"
PROMPT="Read and execute $AGENT_FILE for one complete vertical feature slice."

record_success() {
  local tier="$1"
  mkdir -p "$(dirname "$REPORT_FILE")"
  touch "$REPORT_FILE"
  {
    printf '\n### AI Router — %s\n' "$(date -u '+%Y-%m-%d %H:%M:%S UTC')"
    printf -- '- Agent prompt: `%s`\n' "$AGENT_FILE"
    printf -- '- Successful AI tier: **%s**\n' "$tier"
    printf -- '- GitHub Actions run: %s\n' "${GITHUB_RUN_ID:-local/manual}"
  } >> "$REPORT_FILE"
  echo "AI tier succeeded: $tier"
}

# Tier 1: Google AI Studio / Gemini CLI.
if [[ -n "${GEMINI_API_KEY:-}" ]] && command -v gemini >/dev/null 2>&1; then
  echo "Trying Tier 1: Google AI Studio (Gemini 2.5 Flash)..."
  if gemini --model gemini-2.5-flash --yolo -p "$PROMPT"; then
    record_success "Tier 1 — Google AI Studio (gemini-2.5-flash)"
    exit 0
  fi
  echo "Tier 1 failed; trying the next configured provider." >&2
else
  echo "Tier 1 skipped: GEMINI_API_KEY or gemini CLI is unavailable." >&2
fi

# Tier 2: GitHub Models. The legacy Azure hostname was retired in 2025.
# GitHub's current OpenAI-compatible endpoint is models.github.ai/inference.
if [[ -n "${GITHUB_TOKEN:-}" ]] && command -v aider >/dev/null 2>&1; then
  echo "Trying Tier 2: GitHub Models (openai/gpt-4o-mini)..."
  if OPENAI_API_BASE="https://models.github.ai/inference" OPENAI_API_KEY="$GITHUB_TOKEN" aider --model openai/gpt-4o-mini --yes --message "$PROMPT"; then
    record_success "Tier 2 — GitHub Models (openai/gpt-4o-mini)"
    exit 0
  fi
  echo "Tier 2 failed; trying the next configured provider." >&2
else
  echo "Tier 2 skipped: GITHUB_TOKEN or aider is unavailable." >&2
fi

# Tier 3: OpenRouter free model.
if [[ -n "${OPENROUTER_API_KEY:-}" ]] && command -v aider >/dev/null 2>&1; then
  echo "Trying Tier 3: OpenRouter free Qwen coder..."
  if OPENROUTER_API_KEY="$OPENROUTER_API_KEY" aider --model openrouter/qwen/qwen-2.5-coder-32b-instruct:free --yes --message "$PROMPT"; then
    record_success "Tier 3 — OpenRouter (qwen/qwen-2.5-coder-32b-instruct:free)"
    exit 0
  fi
  echo "Tier 3 failed." >&2
else
  echo "Tier 3 skipped: OPENROUTER_API_KEY or aider is unavailable." >&2
fi

echo "All configured AI tiers failed for $AGENT_FILE." >&2
exit 1
