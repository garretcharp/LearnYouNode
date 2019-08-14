const fs = require('fs')

const content = fs.readFileSync(process.argv[2])

// console.log(content.toString())

const paragraphCount = content.toString().split('\n').length - 1

console.log(paragraphCount)
