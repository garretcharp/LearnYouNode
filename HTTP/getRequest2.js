const http = require('http')

const url = process.argv[2]

http.get(url, (res) => {
	res.setEncoding('utf8')

	let responseData = ''
	res.on('data', (data) => {
		responseData += data
	})

	res.on('error', (err) => console.error(err))

	res.on('end', () => {
		console.log(responseData.length)

		console.log(responseData)
	})
})
