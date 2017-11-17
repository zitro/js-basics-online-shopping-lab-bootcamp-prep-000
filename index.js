var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var itemPrice = math.random() + 100;
cart.push( {itemName: itemPrice});

}

function viewCart() {
  // write your code here
/*if(cart === cart.length){
for(let i = 0; i < cart.length; i++){
  var fullCart = cart.join(', ')
  return(`In your cart, you have ${fullCart}.`)
}else{
  return 'shopping cart is empty.'
}
return cart;
}}*/}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
if (cart.hasOwnProperty(item)){
  delete cart[item];
  return cart;
}else{
  return 'That item is not in your cart.';
}

}

function placeOrder(cardNumber) {
  // write your code here
}
