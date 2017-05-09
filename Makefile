.PHONY: build
build:
	npm install && npm run build

.PHONY: watch
watch:
	npm install && npm run watch

.PHONY: publish
publish:
	chmod a+x ./scripts/deploy.sh && ./scripts/deploy.sh
