#!/usr/bin/env bash
# Publish react-native-web3-kit to npm.
# Requires: npm login (run once: npm login --auth-type=web)

set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"

cd "$ROOT"

echo "Checking npm auth..."
if ! npm whoami >/dev/null 2>&1; then
  echo "Not logged into npm. Opening browser login..."
  npm login --auth-type=web
fi

echo "Logged in as: $(npm whoami)"
echo "Running tests and build..."
npm test
npm run build

echo "Publishing react-native-web3-kit@$(node -p "require('./package.json').version")..."
npm publish --access public

echo ""
echo "Published: https://www.npmjs.com/package/react-native-web3-kit"
echo "Install:   npm install react-native-web3-kit"
