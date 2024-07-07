document.addEventListener('DOMContentLoaded', function () {
    const checkoutForm = document.getElementById('checkoutForm');
    const submitBtn = document.getElementById('submitBtn');
    const totalPriceElement = document.getElementById('totalPrice');
    const itemsElement = document.getElementById('items');

    checkoutForm.addEventListener('input', function () {
        submitBtn.disabled = !checkoutForm.checkValidity();
    });

    checkoutForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
        const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

        totalPriceElement.value = total;
        itemsElement.value = JSON.stringify(cart);

        checkoutForm.submit();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const productItemContainer = document.querySelector('.product-item-container');
    const subtotalElement = document.querySelector('.subtotal');
    const totalPriceElement = document.querySelector('.total_price_display');
    
    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    let subtotal = 0;

    cart.forEach(item => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item', 'mb-3');

        const itemTotalPrice = parseFloat(item.price) * parseInt(item.quantity);

        productItem.innerHTML = `
            <div style="position: relative;">
                <img src="${item.image}" alt="Product Image" class="product-img">
                <div class="quantity-badge">${item.quantity}</div>
            </div>
            <div class="product-description">
                <strong>${item.title}</strong><br>
            </div>
            <div>
                $${itemTotalPrice.toFixed(2)}
            </div>
        `;

        productItemContainer.appendChild(productItem);
        subtotal += itemTotalPrice;
    });

    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    totalPriceElement.textContent = `$${subtotal.toFixed(2)}`;
});
