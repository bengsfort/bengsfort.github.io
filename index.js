const metalsmith = require('./metalsmith');

const mode = process.argv[2];

if (mode === '--watch') {
	metalsmith('watch');
} else if (mode === '--deploy') {
	metalsmith('deploy');
} else {
	metalsmith();
}