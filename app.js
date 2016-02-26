//PRODUCTS
var cat = {
  name: "Cat",
  img: "https://www.google.com",
  price: 99.99,
  rating: 3.5,
  category: ,
  tags: ["fluffy", "cuddly", "feline", "pet"],
  quantity: 0
}
var dog = {
  name: "Dog",
  img: "https://www.google.com",
  price: 199.99,
  rating: 4.5,
  tags: ["fluffy", "cuddly", "canine", "pet"],
  quantity: 0
}
var name = {
  name: ,
  img: ,
  price: ,
  rating: ,
  category: ,
  tags: [],
  quantity: 0
}
var name = {
  name: ,
  img: ,
  price: ,
  rating: ,
  category: ,
  tags: [],
  quantity: 0
}
var name = {
  name: ,
  img: ,
  price: ,
  rating: ,
  category: ,
  tags: [],
  quantity: 0
}
var name = {
  name: ,
  img: ,
  price: ,
  rating: ,
  category: ,
  tags: [],
  quantity: 0
}
var name = {
  name: ,
  img: ,
  price: ,
  rating: ,
  category: ,
  tags: [],
  quantity: 0
}
var name = {
  name: ,
  img: ,
  price: ,
  rating: ,
  category: ,
  tags: [],
  quantity: 0
}
var name = {
  name: ,
  img: ,
  price: ,
  rating: ,
  category: ,
  tags: [],
  quantity: 0
}
var name = {
  name: ,
  img: ,
  price: ,
  rating: ,
  category: ,
  tags: [],
  quantity: 0
}
var name = {
  name: ,
  img: ,
  price: ,
  rating: ,
  category: ,
  tags: [],
  quantity: 0
}
var name = {
  name: ,
  img: ,
  price: ,
  rating: ,
  category: ,
  tags: [],
  quantity: 0
}
var name = {
  name: ,
  img: ,
  price: ,
  rating: ,
  category: ,
  tags: [],
  quantity: 0
}
var name = {
  name: ,
  img: ,
  price: ,
  rating: ,
  category: ,
  tags: [],
  quantity: 0
}
var name = {
  name: ,
  img: ,
  price: ,
  rating: ,
  category: ,
  tags: [],
  quantity: 0
}
var name = {
  name: ,
  img: ,
  price: ,
  rating: ,
  category: ,
  tags: [],
  quantity: 0
}
//END PRODUCS
//PRODUCT COLLECTION
var productList = [];

//When searching through products, if one fits, push to this array
var searchResults = [];

//Other Objects
var cart = {
  items: []
}

var searchState = {
  category: ,
  productName: ,
  sort: ,
  priceMax: ,
  priceMin: ,
  rating:
}

//SEARCH FUNCTIONS
function search(searchState){
  for()
}

//CART FUCNTIONS
function removeFromCart(itemName, cart) {
  for(var i = 0; i < cart.length; i++) {
    if(cart[i].name === itemName){
      cart.splice[i, 1];
      i = cart.length;
    }
  }
}

function addToCart(item, quantity = 1) {
  cart.push(item);
  for(var i = 1; i <= quantity; i++) {
    item.quantity++;
  }
}

//SEARCH FUNCTIONS
