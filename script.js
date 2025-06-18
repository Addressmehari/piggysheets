// Sample product data with multiple images and highlights
const products = [
    {
        id: 1,
        title: "Ludo",
        price: "₹49",
        images: [
            "https://m.media-amazon.com/images/I/81J7F2zLw5L._AC_UF1000,1000_QL80_.jpg",
            "https://m.media-amazon.com/images/I/71XW0mOZvCL._AC_UF1000,1000_QL80_.jpg"
        ],
        description: "Ludo is a classic family board game for 2-4 players. The goal is to move all your tokens from your starting area around the board to your home column by rolling a die. The first player to get all their tokens home wins the game. Simple rules make it perfect for players of all ages.",
        highlights: [
            "Classic family board game",
            "2-4 players, ages 6+",
            "20-60 minute playing time",
            "Includes game board, 16 tokens, and 1 die"
        ],
        buyLink: "https://gumroad.com/",
        previewLink: "#",
        howToPlay: [
            
        ],
        youtubeLink: "https://www.youtube.com/watch?v=6P9MYB4duJ4"
    },
    {
        id: 2,
        title: "Chess",
        price: "₹89",
        images: [
            "https://m.media-amazon.com/images/I/81SykW4FfJL._AC_UF1000,1000_QL80_.jpg",
            "https://m.media-amazon.com/images/I/81Df+WUZ1hL._AC_UF1000,1000_QL80_.jpg"
        ],
        description: "The classic game of strategy and skill. Chess is a two-player strategy board game played on a checkered board with 64 squares arranged in an 8×8 grid. Each player begins with 16 pieces: one king, one queen, two rooks, two knights, two bishops, and eight pawns. The objective is to checkmate the opponent's king by placing it under an inescapable threat of capture.",
        highlights: [
            "Strategy board game for 2 players",
            "Ages 8 to adult",
            "30-60 minute playing time",
            "Includes board and 32 pieces"
        ],
        buyLink: "https://gumroad.com/",
        previewLink: "#",
        howToPlay: [
            
        ],
        youtubeLink: "https://www.youtube.com/watch?v=OCSbzArwB10"
    },
    {
        id: 3,
        title: "Dungeons & Dragons",
        price: "₹99",
        images: [
            "https://m.media-amazon.com/images/I/91eW9QfLq1L._AC_UF1000,1000_QL80_.jpg",
            "https://m.media-amazon.com/images/I/91KkG6vXHAL._AC_UF1000,1000_QL80_.jpg"
        ],
        description: "Dungeons & Dragons (D&D) is a fantasy tabletop role-playing game (RPG) where players create their own characters and embark on adventures in a fantasy world. A Dungeon Master (DM) serves as the game's referee and storyteller, while also maintaining the setting in which the adventures occur. The characters form a party that interacts with the setting's inhabitants and each other.",
        highlights: [
            "Immersive fantasy role-playing game",
            "2-7 players, ages 12+",
            "2-4 hour playing sessions",
            "Includes rulebooks, character sheets, and dice set"
        ],
        buyLink: "https://gumroad.com/",
        previewLink: "#",
        howToPlay: [
            
        ],
        youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        id: 4,
        title: "Snakes & Ladders",
        price: "₹29",
        images: [
            "https://m.media-amazon.com/images/I/91y2Z4X5I5L._AC_UF1000,1000_QL80_.jpg",
            "https://m.media-amazon.com/images/I/91hJb+WbAeL._AC_UF1000,1000_QL80_.jpg"
        ],
        description: "Snakes and Ladders is a classic board game that's easy to play for the whole family. Players take turns rolling a die and moving their token. Land on a ladder, you climb up. Land on a snake, you slide down. The first player to reach the final space wins the game!",
        highlights: [
            "Simple and fun for all ages",
            "2-4 players, ages 4+",
            "15-30 minute playing time",
            "Colorful, durable game board"
        ],
        buyLink: "https://gumroad.com/",
        previewLink: "#",
        howToPlay: [
            
        ],
        youtubeLink: "https://www.youtube.com/watch?v=J---aiyznGQ"
    }
];

// DOM Elements
const productsGrid = document.getElementById('products');
const productsContainer = document.getElementById('productsContainer');
const productDetail = document.getElementById('productDetail');
const backButton = document.getElementById('backButton');
const heroSlider = document.getElementById('heroSlider');
const howToPlayContent = document.getElementById('howToPlayContent');
const youtubeButton = document.getElementById('youtubeButton');

// Product Detail Elements
const productTitle = document.getElementById('productTitle');
const productPrice = document.getElementById('productPrice');
const productDescription = document.getElementById('productDescription');
const productHighlights = document.getElementById('productHighlights');
const buyNowBtn = document.getElementById('buyNowBtn');
const downloadPreviewBtn = document.getElementById('downloadPreviewBtn');
const imageGallery = document.getElementById('imageGallery');
const similarProducts = document.getElementById('similarProducts');

// Initialize Swiper
let swiper = null;

// Initialize Hero Slider
const heroSwiper = new Swiper('.heroSwiper', {
    // Optional parameters
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    speed: 1000,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
    },
    
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 1,
            spaceBetween: 0
        }
    }
});

// Display products on page load
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    
    // Back button event listener
    backButton.addEventListener('click', () => {
        showProductList();
    });
    
    // Close modal when clicking outside
    document.addEventListener('click', (e) => {
        if (e.target === productDetail) {
            showProductList();
        }
    });
    
    // Close with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && productDetail.style.display === 'block') {
            showProductList();
        }
    });
});

// Display all products in the grid
function displayProducts() {
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card" data-id="${product.id}">
            <img src="${product.images[0]}" alt="${product.title}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-price">${product.price}</p>
            </div>
        </div>
    `).join('');

    // Add click event to product cards
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const productId = parseInt(card.getAttribute('data-id'));
            const product = products.find(p => p.id === productId);
            if (product) {
                showProductDetail(product);
            }
        });
    });
}

// Show product detail page
function showProductDetail(product) {
    // Hide hero slider
    if (heroSlider) {
        heroSlider.style.display = 'none';
    }
    
    // Update product info
    productTitle.textContent = product.title;
    productPrice.textContent = product.price;
    productDescription.textContent = product.description;
    
    // Update buy and download links
    buyNowBtn.href = product.buyLink;
    downloadPreviewBtn.href = product.previewLink;
    
    // Update YouTube button
    if (product.youtubeLink) {
        youtubeButton.href = product.youtubeLink;
        youtubeButton.style.display = 'inline-flex';
    } else {
        youtubeButton.style.display = 'none';
    }
    
    // Clear previous highlights
    productHighlights.innerHTML = '';
    
    // Add highlights
    product.highlights.forEach(highlight => {
        const li = document.createElement('li');
        li.textContent = highlight;
        productHighlights.appendChild(li);
    });
    
    // Update How to Play content
    if (product.howToPlay && howToPlayContent) {
        howToPlayContent.innerHTML = `
            <ol>
                ${product.howToPlay.map(step => `<li>${step}</li>`).join('')}
            </ol>
        `;
    } else if (howToPlayContent) {
        howToPlayContent.innerHTML = '<p>No instructions available for this product.</p>';
    }
    
    // Update image gallery
    updateImageGallery(product.images);
    
    // Show similar products
    showSimilarProducts(product.id);
    
    // Show product detail and hide product list
    productsContainer.style.display = 'none';
    productDetail.style.display = 'block';
    
    // Initialize Swiper after a short delay to ensure DOM is updated
    setTimeout(initSwiper, 100);
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Show product list
function showProductList() {
    productDetail.style.display = 'none';
    productsContainer.style.display = 'block';
    
    // Show hero slider when returning to product list
    if (heroSlider) {
        heroSlider.style.display = 'block';
    }
    
    // Destroy Swiper instance when going back to list
    if (swiper) {
        swiper.destroy();
        swiper = null;
    }
}

// Update image gallery with product images
function updateImageGallery(images) {
    imageGallery.innerHTML = images.map((image, index) => `
        <div class="swiper-slide">
            <img src="${image}" alt="Product image ${index + 1}">
        </div>
    `).join('');
    
    // Update thumbnails
    const thumbnailContainer = document.querySelector('.thumbnail-container');
    if (thumbnailContainer) {
        thumbnailContainer.innerHTML = images.map((image, index) => `
            <div class="thumbnail ${index === 0 ? 'active' : ''}" data-index="${index}">
                <img src="${image}" alt="Thumbnail ${index + 1}">
            </div>
        `).join('');
        
        // Add click events to thumbnails
        document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
            thumb.addEventListener('click', () => {
                if (swiper) {
                    swiper.slideTo(index);
                    updateActiveThumbnail(index);
                }
            });
        });
    }
}

// Initialize Swiper for image gallery
function initSwiper() {
    if (swiper) {
        swiper.destroy();
    }
    
    swiper = new Swiper('.swiper', {
        loop: false,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        on: {
            slideChange: function() {
                updateActiveThumbnail(this.activeIndex);
            }
        }
    });
}

// Update active thumbnail
function updateActiveThumbnail(index) {
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, i) => {
        if (i === index) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

// Show similar products (exclude current product)
function showSimilarProducts(currentProductId) {
    const similarProductsGrid = document.getElementById('similarProducts');
    if (!similarProductsGrid) return;
    
    // Get 3 random products that are not the current product
    const similar = products
        .filter(p => p.id !== currentProductId)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
    
    similarProductsGrid.innerHTML = similar.map(product => `
        <div class="product-card" data-id="${product.id}">
            <img src="${product.images[0]}" alt="${product.title}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-price">${product.price}</p>
            </div>
        </div>
    `).join('');
    
    // Add click events to similar product cards
    similarProductsGrid.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(card.getAttribute('data-id'));
            const product = products.find(p => p.id === productId);
            if (product) {
                showProductDetail(product);
            }
        });
    });
}