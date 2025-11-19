const allProducts = [
    { id: 1, name: "Smartphone X1", price: "$499", image: "images/product1.jpg" },
    { id: 2, name: "Laptop Pro 15", price: "$899", image: "images/product2.jpg" },
    { id: 3, name: "Wireless Headphones", price: "$199", image: "images/product3.jpg" },
    { id: 4, name: "Smartwatch S5", price: "$149", image: "images/product4.jpg" },
    { id: 5, name: "Bluetooth Speaker", price: "$79", image: "images/product5.jpg" },
];

const shopContainer = document.getElementById("shop-products");

allProducts.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product-card");
    div.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h4>${product.name}</h4>
        <p>${product.price}</p>
        <a href="product.html?id=${product.id}" class="btn">View Product</a>
    `;
    shopContainer.appendChild(div);
});
updateAuthArea();
renderProducts();
