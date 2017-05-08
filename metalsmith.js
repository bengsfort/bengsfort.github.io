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
const browserSync = require('metalsmith-browser-sync');
const dates = require('metalsmith-date-formatter');
const helpers = require('metalsmith-register-helpers');
const sitemap = require('metalsmith-sitemap');
const youtube = require('metalsmith-youtube');

const config = require('./configs');

module.exports = function (mode) {
	const buildTarget = mode === 'deploy' ? './.deploy_git' : './public';

	const srcDir = path.join(__dirname, './source');
	const buildDir = path.join(__dirname, buildTarget);

	const metalsmith = new Metalsmith(__dirname)
		.destination(buildDir)
		.use(branch('styles/main.scss')
			.use(sass({
				includePaths: [path.join(__dirname, './source/styles/')],
				outputDir: 'styles/',
			}))
		)
		.metadata(config.globals)
		.use(ignore([
			'styles/*.scss',
			'styles/**/*.scss',
			'styles/**/.DS_Store', // thx os x :(
		]))
		.source(srcDir)
		.use(drafts())
		.use(dates({ format: 'D MMMM, YYYY' }))
		.use(collections(config.collections))
		.use(highlighting())
		.use(youtube({
			suggested: false,
			controls: true,
			showTitle: true,
			privacy: true,
		}))
		.use(markdown())
		.use(permalinks(config.permalinks))
		.use(helpers({
			directory: path.join(__dirname, './views/helpers'),
		}))
		.use(layout(config.layout))
		.use(assets({
			source: './assets',
			destination: './assets',
		}))
		.use(sitemap({
			hostname: 'https://bengsfort.github.io/',
			omitIndex: true,
		}))
	if (mode === 'watch') {
		metalsmith.use(browserSync({
			files: [
				`${srcDir}/**/*`,
				`${srcDir}/views/**/*`,
				`${srcDir}/configs/**/*`,
				`${srcDir}/assets/**/*`,
			],
			server: buildDir,
		}));
	}
	metalsmith.build(function(err) {
		if (err) throw err;
		console.log('Build complete!');
	});
};