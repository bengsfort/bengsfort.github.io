const metalsmith = require('./metalsmith');

if (process.argv[2] === '--watch') {
	metalsmith('watch');
} else {
	metalsmith();
}