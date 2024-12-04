const express = require('express');
const { resolve } = require('path');
const cors = require('cors');
const { products } = require('./data');
const {
  sortByPopularity,
  getHighToLow,
  getLowToHigh,
  filterByRam,
  filterByRom,
  filterByBrand,
  filterByOs,
  filterByPrice,
} = require('./utils');

const app = express();
const port = 3010;

app.use(express.static('static'));
app.use(cors());
app.get('/', (req, res) => {
  // console.log(products);
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.get('/products/sort/popularity', (req, res) => {
  try {
    const sortedProducts = sortByPopularity(products);
    res.status(200).json({ products: sortedProducts });
  } catch (e) {
    res.status(500).json(e);
  }
});

app.get('/products/sort/price-high-to-low', (req, res) => {
  try {
    const sortedProducts = getHighToLow(products);
    res.status(200).json({ products: sortedProducts });
  } catch (e) {
    res.status(500).json(e);
  }
});

app.get('/products/sort/price-low-to-high', (req, res) => {
  try {
    const sortedProducts = getLowToHigh(products);
    res.status(200).json({ products: sortedProducts });
  } catch (e) {
    res.status(500).json(e);
  }
});
// /products/filter/ram?ram=8
app.get('/products/filter/ram', (req, res) => {
  const { ram } = req.query;
  const sortedProducts = filterByRam(products, ram);
  res.status(200).json({ products: sortedProducts });
});
// /products/filter/rom?rom=64
app.get('/products/filter/rom', (req, res) => {
  const { rom } = req.query;
  const sortedProducts = filterByRom(products, rom);
  res.status(200).json({ products: sortedProducts });
});

app.get('/products/filter/brand', (req, res) => {
  const { brand } = req.query;
  const sortedProducts = filterByBrand(products, brand);
  res.status(200).json({ products: sortedProducts });
});
// /products/filter/os?os=Android
app.get('/products/filter/os', (req, res) => {
  const { os } = req.query;
  const sortedProducts = filterByOs(products, os);
  res.status(200).json({ products: sortedProducts });
});
// /products/filter/price
app.get('/products/filter/price', (req, res) => {
  const { price } = req.query;
  const sortedProducts = filterByPrice(products, price);
  res.status(200).json({ products: sortedProducts });
});
// /products
app.get('/products', (req, res) => {
  res.status(200).json({ products: products });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
