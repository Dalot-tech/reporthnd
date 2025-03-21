// Fixed script.js
const menuItems = [
    { name: "Achu", price: 2500, image: "Achu.JPG" },
    { name: "Rice and Chicken", price: 2000, image: "Rice and chicken.JPG" },
    { name: "Ekwang", price: 3000, image: "Ekwang.JPG" },
    { name: "Eru and Garri", price: 2800, image: "Eru and garri.JPG" }
];

function loadMenu() {
    const menuContainer = document.getElementById("menu");

    menuItems.forEach((item, index) => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h2>${item.name}</h2>
            <p>Price: ${item.price} FRS</p>
            <button onclick="addToCart(${index})">Add to Cart</button>
        `;

        menuContainer.appendChild(menuItem);
    });

    // Make menu section visible by default
    showSection('menu-section');
}

let cart = [];

function addToCart(index) {
    cart.push(menuItems[index]);
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceContainer = document.getElementById("total-price");
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const cartItem = document.createElement("li");
        cartItem.innerHTML = `${item.name} - ${item.price} FRS <button onclick="removeFromCart(${index})">Remove</button>`;
        cartItemsContainer.appendChild(cartItem);
    });

    totalPriceContainer.innerText = total;
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Thank you for your order!");
        cart = [];
        updateCart();
    }
}

function showSection(sectionId) {
    // Hide all sections first
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.remove('hidden');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    loadMenu();
});