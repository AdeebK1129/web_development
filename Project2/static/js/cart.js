document.addEventListener('DOMContentLoaded', function () {
    const cartItemsContainer = document.querySelector('.cart-items-container');
    const subtotalElement = document.querySelector('.subtotal');
    const checkoutBtn = document.querySelector('.checkout-btn');
    
    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    let subtotal = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item', 'row');

        const itemTotalPrice = parseFloat(item.price) * parseInt(item.quantity);

        cartItem.innerHTML = `
            <div class="col-6 d-flex">
                <img src="${item.image}" alt="Product Image" class="cart-img">
                <div class="item-details">
                    <strong>${item.title}</strong><br>
                    ${item.description}
                </div>
            </div>
            <div class="col-2">
                <input type="number" class="form-control item-quantity" value="${item.quantity}" min="1" data-title="${item.title}">
            </div>
            <div class="col-2">
                $<span class="item-total">${itemTotalPrice.toFixed(2)}</span>
            </div>
            <div class="col-2">
                <span class="item-remove" data-title="${item.title}">&times;</span>
            </div>
        `;

        cartItemsContainer.appendChild(cartItem);
        subtotal += itemTotalPrice;
    });

    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    if (subtotal === 0) {
        checkoutBtn.disabled = true;
    } else {
        checkoutBtn.disabled = false;
    }

    // Update subtotal and session storage when quantity changes
    cartItemsContainer.addEventListener('change', function (e) {
        if (e.target.classList.contains('item-quantity')) {
            const newQuantity = parseInt(e.target.value);
            const itemTitle = e.target.getAttribute('data-title');
            const cartItem = cart.find(item => item.title === itemTitle);
            cartItem.quantity = newQuantity;
            
            const itemTotalPrice = parseFloat(cartItem.price) * newQuantity;
            e.target.closest('.cart-item').querySelector('.item-total').textContent = itemTotalPrice.toFixed(2);

            // Update cart and subtotal
            cart = cart.map(item => item.title === itemTitle ? cartItem : item);
            sessionStorage.setItem('cart', JSON.stringify(cart));

            let newSubtotal = cart.reduce((acc, item) => acc + (parseFloat(item.price) * item.quantity), 0);
            subtotalElement.textContent = `$${newSubtotal.toFixed(2)}`;

            if (newSubtotal === 0) {
                checkoutBtn.disabled = true;
            } else {
                checkoutBtn.disabled = false;
            }
        }
    });

    // Remove item from cart
    cartItemsContainer.addEventListener('click', function (e) {
        if (e.target.classList.contains('item-remove')) {
            const itemTitle = e.target.getAttribute('data-title');
            cart = cart.filter(item => item.title !== itemTitle);
            sessionStorage.setItem('cart', JSON.stringify(cart));

            e.target.closest('.cart-item').remove();

            let newSubtotal = cart.reduce((acc, item) => acc + (parseFloat(item.price) * item.quantity), 0);
            subtotalElement.textContent = `$${newSubtotal.toFixed(2)}`;

            if (newSubtotal === 0) {
                checkoutBtn.disabled = true;
            } else {
                checkoutBtn.disabled = false;
            }
        }
    });
});
