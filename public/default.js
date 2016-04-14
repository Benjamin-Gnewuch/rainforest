var review = {
  name: '',
  ratingNum: 0,
  review: ''
}

var user = {
  name: 'Hector',
  reviews: [],
  pastOrders: [],
  recommended: []
}

var searchResults = [];
var cart = [];

var searchPage = document.getElementById('search-page');
var headerLogo = document.getElementsByClassName('logo')[0];
var categorySelected = document.getElementById('category-select');
var searchInput = document.getElementById('search-textbox');
var searchButton = document.getElementById('search-btn');

var productPage = document.getElementById('product-page');
var buttonLocation = document.getElementById('cart-button');
var cartBtn = buttonLocation.children[0];
var writeReviewButton = document.getElementById('write-review');
var reviewForm = document.getElementById('review-form');
var submitReviewButton = document.getElementById('review-submit');
var cancelReviewButton = document.getElementById('review-cancel');
var rateReview = document.getElementById('review-rating');

var cartPage = document.getElementById('cart-page');
var cartButton = document.getElementById('cart-btn');
var cartItemCount = document.getElementById('');
var cartSubTotal = document.getElementById('');
var cartTax = document.getElementById('');
var cartTotal = document.getElementById('');

var checkoutPage = document.getElementById('checkout-page');
var checkoutButton = document.getElementById('check-out');
var checkoutItemCount = document.getElementById('checkout-count');
var checkoutSubTotal = document.getElementById('checkout-subtotal');
var checkoutTax = document.getElementById('checkout-tax');
var checkoutTotal = document.getElementById('checkout-total');
var checkoutName = document.getElementById('payment-name');
var checkoutAddress = document.getElementById('payment-address');
var checkoutCity = document.getElementById('payment-city');
var checkoutState = document.getElementById('state-select');
var checkoutZip = document.getElementById('payment-zip');
var payButton = document.getElementById('checkout-submit');
var paymentCard = document.getElementById('payment-card-number');
var paymentExpMonth = document.getElementById('exp-month');
var paymentExpYear = document.getElementById('exp-year');
var paymentCVV = document.getElementById('payment-card-cvv');

var receiptPage = document.getElementById('receipt-page');

headerLogo.addEventListener('click', function() {
  show(searchPage);
});

searchButton.addEventListener('click', search);

categorySelected.addEventListener('change', search);

cartButton.addEventListener('click', cartGenerate);

writeReviewButton.addEventListener('click', writeReview);

rateReview.addEventListener('click', function(event) {
  setRating(event.target.id);
});

submitReviewButton.addEventListener('click', function(event) {
  submitReview(event.target.dataset.id);
});

cancelReviewButton.addEventListener('click', cancelReview);

checkoutButton.addEventListener('click', function() {
  show(checkoutPage);
});

payButton.addEventListener('click', validatePayment);

cartBtn.addEventListener('click', function(event) {
  addItemToCart(event.target.id);
});

var logoContainer = document.getElementsByClassName('container-fixed')[0];
logoContainer.style.width = '250px';

function search(event) {
  event.preventDefault();

  updateRatings();
  show(searchPage);
  searchResults = [];

  if (searchInput.value == '' || searchInput.value == 'Search') {
    if (categorySelected.value != 'all') {
      for (var i = 0; i < productList.length; i++) {
        if (productList[i].category == categorySelected.value) {
          searchResults.push(productList[i]);
        }
      }
    }
    else {
      for (var i = 0; i < productList.length; i++) {
        searchResults.push(productList[i]);
      }
    }
  }
  else {
    for (var i = 0; i < productList.length; i++) {
      if (productList[i].name.toLowerCase() == searchInput.value.toLowerCase()) {
        searchResults.push(productList[i]);
      }
    }
  }

  clearResults();
  generateSearchResults(searchResults);
}

function clearResults() {
  var resultLocation = document.getElementById('search-results');
  while (resultLocation.firstChild) {
    resultLocation.removeChild(resultLocation.firstChild);
  }
}

function generateSearchResults(items) {
  for (var i = 0; i < items.length; i++) {
    var resultLocation = document.getElementById('search-results');

    var paddingLeft = newElement('div', resultLocation, 'col-md-9 col-md-offset-1 vspace5');
    paddingLeft.id = 'search-result-' + items[i].itemID;

    var newResult = document.createElement('div');
    newResult.className = 'media';

    var mediaLeft = document.createElement('div');
    mediaLeft.className = 'media-left media-middle';

    var mediaObject = newElement('img', mediaLeft, 'media-object hspace4 hidden-xs hidden-sm');

    //var mediaObject = document.createElement('img');
    //mediaObject.className = 'media-object hspace4 hidden-xs hidden-sm';
    mediaObject.src = items[i].img;
    mediaObject.setAttribute('width', '300px');

    var mediaBody = document.createElement('div');
    mediaBody.className = 'media-body media-middle';

    var mediaHeading = document.createElement('h3');
    mediaHeading.className = 'media-heading';
    mediaHeading.textContent = items[i].name;

    var mediaPrice = document.createElement('p');
    mediaPrice.textContent = 'Price: $' + items[i].price;

    var mediaRating = document.createElement('p');
    mediaRating.textContent = 'Rating: ' + items[i].rating;

    var mediaDescription = document.createElement('p');
    mediaDescription.textContent = 'Description: ' + items[i].description;

    var buttonForm = document.createElement('form');
    buttonForm.action = '#';

    var cartButton = newElement('button', buttonForm, 'btn btn-secondary btn-lg bg-primary col-md-3 col-sm-3 vspace5')
    cartButton.textContent = 'Add to Cart';
    cartButton.id = items[i].itemID;
    cartButton.setAttribute('type', 'button');

    var viewButton = newElement('button', buttonForm, 'btn btn-secondary btn-lg bg-primary col-md-3 col-md-offset-1 col-sm-3 col-sm-offset-1 vspace5');
    viewButton.textContent = 'View Item';
    viewButton.id = items[i].itemID;
    viewButton.setAttribute('type', 'button');

    var horizontal = document.createElement('hr');
    horizontal.className = 'vspace7';

    cartButton.addEventListener('click', function(event) {
      addItemToCart(event.target.id);
    });

    viewButton.addEventListener('click', function(event) {
      generateProduct(event.target.id);
    });

    newResult.appendChild(mediaLeft);
    newResult.appendChild(mediaBody);
    mediaBody.appendChild(mediaHeading);
    mediaBody.appendChild(mediaPrice);
    mediaBody.appendChild(mediaRating);
    mediaBody.appendChild(mediaDescription);
    mediaBody.appendChild(buttonForm);
    paddingLeft.appendChild(newResult);
    paddingLeft.appendChild(horizontal);
  }

}

function addItemToCart(id) {
  for (var i = 0; i < productList.length; i++) {
    if (id == productList[i].itemID) {
      cart.push(productList[i]);
      cart[cart.length-1].quantity = 1;
    }
  }
  setCartCount();
}

function generateProduct(id) {
  clearReviews();
  show(productPage);
  var product;

  for (var i = 0; i < productList.length; i++) {
    if (id == productList[i].itemID) {
      product = productList[i];
    }
  }

  var title = document.querySelector('div.panel-heading > h2');
  title.textContent = product.name;
  title.style.fontSize = '2em';

  var image = document.getElementById('product-img');
  image.src = product.img;
  image.style.width = '400px';

  var info = document.getElementById('product-info');
  info.textContent = product.description;
  info.style.fontSize = '1.2em';

  var price = document.getElementById('product-price');
  price.textContent = 'Price: ' + product.price;

  var productRating = document.getElementById('product-rating');
  productRating.textContent = 'Rating: ' + product.rating;

  var reviewCount = document.getElementById('product-reviews');
  reviewCount.textContent = 'Reviews: ' + product.itemReviews.length;

  cartBtn.id = product.itemID;

  generateReviews(product.itemID);
  submitReviewButton.dataset.id = id;
}

function clearReviews() {
  var reviewsLocation = document.getElementById('reviews');
  while(reviewsLocation.firstChild) {
    reviewsLocation.removeChild(reviewsLocation.firstChild);
  }
}

function generateReviews(id) {

  var reviews = productList[id].itemReviews;
  var location = document.getElementById('reviews');

  for (var i = 0; i < reviews.length; i++) {

    var newReview = newElement('div', location);
    var reviewHeading = newElement('div', newReview, 'panel-heading');
    var reviewTitle = newElement('h3', reviewHeading, 'panel-title');
    var reviewBody = newElement('div',newReview, 'panel-body')
    var reviewRating = newElement('h5', reviewBody, 'h5 panel-body');
    var reviewText = newElement('div', reviewBody, 'panel-body');

    if (reviews[i].rating <= 2) {
      newReview.className = 'panel panel-danger';
    }
    else if (reviews[i].rating >= 4) {
      newReview.className = 'panel panel-success';
    }
    else {
      newReview.className = 'panel panel-warning';
    }

    reviewTitle.textContent = reviews[i].name;
    reviewText.textContent = reviews[i].review;
    reviewRating.textContent = 'Rating: ' + reviews[i].rating + '/5';
  }
}

function writeReview() {
  review.name = user.name;
  review.ratingNum = 0;
  review.review = '';
  reviewForm.className = 'row';
}

function setRating(id) {
  if (id == 'rating-love') {
    review.ratingNum = 5;
  }
  else if (id == 'rating-like') {
    review.ratingNum = 4;
  }
  else if (id == 'rating-neutral') {
    review.ratingNum = 3;
  }
  else if (id == 'rating-dislike') {
    review.ratingNum = 2;
  }
  else if (id == 'rating-hate') {
    review.ratingNum = 1;
  }
}

function submitReview(id) {
  review.name = user.name;
  review.review = document.getElementById('review-text').value;
  user.reviews.push({productId: id, rating: review.ratingNum, review: review.review});
  productList[id].itemReviews.push({name: review.name, rating: review.ratingNum, review: review.review});
  reviewForm.className = 'hide';
  clearReviews();
  generateReviews(id);
  console.log(user.reviews);
  updateRatings();
}

function cancelReview() {
  document.getElementById('review-text').value = '';
  document.getElementById('review-text').setAttribute = ('placeholder','Write comments here');
  reviewForm.className = 'hide';
}

function cartGenerate() {
  var cartLocation = document.getElementById('cart');
  clearCartPage(cartLocation);
  cartDuplicates();

  for (var i = 0; i < cart.length; i++) {
    var panel = newElement('div', cartLocation, 'panel panel-default vspace5');

    var panelBody = newElement('div', panel, ' panel-body');

    var space = document.createElement('br');
    var horizontal = document.createElement('hr');

    var newRow = newElement('div', panelBody, 'row');

    var colLeft = newElement('div', newRow, ' col-md-5')

    var colRight = newElement('div', newRow, 'col-md-2 col-md-offset-4 text-center');

    var media = newElement('div', colLeft, 'media');

    var mediaLeft = newElement('div', media, 'media-left media-middle');

    var mediaObject = newElement('img', mediaLeft, 'media-object');
    mediaObject.src = cart[i].img;
    mediaObject.setAttribute('width', '150px');

    var mediaBody = newElement('div', media, 'media-body');

    var mediaHeading = newElement('h3', mediaBody, 'media-heading');
    mediaHeading.textContent = cart[i].name;

    var labelPrice = document.createElement('label');
    labelPrice.setAttribute = ('for','price');
    labelPrice.textContent = 'Price';

    var unitPrice = document.createElement('p');
    unitPrice.name = 'price';
    unitPrice.textContent = '$' + cart[i].price;

    var labelRating = document.createElement('label');
    labelRating.setAttribute = ('for','rating');
    labelRating.textContent = 'Customer Rating';

    var mediaRating = document.createElement('p');
    mediaRating.name = 'rating';
    mediaRating.textContent = cart[i].rating;

    var formHorizontal = document.createElement('form');
    formHorizontal.className = 'form-horizontal';


    var formGroup = document.createElement('form');
    formGroup.className = 'form-group';
    formHorizontal.appendChild(formGroup);

    var quantityLocation = newElement('div', formGroup, 'col-md-7');

    var mediaQuantity = newElement('select', quantityLocation, 'form-control');
    mediaQuantity.id = cart[i].itemID;

    for (var j = 1; j < 31; j++) {
      var option = document.createElement('option');
      option.textContent = j;
      mediaQuantity.appendChild(option);
    }

    mediaQuantity.value = cart[i].quantity;
    mediaQuantity.addEventListener('change', function(event) {
      changeQuantity(event.target.id, Number(event.target.value));
    });

    mediaBody.appendChild(labelPrice);
    mediaBody.appendChild(unitPrice);
    mediaBody.appendChild(labelRating);
    mediaBody.appendChild(mediaRating);
    mediaBody.appendChild(formHorizontal);

    var buttonRemove = newElement('btn', mediaBody, 'btn btn-default');
    buttonRemove.setAttribute = ('type', 'button');
    buttonRemove.textContent = 'Remove from Cart';
    buttonRemove.id = cart[i].itemID;
    buttonRemove.addEventListener('click', function(event) {
      changeQuantity(event.target.id, 0);
    });

    var labelSubtotal = document.createElement('label');
    labelSubtotal.setAttribute = ('for','subtotal');
    labelSubtotal.textContent = 'Subtotal';

    var unitSubtotal = document.createElement('p');
    unitPrice.subtotal = 'subtotal';
    unitSubtotal.textContent = '$' + (cart[i].price * cart[i].quantity).toFixed(2);

    var labelTax = document.createElement('label');
    labelTax.setAttribute = ('for','tax');
    labelTax.textContent = 'Sales Tax';

    var unitTax = document.createElement('p');
    unitTax.name = 'tax';
    unitTax.textContent = '$' + (cart[i].price * cart[i].quantity * 0.08).toFixed(2);

    var labelTotal = document.createElement('label');
    labelTotal.setAttribute = ('for','total');
    labelTotal.textContent = 'Total';

    var unitTotal = document.createElement('p');
    unitTotal.name = 'total';
    unitTotal.textContent = '$' + (cart[i].price * cart[i].quantity * 1.08).toFixed(2);

    colRight.appendChild(space);
    colRight.appendChild(labelSubtotal);
    colRight.appendChild(unitSubtotal);
    colRight.appendChild(labelTax);
    colRight.appendChild(unitTax);
    colRight.appendChild(horizontal);
    colRight.appendChild(labelTotal);
    colRight.appendChild(unitTotal);
  }

  show(cartPage);
}

function setCartCount() {
  var cartIcon = document.getElementById('cart-btn');

  var count = cartCount();

  cartIcon.firstChild.textContent = count;
}

function cartCount() {
  var count = 0;
  for (var i = 0; i < cart.length; i++) {
    count += cart[i].quantity;
  }
  return count;
}

function populateCart(parent) {

}

function clearCartPage(location) {
  while(location.firstChild) {
      location.removeChild(location.firstChild);
  }
}

function clearCart() {
  user.pastOrders.push(cart);
  var cartIcon = document.getElementById('cart-btn');
  cartIcon.firstChild.textContent = '0';
  cart = [];
}

function cartDuplicates() {

  for (var i = 0; i < cart.length; i++) {
    for (var j = i+1; j < cart.length; j++) {
      if (cart[i].itemID == cart[j].itemID) {
        cart[i].quantity++;
        cart.splice(j,1);
        j--;
      }
    }
  }
}

function cartSum() {
  var cartSubTotal = 0;
  for (var i = 0; i < cart.length; i++) {
    cartSubTotal += (cart[i].price * cart[i].quantity);
  }
  return cartSubTotal;
}

function changeQuantity(id, num) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemID == id) {
      cart[i].quantity = num;
    }
  }
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].quantity == 0) {
      cart.splice(i,1);
      i--;
    }
  }
  setCartCount();
  cartGenerate();
}

function generateAddress() {
  var addressLocation1 = document.getElementById('receipt-address1');
  var addressLocation2 = document.getElementById('receipt-address2');

  addressLocation1.textContent = checkoutAddress.value;
  addressLocation2.textContent = checkoutCity.value + ', ' + checkoutState.value + ' ' + checkoutZip.value;
}

function loadCheckout() {
  checkoutItemCount.className = 'text-right';
  checkoutSubTotal.className = 'text-right';
  checkoutTax.className = 'text-right';
  checkoutTotal.className = 'text-right';

  checkoutItemCount.textContent = cartCount();
  checkoutSubTotal.textContent = '$' + (cartSum()).toFixed(2);
  checkoutTax.textContent = '$' + (cartSum() * 0.08).toFixed(2);
  checkoutTotal.textContent = '$' + (cartSum() * 1.08).toFixed(2);
}

function validatePayment() {
  event.preventDefault();
  var well = document.getElementById('payment-alert');

  if (checkoutTotal.textContent == '$0.00') {
    well.className = 'well alert alert-warning text-center';
    well.textContent = 'Your cart is empty.';
    return;
  }
  if ((paymentCard.value.length != 16) ||
    (paymentExpMonth.value.length != 2) ||
    (paymentExpYear.value.length != 4) ||
    (paymentCVV.value.length != 3)) {
      well.className = 'well alert alert-danger text-center';
      well.textContent = 'Please make sure you enter all payment information!';
      return;
  }

  show(receiptPage);
}

function loadReceipt() {
  var receiptName = document.getElementById('receipt-name');
  var receiptItemCount = document.getElementById('receipt-item-count');
  var receiptTotal = document.getElementById('receipt-total');
  receiptName.textContent = checkoutName.value;
  generateAddress();
  receiptItemCount.textContent = cartCount();
  receiptTotal.textContent = checkoutTotal.textContent;
  clearCart();
}

function show(page) {
  event.preventDefault();

  var pages = [searchPage, productPage, cartPage, checkoutPage, receiptPage];
  for (var i = 0; i < pages.length; i++) {
    //console.log(pages[i].id + ' ' + page.id);
    if (pages[i].id == page.id) {
      pages.splice(i,1);
    }
  }
  var classes = page.className.split(' ');
  if (classes.indexOf('hide') > -1) {
    var location = classes.indexOf('hide');
    classes.splice(location, 1);
    page.className = classes.join(' ');
  }

  if (page == checkoutPage) {
    loadCheckout();
  }
  else if (page == receiptPage) {
    loadReceipt();
  }
  hide(pages);
}

function hide(pages) {
  for (var i = 0; i < pages.length; i++) {
    var classes = pages[i].className.split(' ');
    if (classes.indexOf('hide') === -1) {
      classes.push('hide');
      pages[i].className = classes.join(' ');
    }
  }
}

function newElement(type, parent, text) {
  var temp = document.createElement(type);
  if (parent != '') {
    parent.appendChild(temp);
  }
  if (text != '') {
    temp.className = text;
  }
  return temp;
}

function average(items) {
  var sum = 0;
  for (var i = 0, j = items.length; i < j; i++) {
    sum += items[i].rating;
  }
  return (sum/items.length).toFixed(1);
}

function updateRatings() {
  for (var i = 0, j = productList.length; i < j; i++) {
    productList[i].rating=average(productList[i].itemReviews);
  }
}

window.onload = search;
