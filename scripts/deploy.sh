#!/bin/bash

timestamp() {
	date +"%d.%m.%Y_%H:%M"
}

npm install && npm run deploy

cd ./.deploy_git
git add --all
git commit -S -m "Blog update @ $(timestamp)"
git push origin master