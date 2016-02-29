//PRODUCTS
var iphone = {
  name: "iPhone",
  img: "http://store.storeimages.cdn-apple.com/4973/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone6s/plus/iphone6s-plus-box-gray-2015_GEO_US?wid=478&hei=595&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1453526293487",
  price: 799.99,
  rating: 4.6,
  category: "tech",
  tags: ["phone", "apple", "smartphone", "technology", "tech"],
  quantity: 0
}
var android = {
  name: "Android",
  img: "http://media.gadgetsin.com/2013/04/samsung_galaxy_win_android_phone_announced_1.jpg",
  price: 699.99,
  rating: 4.5,
  category: "tech",
  tags: ["phone", "samsung", "smartphone", "technology", "tech"],
  quantity: 0
}
var lenovo = {
  name: "Lenovo",
  img: "http://hothardware.com/newsimages/Item25850/Lenovo_Laptop.jpg",
  price: 599.99,
  rating: 4.2,
  category: "tech",
  tags: ["laptop", "computer", "pc", "windows", "microsoft", "lenovo"],
  quantity: 0
}
var macbook = {
  name: "Macbook",
  img: "http://store.storeimages.cdn-apple.com/4973/as-images.apple.com/is/image/AppleInc/aos/published/images/M/AC/MACBOOKPRO/MACBOOKPRO?wid=1200&hei=630&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1453540968678",
  price: 1599.99,
  rating: 4.3,
  category: "tech",
  tags: ["laptop", "computer", "apple", "osx", "mac"],
  quantity: 0
}
var surface = {
  name: "Surface",
  img: "http://dri1.img.digitalrivercontent.net/Storefront/Company/msintl/images/English/en-INTL-Surface-Pro4-SU3-00001/Spin/en-INTL-Surface-Pro4-SU3-00001-SP08.jpg",
  price: 899.99,
  rating: 3.9,
  category: "tech",
  tags: ["tablet", "computer", "microsoft", "windows"],
  quantity: 0
}
var ipad = {
  name: "iPad",
  img: "https://www.apple.com/pr/products/images/iPadminiRD_Svr_PSR_PF_PB_HERO.jpg",
  price: 999.99,
  rating: 4.0,
  category: "tech",
  tags: ["tablet", "apple", "computer", "mac"],
  quantity: 0
}
var madMax = {
  name: "Mad Max",
  img: "http://ecx.images-amazon.com/images/I/919Jfwc0i0L._SX385_.jpg",
  price: 14.99,
  rating: 4.9,
  category: "entertainment",
  tags: ["movie", "film", "action", "sci-fi"],
  quantity: 0
}
var revenant = {
  name: "The Revenant",
  img: "http://ecx.images-amazon.com/images/I/91CqQraAqvL._SY500_.jpg",
  price: 19.99,
  rating: 4.5,
  category: "entertainment",
  tags: ["movie", "film", "action"],
  quantity: 0
}
var interstellar = {
  name: "Interstellar",
  img: "http://ecx.images-amazon.com/images/I/91g-WjXKe7L._SL1500_.jpg",
  price: 9.99,
  rating: 4.0,
  category: "entertainment",
  tags: ["movie", "film", "action", "sci-fi"],
  quantity: 0
}
var vForVendetta = {
  name: "V for Vendetta",
  img: "http://ecx.images-amazon.com/images/I/81AaB2hTFML._SL1500_.jpg",
  price: 7.99,
  rating: 4.5,
  category: "entertainment",
  tags: ["movie", "film", "action", "comic"],
  quantity: 0
}
var battleRoyal = {
  name: "Battle Royale",
  img: "http://ecx.images-amazon.com/images/I/31ED3F1GGRL._SX327_BO1,204,203,200_.jpg",
  price: 2.99,
  rating: 4.6,
  category: "lit",
  tags: ["book", "read", "action", "foreign", "takami", "kids"],
  quantity: 0
}
var lordOfTheFlies = {
  name: "The Lord of the Flies",
  img: "http://ecx.images-amazon.com/images/I/61JPcCSRAXL.jpg",
  price: 8.99,
  rating: 4.0,
  category: "lit",
  tags: ["book", "read", "golding", "island", "kids"],
  quantity: 0
}
var theHungerGames = {
  name: "The Hunger Games",
  img: "http://ecx.images-amazon.com/images/I/41bOj-am1RL._SX331_BO1,204,203,200_.jpg",
  price: "6.99",
  rating: 5.6,
  category: "lit",
  tags: ["book", "read", "kids", "dystopian"],
  quantity: 0
}

var searchInput = document.getElementById('search-textbox');

var searchButton = document.getElementById('search-btn');
searchButton.addEventListener('click', search);

//END PRODUCS
//PRODUCT COLLECTION
var productList = [iphone, android, lenovo, macbook, surface, ipad, madMax, revenant, interstellar, vForVendetta, battleRoyal, lordOfTheFlies, theHungerGames];

//When searching through products, if one fits, push to this array
var searchResults = [];

function search(event) {
  event.preventDefault();
  searchResults = [];

  for(var i = 0; i < productList.length; i++) {
    if(productList[i].name.toLowerCase() == searchInput.value.toLowerCase()) {
      searchResults.push(productList[i]);
    }
    else if(searchInput.value == "") {
      for(var i = 0; i < productList.length; i++) {
        searchResults.push(productList[i]);
      }
    }
  }
  clearProduct();
  generateProduct();
}

function clearProduct() {
  var resultLocation = document.getElementById('search-results');
  while(resultLocation.firstChild) {
    resultLocation.removeChild(resultLocation.firstChild);
  }
}

function generateProduct() {
    for (var i = 0; i < productList.length; i++){
    var resultLocation = document.getElementById('search-results');
    var newResult = document.createElement('div');
    newResult.className = "media";

    var mediaLeft = document.createElement('div');
    mediaLeft.className = "media-left";

    var mediaObject = document.createElement('img');
    mediaObject.className = "media-object";
    mediaObject.src = searchResults[i].img;
    // mediaObject.setAttribute("height", "500px");
    mediaObject.setAttribute("width", "500px");

    var mediaBody = document.createElement('div');
    mediaBody.className = "media-body";

    var mediaHeading = document.createElement('h3');
    mediaHeading.className = "media-heading";
    mediaHeading.textContent = searchResults[i].name;

    var mediaPrice = document.createElement('p');
    mediaPrice.textContent = "Price: $" + searchResults[i].price;

    var mediaRating = document.createElement('p');
    mediaRating.textContent = "Rating: " + searchResults[i].rating;

    var mediaDescription = document.createElement('p');
    mediaDescription.textContent = "Unopanit rutiepa rer yotux iputi to itereti. Arienek taced ecetirap bopep? Iponeyuy urere repoyoc? Padupip cierire nelerac soto arev kame dologol ga. Ri dale pina ebocelier tut vor cixur eyur cicima pobayol? Ga ni yac execorug ran ieterocol one erapo. Piwinen towar rofon. Gosasa viena adarab hic ayiye lufonem ritilin anonele se. Yewi benosa ocu riehe ecumiw atocitof ge ara amaseya liek. Nec etenano etuyi iebie sidatu esawe ze. Mim sat re ocodedo yinunor sie nigip se, ger ekeleli edekin ne ikor furaxir la hohoru atene rar. Imuhec lupi one lidec temerop rotin pi; gecapab iricotis dola. Narodi luli apuru betomir yoseriey sar ired, hisolet tir eloci; nade sanira iforenab apotie rac tul akele! Topuri tagiter tege pe tot tona etu ce suqif, nara nihigig fene."

    var cartButtonForm = document.createElement('form');
    cartButtonForm.action = "#";

    var cartButton = document.createElement('button');
    cartButton.textContent = "Add to Cart";
    cartButtonForm.appendChild(cartButton);

    newResult.appendChild(mediaLeft);
    mediaLeft.appendChild(mediaObject);
    newResult.appendChild(mediaBody);
    mediaBody.appendChild(mediaHeading);
    mediaBody.appendChild(mediaPrice);
    mediaBody.appendChild(mediaRating);
    mediaBody.appendChild(mediaDescription);
    mediaBody.appendChild(cartButtonForm);
    resultLocation.appendChild(newResult);
  }
}
