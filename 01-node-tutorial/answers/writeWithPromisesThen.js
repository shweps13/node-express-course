const { writeFile, readFile } = require("fs").promises;

const tempData = `{
    data: "test data",
    source: "string",
    format: "JSON"
}`

const writer = async () => {
    return writeFile('./temporary/temp2.txt', tempData, 'utf8').then(() => {
        console.log('-> File has been written!')
    })
}

const reader = async () => {
    return readFile('./temporary/temp2.txt', 'utf-8').then((data) => {
        console.log('-> File content is: ', data)
    })
    
}

const readWrite = async () => {
    return writer()
        .then(() => reader());
};

readWrite()