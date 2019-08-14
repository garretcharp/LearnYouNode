const fs = require('fs')

module.exports = function (directory, extension, callback) {
	fs.readdir(directory, (err, files) => {
		if (err) return callback(err)

		const filter = new RegExp('.' + extension)

		const matchedFiles = files.filter((name) => name.match(filter))

		return callback(err, matchedFiles)
	})
}
