const sortByPopularity = (data) => {
  const sortedProducts = data.sort((a, b) => b.rating - a.rating);
  return sortedProducts;
};

const getHighToLow = (data) => {
  const sortedProducts = data.sort((a, b) => b.price - a.price);
  return sortedProducts;
};
const getLowToHigh = (data) => {
  const sortedProducts = data.sort((a, b) => a.price - b.price);
  return sortedProducts;
};

const filterByRam = (data, ram) => {
  const res = data.filter((res) => parseInt(res.ram) === parseInt(ram));
  // console.log(res);
  return res;
};
const filterByRom = (data, rom) => {
  const res = data.filter((res) => parseInt(res.rom) === parseInt(rom));
  // console.log(res);
  return res;
};
const filterByBrand = (products, brand) => {
  const res = products.filter(
    (res) => res.brand.toLowerCase() === brand.toLowerCase()
  );
  return res;
};

const filterByOs = (products, os) => {
  const res = products.filter(
    (res) => res.os.toLowerCase() === os.toLowerCase()
  );
  return res;
};

const filterByPrice = (products, price) => {
  const res = products.filter((res) => res.price <= price);
  return res;
};

module.exports = {
  sortByPopularity,
  getHighToLow,
  getLowToHigh,
  filterByRam,
  filterByRom,
  filterByBrand,
  filterByOs,
  filterByPrice,
};
