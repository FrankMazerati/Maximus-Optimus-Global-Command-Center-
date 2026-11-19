#!/usr/bin/env bash
# SAM 8-relay AI router.
# Usage: ./scripts/free-ai-router.sh _sam/agents/supabase-worker.md
#
# Free-first safety: paid DeepSeek/Mistral API tiers are disabled unless
# ALLOW_PAID_AI=true is explicitly configured in the workflow environment.
set -uo pipefail

AGENT_FILE="${1:-}"
if [[ -z "$AGENT_FILE" || ! -f "$AGENT_FILE" ]]; then
  echo "Usage: $0 <agent-prompt-file>" >&2
  echo "Prompt file not found: ${AGENT_FILE:-<missing>}" >&2
  exit 2
fi

if ! command -v aider >/dev/null 2>&1; then
  echo "Aider is not installed; cannot run coding-model relays." >&2
fi

REPORT_FILE="sdocs/CYCLE_REPORTS.md"
GEMINI_PROMPT="Read and execute $AGENT_FILE for one complete vertical feature slice."
AIDER_PROMPT="Read and execute $AGENT_FILE"

record_success() {
  local relay="$1"
  local model="$2"
  mkdir -p "$(dirname "$REPORT_FILE")"
  touch "$REPORT_FILE"
  {
    printf '\n### AI Relay Success — %s\n' "$(date -u '+%Y-%m-%d %H:%M:%S UTC')"
    printf -- '- Agent prompt: `%s`\n' "$AGENT_FILE"
    printf -- '- Successful relay: **Relay %s**\n' "$relay"
    printf -- '- Successful model: `%s`\n' "$model"
    printf -- '- GitHub Actions run: %s\n' "${GITHUB_RUN_ID:-local/manual}"
  } >> "$REPORT_FILE"
  echo "Relay $relay succeeded with $model"
}

try_aider() {
  local relay="$1"
  local model="$2"
  shift 2
  echo "Trying Relay $relay: $model"
  if aider "$@" --yes --message "$AIDER_PROMPT"; then
    record_success "$relay" "$model"
    return 0
  fi
  echo "Relay $relay failed or was rate-limited; moving to the next relay." >&2
  return 1
}

# Relay 1 — Google AI Studio / Gemini.
if [[ -n "${GEMINI_API_KEY:-}" ]] && command -v gemini >/dev/null 2>&1; then
  echo "Trying Relay 1: Google AI Studio / gemini-2.5-flash"
  if gemini --model gemini-2.5-flash --yolo -p "$GEMINI_PROMPT"; then
    record_success 1 "gemini-2.5-flash"
    exit 0
  fi
  echo "Relay 1 failed or was rate-limited; moving to the next relay." >&2
else
  echo "Relay 1 skipped: GEMINI_API_KEY is empty or Gemini CLI is unavailable."
fi

# Relay 2 — DeepSeek official API. This API is usage-billed; opt-in required.
if [[ "${ALLOW_PAID_AI:-false}" == "true" ]] && [[ -n "${DEEPSEEK_API_KEY:-}" ]] && command -v aider >/dev/null 2>&1; then
  if OPENAI_API_BASE="https://api.deepseek.com" OPENAI_API_KEY="$DEEPSEEK_API_KEY" try_aider 2 "DeepSeek API / deepseek-chat" --model openai/deepseek-chat; then exit 0; fi
else
  echo "Relay 2 skipped: requires ALLOW_PAID_AI=true and DEEPSEEK_API_KEY (DeepSeek API may incur charges)."
fi

# Relay 3 — Groq-hosted Llama.
if [[ -n "${GROQ_API_KEY:-}" ]] && command -v aider >/dev/null 2>&1; then
  if GROQ_API_KEY="$GROQ_API_KEY" try_aider 3 "Groq / llama-3.3-70b-versatile" --model groq/llama-3.3-70b-versatile; then exit 0; fi
else
  echo "Relay 3 skipped: GROQ_API_KEY is empty or Aider is unavailable."
fi

# Relay 4 — Cerebras OpenAI-compatible inference.
if [[ -n "${CEREBRAS_API_KEY:-}" ]] && command -v aider >/dev/null 2>&1; then
  if OPENAI_API_BASE="https://api.cerebras.ai/v1" OPENAI_API_KEY="$CEREBRAS_API_KEY" try_aider 4 "Cerebras / llama-3.3-70b" --model openai/llama-3.3-70b; then exit 0; fi
else
  echo "Relay 4 skipped: CEREBRAS_API_KEY is empty or Aider is unavailable."
fi

# Relay 5 — SambaNova OpenAI-compatible inference.
if [[ -n "${SAMBANOVA_API_KEY:-}" ]] && command -v aider >/dev/null 2>&1; then
  if OPENAI_API_BASE="https://api.sambanova.ai/v1" OPENAI_API_KEY="$SAMBANOVA_API_KEY" try_aider 5 "SambaNova / Meta-Llama-3.3-70B-Instruct" --model openai/Meta-Llama-3.3-70B-Instruct; then exit 0; fi
else
  echo "Relay 5 skipped: SAMBANOVA_API_KEY is empty or Aider is unavailable."
fi

# Relay 6 — Mistral Codestral. API usage is billed; opt-in required.
if [[ "${ALLOW_PAID_AI:-false}" == "true" ]] && [[ -n "${MISTRAL_API_KEY:-}" ]] && command -v aider >/dev/null 2>&1; then
  if MISTRAL_API_KEY="$MISTRAL_API_KEY" try_aider 6 "Mistral / codestral-latest" --model mistral/codestral-latest; then exit 0; fi
else
  echo "Relay 6 skipped: requires ALLOW_PAID_AI=true and MISTRAL_API_KEY (Codestral API may incur charges)."
fi

# Relay 7 — OpenRouter DeepSeek free endpoint.
if [[ -n "${OPENROUTER_API_KEY:-}" ]] && command -v aider >/dev/null 2>&1; then
  if OPENROUTER_API_KEY="$OPENROUTER_API_KEY" try_aider 7 "OpenRouter / deepseek/deepseek-r1:free" --model openrouter/deepseek/deepseek-r1:free; then exit 0; fi
else
  echo "Relay 7 skipped: OPENROUTER_API_KEY is empty or Aider is unavailable."
fi

# Relay 8 — OpenRouter free cascade: Llama, then Qwen coder.
if [[ -n "${OPENROUTER_API_KEY:-}" ]] && command -v aider >/dev/null 2>&1; then
  if OPENROUTER_API_KEY="$OPENROUTER_API_KEY" try_aider 8 "OpenRouter / meta-llama/llama-3.3-70b-instruct:free" --model openrouter/meta-llama/llama-3.3-70b-instruct:free; then exit 0; fi
  if OPENROUTER_API_KEY="$OPENROUTER_API_KEY" try_aider 8 "OpenRouter / qwen/qwen-2.5-coder-32b-instruct:free" --model openrouter/qwen/qwen-2.5-coder-32b-instruct:free; then exit 0; fi
else
  echo "Relay 8 skipped: OPENROUTER_API_KEY is empty or Aider is unavailable."
fi

echo "All configured AI relays failed for $AGENT_FILE." >&2
exit 1
