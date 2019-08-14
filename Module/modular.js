var getFileByExtension = require('./getFilesWithExtension')

const dir = process.argv[2]
const fileExtension = process.argv[3]

getFileByExtension(dir, fileExtension, (err, data) => {
	if (err) return

	console.log(data.join('\n'))
})
