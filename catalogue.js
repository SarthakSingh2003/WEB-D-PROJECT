// Initialize cart array
let cart = [];

// Function to add a product to the cart
function addToCart(productName, price) {
    // Create a product object
    const product = {
        name: productName,
        price: price,
    };

    // Add the product to the cart
    cart.push(product);

    // Optionally, you can display a message or update the UI to indicate that the product is added to the cart
    alert(`${productName} Successfully added to the cart!`);
}
