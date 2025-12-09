const { createReadStream } = require("fs");

const stream = createReadStream("../content/big.txt", {
    encoding: "utf8",
    highWaterMark: 200,
});

let counter = 0;

stream.on('data', (result) => {
    counter++
    console.log('-> [', counter, ']')
    console.log(result)
})

stream.on('error', (err) => console.log("error:", err))

stream.on("end", () => {
  console.log('-> got', counter, 'chunks');
});