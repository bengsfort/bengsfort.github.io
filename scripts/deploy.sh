#!/bin/bash

# Function for easier timestamp inclusion
timestamp() {
	date +"%d.%m.%Y_%H:%M"
}

# Run NPM install then build the site to ./.deploy_git
# @TODO: Automate creation of this post-install
npm install && npm run deploy

# Move the readme into the deployment directory for consistency
cp README.md ./.deploy_git/README.md

# Jump into deployment directory, add everything then push it up to Github
cd ./.deploy_git
git add --all
git commit -S -m "Blog update @ $(timestamp)"
git push origin master