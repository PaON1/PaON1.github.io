#!/usr/bin/env bash
set -euo pipefail
REPO_DIR="${1:-$HOME/github_profile/PaON1.github.io}"
SOURCE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
mkdir -p "$REPO_DIR"
cp -a "$SOURCE_DIR"/. "$REPO_DIR"/
rm -f "$REPO_DIR/DEPLOY.sh"
cd "$REPO_DIR"
git add .
git commit -m "Launch Raymond Bryant portfolio" || true
git push -u origin main
