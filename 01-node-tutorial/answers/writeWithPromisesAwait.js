const { writeFile, readFile } = require("fs").promises;

const tempData = `{
    data: "test data",
    source: "string",
    format: "JSON"
}`

const writer = async () => {
    try {
        await writeFile('./temporary/temp.txt', tempData, 'utf8')
        console.log('-> File has been written!')
    } catch (err) {
        console.log('-> Error writing file:', err)
    }
}

const reader = async () => {
    try {
        const data = await readFile('./temporary/temp.txt', 'utf8')
        console.log('-> File content is:', data)
    } catch (err) {
        console.log('-> Error reading file:', err)
    }
};

const readWrite = async () => {
    try {
        await writer()
        await reader()
    } catch (err) {
        console.log('-> Error:', err)
    }
};

readWrite()