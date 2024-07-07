document.addEventListener('DOMContentLoaded', function () {
    const addToCartButton = document.querySelector('.btn.mt-3');
    const quantityInput = document.getElementById('quantity');
    const productTitle = document.querySelector('.product-title').textContent;
    const productDescription = document.querySelector('.product-description').textContent;
    const productPrice = document.querySelector('.product-price').textContent.replace('$', '');
    const productImage = document.getElementById('mainImage').src;

    addToCartButton.addEventListener('click', function () {
        const quantity = parseInt(quantityInput.value);
        const cart = JSON.parse(sessionStorage.getItem('cart')) || [];

        const existingItemIndex = cart.findIndex(item => item.title === productTitle);
        if (existingItemIndex > -1) {
            cart[existingItemIndex].quantity += quantity;
        } else {
            const product = {
                title: productTitle,
                description: productDescription,
                price: productPrice,
                image: productImage,
                quantity: quantity
            };
            cart.push(product);
        }

        sessionStorage.setItem('cart', JSON.stringify(cart));
        alert(`${productTitle} has been added to your cart.`);
    });
});
