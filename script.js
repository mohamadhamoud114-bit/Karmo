const products = [
    {
        id: 1,
        name: "ساعة ذكية أنيقة",
        price: 45,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
    },
    {
        id: 2,
        name: "سماعات لاسلكية",
        price: 30,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
    },
    {
        id: 3,
        name: "نظارة شمسية كلاسيك",
        price: 20,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500"
    },
    {
        id: 4,
        name: "حقيبة ظهر حديثة",
        price: 50,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
    }
];

let cart = [];

function renderProducts() {
    const productsContainer = document.getElementById('products-list');
    productsContainer.innerHTML = '';

    products.forEach(product => {
        productsContainer.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <div class="price">${product.price} $</div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    <i class="fas fa-cart-plus"></i> إضافة للسلة
                </button>
            </div>
        `;
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
    alert(`تمت إضافة "${product.name}" إلى السلة!`);
}

function updateCart() {
    document.getElementById('cart-count').innerText = cart.length;

    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    let totalPrice = 0;

    cart.forEach((item) => {
        totalPrice += item.price;
        cartItemsContainer.innerHTML += `
            <div class="cart-item">
                <span>${item.name}</span>
                <span><b>${item.price} $</b></span>
            </div>
        `;
    });

    document.getElementById('cart-total-price').innerText = totalPrice;
}

function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
    if (cartModal.style.display === 'flex') {
        cartModal.style.display = 'none';
    } else {
        cartModal.style.display = 'flex';
    }
}

function checkout() {
    if (cart.length === 0) {
        alert("سلة التسوق فارغة!");
    } else {
        alert("شكراً لك! تم استلام طلبك بنجاح 🎉");
        cart = [];
        updateCart();
        toggleCart();
    }
}

renderProducts();
