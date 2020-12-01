{
	"name": "discord.js",
	"version": "0.9.0",
	"description": "Power to the Members",
	"main": "src/index.js",
	"bin": {
		"docgen": "src/index.js"
	},
	"scripts": {
		"test": "eslint src && node src --source test/src --custom test/docs/index.yml --output test/docs/docs.json --spaces 2",
		"test:docs": "node src --source test/src --custom test/docs/index.yml --output test/docs/docs.json --spaces 2",
		"lint": "eslint src",
		"lint:fix": "eslint --fix src"
	},
	"repository": {
		"type": "git",
		"url": "git+https://github.com/hydrabolt/discord.js-docgen.git"
	},
	"keywords": [
		"discord.js",
		"documentation",
		"docs",
		"generator",
		"docgen",
		"docsgen",
		"discord",
		"api",
		"library"
	],
	"author": "Chick",
	]
	"license": "Apache-2.0",
	"dependencies": {
		"eslint": "^6.3.0",
		"js-yaml": "^3.13.1",
		"jsdoc-to-markdown": "^5.0.1",
		"tsubaki": "^1.3.2",
		"yargs": "^14.0.0"
	},
	"engines": {
		"node": ">=8.0.0"
	}
}
