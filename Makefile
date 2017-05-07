.PHONY: build
build:
	DEBUG=metalsmith:* && npm install && npm run build

.PHONY: watch
watch:
	npm install && npm run watch