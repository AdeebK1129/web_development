// collect the elements
const priceitem_display = document.querySelector(".priceitem_display");
const quantity_display = document.querySelector(".quantity_display");
const totalprice_display = document.querySelector(".totalprice_display");
const itemimg_display = document.querySelector(".itemimg_display");

// get values for quantity and price per unit
const priceitem = sessionStorage.getItem('saleprice1');
const quantityitem = sessionStorage.getItem('quantityitem1');

// calculate total price
const totalprice = priceitem * quantityitem;

// print the price, quantity, and total price in the collected elements
priceitem_display.innerHTML = `$${priceitem}`;
quantity_display.innerHTML = `${quantityitem}`;
totalprice_display.innerHTML = `$${totalprice}`; 

// testing: collect image
const imgurl = sessionStorage.getItem('imgitem1');

// put image
itemimg_display.innerHTML = `<img src="${imgurl}">`;