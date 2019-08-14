process.argv.splice(0, 2) // remove the command to run the file ('node', '/path/to/file.js')

const sum = process.argv.reduce((a, b) => parseInt(a) + parseInt(b))

console.log(sum)
