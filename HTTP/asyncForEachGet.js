const http = require('http')

function getDataFromUrl (url) {
	return new Promise((resolve, reject) => {
		http.get(url, (res) => {
			res.setEncoding('utf8')

			let responseData = ''
			res.on('data', (data) => {
				responseData += data
			})

			let error = null
			res.on('error', (err) => (error = err))

			res.on('end', () => {
				if (error) reject(error)
				else resolve(responseData)
			})
		})
	})
}

async function processArray (array) {
	for (const url of array) {
		const data = await getDataFromUrl(url)

		console.log(data)
	}
}

process.argv.splice(0, 2)

processArray(process.argv)
