const featuredProducts = [
    { id: 1, name: "Smartphone X1", price: "$499", image: "images/product1.jpg" },
    { id: 2, name: "Laptop Pro 15", price: "$899", image: "images/product2.jpg" },
    { id: 3, name: "Wireless Headphones", price: "$199", image: "images/product3.jpg" },
];

const container = document.getElementById("featured-products");

featuredProducts.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product-card");
    div.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h4>${product.name}</h4>
        <p>${product.price}</p>
        <a href="product.html?id=${product.id}" class="btn">View Product</a>
    `;
    container.appendChild(div);
});
updateAuthArea();
renderProducts();
