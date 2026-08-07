#!/usr/bin/env bash
# Create the public GitHub repo and push this folder.
#
#   cd "/Users/behnam/Desktop/AI-Prpjects/Art direction" && bash push.sh
#
# Requires the GitHub CLI, authenticated:
#   brew install gh && gh auth login
#
# The repo is already git-initialised with an initial commit, so this script
# only creates the remote and pushes. Re-running it after further edits will
# commit and push the new work.

set -euo pipefail
cd "$(dirname "$0")"

REPO="art-direction"
USER="Behnamatefi"
DESC="A black document that reads like paper, structured like an instrument. Bilingual (EN/FA), dark-first art direction spec for websites, decks and posters — written to be handed to an AI."
TOPICS="design-system,art-direction,design-tokens,rtl,persian,dark-mode,ai,prompt-engineering,css"

# --- commit anything outstanding -------------------------------------------
[ -d .git ] || git init -b main
git add -A
git diff --cached --quiet || git commit -m "Update art direction"

# --- create the remote and push --------------------------------------------
if git remote get-url origin >/dev/null 2>&1; then
  echo "Remote already set: $(git remote get-url origin)"
  git push -u origin main

elif command -v gh >/dev/null 2>&1; then
  gh repo create "$USER/$REPO" \
    --public --source=. --remote=origin --description "$DESC" --push
  gh repo edit "$USER/$REPO" --add-topic "${TOPICS//,/ --add-topic }" || true
  echo
  echo "Done → https://github.com/$USER/$REPO"

else
  cat <<EOF

The GitHub CLI (gh) is not installed.

  Option A — install it, then re-run this script:
      brew install gh
      gh auth login
      bash push.sh

  Option B — create the repo by hand at https://github.com/new
      name: $REPO   ·   visibility: Public
      do NOT add a README, .gitignore or license (this folder has them)

    then run:
      git remote add origin https://github.com/$USER/$REPO.git
      git push -u origin main

EOF
  exit 1
fi
