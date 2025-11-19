const products = [
    { id: 1, name: "Smartphone X1", price: "$499", desc: "Latest smartphone with amazing camera.", image: "images/product1.jpg" },
    { id: 2, name: "Laptop Pro 15", price: "$899", desc: "High-performance laptop for professionals.", image: "images/product2.jpg" },
    { id: 3, name: "Wireless Headphones", price: "$199", desc: "Noise-cancelling wireless headphones.", image: "images/product3.jpg" },
    { id: 4, name: "Smartwatch S5", price: "$149", desc: "Smartwatch with fitness tracking features.", image: "images/product4.jpg" },
    { id: 5, name: "Bluetooth Speaker", price: "$79", desc: "Portable speaker with deep bass.", image: "images/product5.jpg" },
];

const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get("id"));

const product = products.find(p => p.id === productId);

document.getElementById("product-img").src = product.image;
document.getElementById("product-name").innerText = product.name;
document.getElementById("product-price").innerText = product.price;
document.getElementById("product-desc").innerText = product.desc;

document.getElementById("add-to-cart").addEventListener("click", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
});

