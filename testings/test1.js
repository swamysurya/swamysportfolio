const cart = [
  { id: 2001, value: "banana" },
  { id: 2002, value: "mango" },
];

console.log(cart);

const product = {
  id: 2001,
  value: "banana",
};

const product2 = {
  id: 2003,
  value: "apple",
};

const existedCartProduct = cart.find(
  (eachProduct) => eachProduct.id === product.id
);

const sum = cart.reduce((total, item) => total + item.id, 0);

console.log(sum);
existedCartProduct.value = "grapes";

console.log(cart);
//console.log(cart.includes(product));
const state = {
  arr: [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Doe" },
  ],
};

console.log(this.state);
