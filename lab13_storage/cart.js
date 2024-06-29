// collect the elements
const priceitem_display = document.querySelector(".priceitem_display");
const quantity_display = document.querySelector(".quantity_display");
const totalprice_display = document.querySelector(".totalprice_display");
const itemimg = document.querySelector(".itemimg");
const itemdesc = document.querySelector(".itemdesc");

// get values for quantity and price per unit
const priceitem = sessionStorage.getItem('saleprice1');
const quantityitem = sessionStorage.getItem('quantityitem1');
const itemimage = sessionStorage.getItem('imgitem1');
const description_item = sessionStorage.getItem("itemdescription");


// calculate total price
const totalprice = priceitem * quantityitem;


// Good for one piece of data 
// print the price, quantity, and total price in the collected elements
/**
priceitem_display.innerHTML = `$${priceitem}`;
quantity_display.innerHTML = `${quantityitem}`;
totalprice_display.innerHTML = `$${totalprice}`; 
 */

// put image
/**
 * itemimg_display.innerHTML = `<img src="${itemimage}">`;
 */

let image = document.createElement('img');
image.src = sessionStorage.getItem('imgitem1');
image.style.width = "30px";
itemimg.append(image);

// append product description
let product = document.createElement('p');
product.innerHTML = description_item;
itemdesc.append(product);

// append price
let productprice = document.createElement('p');
productprice.innerHTML = `$${priceitem}`;
priceitem_display.append(productprice);

// append quantity
let productquantity = document.createElement('p');
productquantity.innerHTML = quantityitem;
quantity_display.append(productquantity);

// append total price
let producttotalprice = document.createElement('p');
producttotalprice.innerHTML = `$${totalprice}`;
totalprice_display.append(producttotalprice);

