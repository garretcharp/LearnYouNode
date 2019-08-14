const http = require('http')

const server = http.createServer((req, res) => {
	if (req.method.toUpperCase() === 'POST') {
		let postData = ''
		req.on('data', (data) => {
			postData += data.toString().toUpperCase()
		})

		req.on('end', () => {
			res.write(postData)
			res.end()
		})
	}
})

server.listen(process.argv[2])
