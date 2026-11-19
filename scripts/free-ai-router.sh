#!/usr/bin/env bash
# SAM 14-slot, free-first AI relay router.
# Usage: ./scripts/free-ai-router.sh _sam/agents/frontend-worker.md
# GitHub Models slots 4-5 are intentionally skipped: the service was retired.
# Usage-billed providers are disabled unless ALLOW_PAID_AI=true.
set -uo pipefail

AGENT_FILE="${1:-}"
if [[ -z "$AGENT_FILE" || ! -f "$AGENT_FILE" ]]; then
  echo "Usage: $0 <agent-prompt-file>" >&2
  echo "Prompt file not found: ${AGENT_FILE:-<missing>}" >&2
  exit 2
fi

REPORT_FILE="sdocs/CYCLE_REPORTS.md"
GEMINI_PROMPT="Read and execute $AGENT_FILE for one complete vertical feature slice."
AIDER_PROMPT="Read and execute $AGENT_FILE"
PAID_AI_ENABLED="${ALLOW_PAID_AI:-false}"

record_success() {
  local relay="$1" model="$2"
  mkdir -p "$(dirname "$REPORT_FILE")"
  touch "$REPORT_FILE"
  {
    printf '\n### AI Relay Success — %s\n' "$(date -u '+%Y-%m-%d %H:%M:%S UTC')"
    printf -- '- Agent prompt: \x60%s\x60\n' "$AGENT_FILE"
    printf -- '- Successful relay: **Relay %s**\n' "$relay"
    printf -- '- Successful model: \x60%s\x60\n' "$model"
    printf -- '- GitHub Actions run: %s\n' "${GITHUB_RUN_ID:-local/manual}"
  } >> "$REPORT_FILE"
  echo "Relay $relay succeeded with $model"
}

try_aider() {
  local relay="$1" model="$2" model_arg="$3"
  echo "Trying Relay $relay: $model"
  if aider --model "$model_arg" --yes --message "$AIDER_PROMPT"; then
    record_success "$relay" "$model"
    return 0
  fi
  echo "Relay $relay failed or was rate-limited; moving to the next relay." >&2
  return 1
}

try_gemini() {
  local relay="$1" key_name="$2" key_value="$3"
  echo "Trying Relay $relay: Google Gemini 2.5 Flash ($key_name)"
  if GEMINI_API_KEY="$key_value" gemini --model gemini-2.5-flash --yolo -p "$GEMINI_PROMPT"; then
    record_success "$relay" "gemini-2.5-flash ($key_name)"
    return 0
  fi
  echo "Relay $relay failed or was rate-limited; moving to the next relay." >&2
  return 1
}

if ! command -v aider >/dev/null 2>&1; then
  echo "Aider is not installed; Aider-based relays will be skipped." >&2
fi

# Relays 1-3 — rotate through three independent Gemini API keys.
if command -v gemini >/dev/null 2>&1; then
  if [[ -n "${GEMINI_API_KEY:-}" ]]; then try_gemini 1 GEMINI_API_KEY "$GEMINI_API_KEY" && exit 0; else echo "Relay 1 skipped: GEMINI_API_KEY is empty."; fi
  if [[ -n "${GEMINI_API_KEY_2:-}" ]]; then try_gemini 2 GEMINI_API_KEY_2 "$GEMINI_API_KEY_2" && exit 0; else echo "Relay 2 skipped: GEMINI_API_KEY_2 is empty."; fi
  if [[ -n "${GEMINI_API_KEY_3:-}" ]]; then try_gemini 3 GEMINI_API_KEY_3 "$GEMINI_API_KEY_3" && exit 0; else echo "Relay 3 skipped: GEMINI_API_KEY_3 is empty."; fi
else
  echo "Relays 1-3 skipped: Gemini CLI is unavailable."
fi

# Relays 4-5 — GitHub Models fully retired on 2026-07-30.
echo "Relay 4 skipped: GitHub Models / DeepSeek is retired; GITHUB_TOKEN is not an inference key."
echo "Relay 5 skipped: GitHub Models / Meta Llama is retired; GITHUB_TOKEN is not an inference key."

# Relay 6 — Groq free-tier API.
if [[ -n "${GROQ_API_KEY:-}" ]] && command -v aider >/dev/null 2>&1; then
  GROQ_API_KEY="$GROQ_API_KEY" try_aider 6 "Groq / llama-3.3-70b-versatile" "groq/llama-3.3-70b-versatile" && exit 0
else echo "Relay 6 skipped: GROQ_API_KEY is empty or Aider is unavailable."; fi

# Relay 7 — Cerebras OpenAI-compatible API.
if [[ -n "${CEREBRAS_API_KEY:-}" ]] && command -v aider >/dev/null 2>&1; then
  OPENAI_API_BASE="https://api.cerebras.ai/v1" OPENAI_API_KEY="$CEREBRAS_API_KEY" try_aider 7 "Cerebras / llama-3.3-70b" "openai/llama-3.3-70b" && exit 0
else echo "Relay 7 skipped: CEREBRAS_API_KEY is empty or Aider is unavailable."; fi

# Relay 8 — SambaNova OpenAI-compatible API.
if [[ -n "${SAMBANOVA_API_KEY:-}" ]] && command -v aider >/dev/null 2>&1; then
  OPENAI_API_BASE="https://api.sambanova.ai/v1" OPENAI_API_KEY="$SAMBANOVA_API_KEY" try_aider 8 "SambaNova / Meta-Llama-3.3-70B-Instruct" "openai/Meta-Llama-3.3-70B-Instruct" && exit 0
else echo "Relay 8 skipped: SAMBANOVA_API_KEY is empty or Aider is unavailable."; fi

# Relay 9 — Mistral Codestral (usage-billed; explicit opt-in).
if [[ "$PAID_AI_ENABLED" == "true" ]] && [[ -n "${MISTRAL_API_KEY:-}" ]] && command -v aider >/dev/null 2>&1; then
  MISTRAL_API_KEY="$MISTRAL_API_KEY" try_aider 9 "Mistral / codestral-latest" "mistral/codestral-latest" && exit 0
else echo "Relay 9 skipped: requires ALLOW_PAID_AI=true and MISTRAL_API_KEY."; fi

# Relay 10 — Cloudflare Workers AI; correct account-scoped endpoint.
if [[ "$PAID_AI_ENABLED" == "true" ]] && [[ -n "${CLOUDFLARE_API_TOKEN:-}" && -n "${CLOUDFLARE_ACCOUNT_ID:-}" ]] && command -v aider >/dev/null 2>&1; then
  CF_BASE="https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/ai/v1"
  OPENAI_API_BASE="$CF_BASE" OPENAI_API_KEY="$CLOUDFLARE_API_TOKEN" try_aider 10 "Cloudflare Workers AI / @cf/meta/llama-3.3-70b-instruct-fp8-fast" "openai/@cf/meta/llama-3.3-70b-instruct-fp8-fast" && exit 0
else echo "Relay 10 skipped: requires ALLOW_PAID_AI=true, CLOUDFLARE_API_TOKEN, and CLOUDFLARE_ACCOUNT_ID."; fi

# Relay 11 — Hugging Face Inference Providers; provider usage may be billed.
if [[ "$PAID_AI_ENABLED" == "true" ]] && [[ -n "${HF_TOKEN:-}" ]] && command -v aider >/dev/null 2>&1; then
  OPENAI_API_BASE="https://router.huggingface.co/v1" OPENAI_API_KEY="$HF_TOKEN" try_aider 11 "Hugging Face Router / Qwen2.5-Coder-32B-Instruct" "openai/Qwen/Qwen2.5-Coder-32B-Instruct" && exit 0
else echo "Relay 11 skipped: requires ALLOW_PAID_AI=true and HF_TOKEN."; fi

# Relay 12 — Cohere Command R+; production keys are billed.
if [[ "$PAID_AI_ENABLED" == "true" ]] && [[ -n "${COHERE_API_KEY:-}" ]] && command -v aider >/dev/null 2>&1; then
  COHERE_API_KEY="$COHERE_API_KEY" try_aider 12 "Cohere / command-r-plus-08-2024" "command-r-plus-08-2024" && exit 0
else echo "Relay 12 skipped: requires ALLOW_PAID_AI=true and COHERE_API_KEY."; fi

# Relay 13 — NVIDIA NIM OpenAI-compatible endpoint; check account pricing/credits.
if [[ "$PAID_AI_ENABLED" == "true" ]] && [[ -n "${NVIDIA_API_KEY:-}" ]] && command -v aider >/dev/null 2>&1; then
  OPENAI_API_BASE="https://integrate.api.nvidia.com/v1" OPENAI_API_KEY="$NVIDIA_API_KEY" try_aider 13 "NVIDIA NIM / meta/llama-3.3-70b-instruct" "openai/meta/llama-3.3-70b-instruct" && exit 0
else echo "Relay 13 skipped: requires ALLOW_PAID_AI=true and NVIDIA_API_KEY."; fi

# Relay 14 — OpenRouter free-model cascade.
if [[ -n "${OPENROUTER_API_KEY:-}" ]] && command -v aider >/dev/null 2>&1; then
  OPENROUTER_API_KEY="$OPENROUTER_API_KEY" try_aider 14 "OpenRouter / deepseek/deepseek-r1:free" "openrouter/deepseek/deepseek-r1:free" && exit 0
  OPENROUTER_API_KEY="$OPENROUTER_API_KEY" try_aider 14 "OpenRouter / meta-llama/llama-3.3-70b-instruct:free" "openrouter/meta-llama/llama-3.3-70b-instruct:free" && exit 0
  OPENROUTER_API_KEY="$OPENROUTER_API_KEY" try_aider 14 "OpenRouter / qwen/qwen-2.5-coder-32b-instruct:free" "openrouter/qwen/qwen-2.5-coder-32b-instruct:free" && exit 0
else echo "Relay 14 skipped: OPENROUTER_API_KEY is empty or Aider is unavailable."; fi

echo "All available AI relay attempts failed for $AGENT_FILE." >&2
exit 1
