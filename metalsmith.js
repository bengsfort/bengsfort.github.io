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
const collections = require('metalsmith-collections');
const ignore = require('metalsmith-ignore');
const watch = require('metalsmith-watch');

const config = require('./configs');

const srcDir = path.join(__dirname, './source');
const buildDir = path.join(__dirname, './public');

module.exports = function (mode) {
	const metalsmith = new Metalsmith(__dirname)
		.destination(buildDir)
		.use(branch('styles/main.scss')
			.use(sass({
				includePaths: [path.join(__dirname, './source/styles/')],
				outputDir: 'styles/',
			}))
		)
		.metadata(config.globals)
		.use(layout(config.layout))
		.use(ignore([
			'styles/*.scss',
			'styles/**/*.scss',
			'styles/**/.DS_Store', // thx os x :(
		]))
		.source(srcDir)
		.use(drafts())
		.use(markdown())
		.use(highlighting())
		.use(permalinks(config.permalinks))
		.use(collections(config.collections))
		.use(assets({
			source: './assets',
			destination: './assets',
		}));
	if (mode === 'watch') {
		metalsmith.use(watch({
			paths: {
				"${source}/**/*": true,
				"views/**/*": true,
				"configs/**/*": true,
				"assets/**/*": true,
			}
		}));
	}
	metalsmith.build(function(err) {
		if (err) throw err;
		console.log('Build complete!');
	});
};