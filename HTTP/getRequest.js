const http = require('http')

const url = process.argv[2]

http.get(url, (res) => {
	// response.setEncoding('utf8')

	res.on('data', (data) => console.log(data.toString()))

	res.on('error', (err) => console.error(err))

	res.on('end', () => {})
})
