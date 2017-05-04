const path = require('path');
const Metalsmith = require('metalsmith');
const drafts = require('metalsmith-drafts');
const layout = require('metalsmith-layouts');
const markdown = require('metalsmith-markdown');
const highlighting = require('metalsmith-metallic');
const permalinks = require('metalsmith-permalinks');
const assets = require('metalsmith-assets');
const branch = require('metalsmith-branch');
const sass = require('metalsmith-sass');
const filter = require('metalsmith-filter');

const config = require('./configs');

const srcDir = path.join(__dirname, './source');
const buildDir = path.join(__dirname, './public');

const metalsmith = new Metalsmith(__dirname)
	.source(srcDir)
	.destination(buildDir)
	.use(drafts())
	.use(layout(config.layout))
	.use(markdown())
	.use(highlighting())
	.use(permalinks(config.permalinks))
	.use(assets({
		source: './assets',
		destination: './assets',
	}))
	.use(branch('styles/*.scss')
		.use(sass({
			file: path.join(__dirname, './source/styles/main.scss'),
			includePaths: [path.join(__dirname, './source/styles/')],
			outputDir: 'styles/',
		}))
	)
	.build(function(err) {
		if (err) throw err;
		console.log('Build complete!');
	});

