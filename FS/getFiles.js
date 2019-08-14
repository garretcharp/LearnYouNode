const fs = require('fs')

fs.readdir(process.argv[2], (err, files) => {
	if (err) return

	const filter = new RegExp('.' + process.argv[3])

	const matchedFiles = files.filter((name) => name.match(filter))

	console.log(matchedFiles.join('\n'))
	// matchedFiles.forEach((file) => {
	// 	console.log(file)
	// })
})
