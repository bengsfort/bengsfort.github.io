module.exports = function isActiveHelper (a, b, contents) {
	if (a === b) {
		return contents.fn(this);
	}
	return contents.inverse(this);
};