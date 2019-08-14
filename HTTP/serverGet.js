const http = require('http')

const server = http.createServer((req, res) => {
	if (req.url.match(/api\/parsetime/)) {
		let qs = req.url.split('?')[1].split('&')
		const queryString = queryJSONIFY(qs)

		if (queryString.iso) {
			const date = new Date(queryString.iso)

			res.writeHead(200, { 'Content-Type': 'application/json' })

			res.write(
				JSON.stringify({
					hour: date.getHours(),
					minute: date.getMinutes(),
					second: date.getSeconds()
				})
			)
			res.end()
		} else {
			res.write('No iso query provided')
			res.end()
		}
	} else if (req.url.match(/api\/unixtime/)) {
		let qs = req.url.split('?')[1].split('&')
		const queryString = queryJSONIFY(qs)

		if (queryString.iso) {
			const date = new Date(queryString.iso)

			res.writeHead(200, { 'Content-Type': 'application/json' })

			res.write(
				JSON.stringify({
					unixtime: date.valueOf()
				})
			)
			res.end()
		} else {
			res.write('No iso query provided')
			res.end()
		}
	}
})

server.listen(process.argv[2])

function queryJSONIFY (query) {
	const queryString = {}

	query.forEach((query) => {
		let part = query.split('=')

		queryString[part[0]] = decodeURIComponent(part[1] || '')
	})

	return queryString
}
