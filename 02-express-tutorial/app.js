const express = require('express')
const app = express()
const port = 3000

const { products } = require("./data");
const peopleRouter = require("./routes/people")
const productsRouter = require("./routes/products")


const logger = (req, res, next) => {
  console.log(`${req.method} -> ${req.url}`);
  next();
}

app.use(express.static("./methods-public"))
app.use(logger)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/v1/people", peopleRouter);
app.use("/api/v1/products", productsRouter);


app.get('/api/v1/test', (req, res) => {
    res.json({ message: "It worked!" });
})

app.get('/api/v1/query', (req, res) => {
    const { search, limit, pricetop } = req.query;
    let finalProducts = [];

    if (search) {
        const specialChars = /[.*+?^${}()|[\]\\]/g;
        const safeSearch = search.replace(specialChars, '');

        finalProducts = products.filter((product) => {
            return product.name.includes(safeSearch);
        });
    }

    if (pricetop) {
        finalProducts = finalProducts.filter((product) => {
            return product.price <= pricetop;
        });
    }

    if (limit) {
        const checkedLimit = parseInt(limit);

        if (!isNaN(checkedLimit)) {
            finalProducts = finalProducts.slice(0, checkedLimit);
        }
    }

    if (finalProducts.length != 0) {
        res.json({ products: finalProducts });
    } else {
        res.status(404).json({ message: "That product was not found." });
    }
})

app.all('*', (req, res) => {
    res.send('<h1>Page not found</h1>');
})

app.listen(port, () => {
    console.log('Express Tutorial on port ' + port);
})