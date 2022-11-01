install:
	npm install
publish:
	npm publish --dry-run
lint:
	npx eslint .
lint-fix:
	npx eslint . --fix

develop:
	npx webpack serve

build:
	rm -rf dist
	NODE_ENV=production npx webpack