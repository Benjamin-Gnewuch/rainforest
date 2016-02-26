//PRODUCTS
var iPhone = {
  name: "iphone",
  img: "http://store.storeimages.cdn-apple.com/4973/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone6s/plus/iphone6s-plus-box-gray-2015_GEO_US?wid=478&hei=595&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1453526293487",
  price: 799.99,
  rating: 4.6,
  category: "tech",
  tags: ["phone", "apple", "smartphone", "technology", "tech"],
  quantity: 0
}
var android = {
  name: "android",
  img: "http://media.gadgetsin.com/2013/04/samsung_galaxy_win_android_phone_announced_1.jpg",
  price: 699.99,
  rating: 4.5,
  tags: ["phone", "samsung", "smartphone", "technology", "tech"],
  quantity: 0
}
var lenovo = {
  name: "lenovo",
  img: "http://hothardware.com/newsimages/Item25850/Lenovo_Laptop.jpg",
  price: 599.99,
  rating: 4.2,
  category: "tech",
  tags: ["laptop", "computer", "pc", "windows", "microsoft", "lenovo"],
  quantity: 0
}
var macbook = {
  name: "macbook",
  img: "http://store.storeimages.cdn-apple.com/4973/as-images.apple.com/is/image/AppleInc/aos/published/images/M/AC/MACBOOKPRO/MACBOOKPRO?wid=1200&hei=630&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1453540968678",
  price: 1599.99,
  rating: 4.3,
  category: "tech",
  tags: ["laptop", "computer", "apple", "osx", "mac"],
  quantity: 0
}
var surface = {
  name: "surface",
  img: "http://dri1.img.digitalrivercontent.net/Storefront/Company/msintl/images/English/en-INTL-Surface-Pro4-SU3-00001/Spin/en-INTL-Surface-Pro4-SU3-00001-SP08.jpg",
  price: 899.99,
  rating: 3.9,
  category: "tech",
  tags: ["tablet", "computer", "microsoft", "windows"],
  quantity: 0
}
var ipad = {
  name: "ipad",
  img: "https://www.apple.com/pr/products/images/iPadminiRD_Svr_PSR_PF_PB_HERO.jpg",
  price: 999.99,
  rating: 4.0,
  category: "tech",
  tags: ["tablet", "apple", "computer", "mac"],
  quantity: 0
}
var madMax = {
  name: "mad max fury road",
  img: "http://ecx.images-amazon.com/images/I/919Jfwc0i0L._SX385_.jpg",
  price: 14.99,
  rating: 4.9,
  category: "entertainment",
  tags: ["movie", "film", "action", "sci-fi"],
  quantity: 0
}
var revenant = {
  name: "the revenant",
  img: "http://ecx.images-amazon.com/images/I/91CqQraAqvL._SY500_.jpg",
  price: 19.99,
  rating: 4.5,
  category: "entertainment",
  tags: ["movie", "film", "action"],
  quantity: 0
}
var interstellar = {
  name: "interstellar",
  img: "http://ecx.images-amazon.com/images/I/91g-WjXKe7L._SL1500_.jpg",
  price: 9.99,
  rating: 4.0,
  category: "entertainment",
  tags: ["movie", "film", "action", "sci-fi"],
  quantity: 0
}
var vForVendetta = {
  name: "v for vendetta",
  img: "http://ecx.images-amazon.com/images/I/81AaB2hTFML._SL1500_.jpg",
  price: 7.99,
  rating: 4.5,
  category: "entertainment",
  tags: ["movie", "film", "action", "comic"],
  quantity: 0
}
var battleRoyal = {
  name: "battle royale",
  img: "http://ecx.images-amazon.com/images/I/31ED3F1GGRL._SX327_BO1,204,203,200_.jpg",
  price: 2.99,
  rating: 4.6,
  category: "lit",
  tags: ["book", "read", "action", "foreign", "takami", "kids"],
  quantity: 0
}
var lordOfTheFlies = {
  name: "the lord of the flies",
  img: "http://ecx.images-amazon.com/images/I/61JPcCSRAXL.jpg",
  price: 8.99,
  rating: 4.0,
  category: "lit",
  tags: ["book", "read", "golding", "island", "kids"],
  quantity: 0
}
var theHungerGames = {
  name: "the hunger games",
  img: "http://ecx.images-amazon.com/images/I/41bOj-am1RL._SX331_BO1,204,203,200_.jpg",
  price: "6.99",
  rating: 5.6,
  category: "lit",
  tags: ["book", "read", "kids", "dystopian"],
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
  if(searchState.productName === "" && category === "all"){

  }
  else{
    for(var i = 0; i < productList.length; i++) {
      if(checkSearchAgainstProducts(i, searchState, productList)) {

      }
    }
  }
}

function checkSearchAgainstProducts(num, searchState, productList) {
  if(searchState.productName) {
    if(searchState.category === "tech" )
  }
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
