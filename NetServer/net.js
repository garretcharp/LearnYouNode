const net = require('net')

const server = net.createServer((socket) => {
	const date = new Date()
	socket.end(formatDate(date) + '\n')
})

server.listen(process.argv[2])

function formatDate (date) {
	const year = date.getFullYear()
	let month = date.getMonth() + 1
	month = ('0' + month).slice(-2)
	let day = date.getDate()
	day = ('0' + day).slice(-2)

	let hours = date.getHours()
	hours = ('0' + hours).slice(-2)
	let minutes = date.getMinutes()
	minutes = ('0' + minutes).slice(-2)

	const formatted = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes

	return formatted
}
