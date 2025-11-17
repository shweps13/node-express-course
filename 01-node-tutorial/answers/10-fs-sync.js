const {writeFileSync, readFileSync} = require('fs');

const tempData = `{
    data: "test data",
    source: "string",
    format: "JSON"
}`

writeFileSync('./temporary/fileA.txt', tempData, 'utf8')

const output = readFileSync('./temporary/fileA.txt', 'utf8')
console.log(output)