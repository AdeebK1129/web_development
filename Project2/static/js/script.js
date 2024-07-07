document.querySelectorAll(".checkoutForm").forEach(form => {
    form.addEventListener("submit", event => {
        event.preventDefault();

        // Collect elements within submitted card
        const cardBody = form.closest(".card-body");
        const productTitleElement = cardBody.querySelector(".card-title");
        const productDescriptionElement = cardBody.querySelector(".card-text");
        const productPriceElement = cardBody.querySelector(".price span");
        const productImageElement = cardBody.closest(".card").querySelector(".card-img-top");
        const quantityElement = form.querySelector(".quantity");

        // Handle potential missing products
        if (!productTitleElement || !productDescriptionElement || !productPriceElement || !productImageElement || !quantityElement) {
            console.error('One or more product elements could not be found.');
            return;
        }

        // Set Values
        const productTitle = productTitleElement.textContent;
        const productDescription = productDescriptionElement.textContent;
        const productPrice = productPriceElement.textContent;
        const productImage = productImageElement.src;
        const quantity = parseInt(quantityElement.value);

        // Store Product Info as Object
        const product = {
            title: productTitle,
            description: productDescription,
            price: productPrice,
            image: productImage,
            quantity: quantity
        };

        // Check if cart exists in session storage already, if not intialize empty array 
        let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

        // Check if the product already exists in the cart: boolean
        const existingProductIndex = cart.findIndex(item => item.title === productTitle);

        if (existingProductIndex > -1) {
            // If product exists, update quantity
            cart[existingProductIndex].quantity += product.quantity;
        } else {
            // If the product does not exist, add to cart
            cart.push(product);
        }

        // Store Cart in session storage
        sessionStorage.setItem('cart', JSON.stringify(cart));

        alert(`${productTitle} has been added to your cart.`);
    });
});

