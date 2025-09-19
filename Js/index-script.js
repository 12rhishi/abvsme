// Hero Section Carousel Logic

const heroImage = document.getElementById('hero-image');
const heroDotsContainer = document.getElementById('hero-dots-container');

const heroImages = [
    'Images/hero/abvsme_cover.png',
    'Images/hero/2.jpg',
    'Images/hero/3.jpg',
    'Images/hero/4.jpg',
    'Images/hero/5.jpg'
];
let currentHeroImageIndex = 0;
let autoSlideInterval;

function createHeroDots() {
    if (!heroDotsContainer) return;
    heroDotsContainer.innerHTML = ''; 
    heroImages.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('carousel-dot');
        if (index === currentHeroImageIndex) {
            dot.classList.add('active');
        }
        dot.addEventListener('click', () => {
            currentHeroImageIndex = index;
            showHeroImage(currentHeroImageIndex);
            startAutoSlide(); 
        });
        heroDotsContainer.appendChild(dot);
    });
}

function updateHeroDots() {
    if (!heroDotsContainer) return;
    const dots = heroDotsContainer.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentHeroImageIndex);
    });
}

// Function to handle image loading
function lazyLoadImage(imgElement) {
    if (!imgElement) return;

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && imgElement.dataset.src) {
                imgElement.src = imgElement.dataset.src;
                imgElement.removeAttribute('data-src');
                observer.unobserve(imgElement);
            }
        });
    });

    observer.observe(imgElement);
}

function showHeroImage(index) {
    if (!heroImage) return;
    heroImage.style.opacity = 0; 
    setTimeout(() => {
        heroImage.src = heroImages[index];
        heroImage.style.opacity = 1; 
        updateHeroDots(); 
    }, 500); 
}

function nextHeroImage() {
    currentHeroImageIndex = (currentHeroImageIndex + 1) % heroImages.length;
    showHeroImage(currentHeroImageIndex);
}

function startAutoSlide() {
    if (!heroImage) return;
    clearInterval(autoSlideInterval); 
    autoSlideInterval = setInterval(nextHeroImage, 5000); 
}

if (heroImage) {
    createHeroDots(); 
    showHeroImage(currentHeroImageIndex);
    startAutoSlide(); 
}



// Generic Carousel Logic

function setupCarousel(carouselId, cardSelector, dotsId, getCardsPerViewFn) {
    const carouselInner = document.getElementById(carouselId);
    if (!carouselInner) return;
    const dotsContainer = document.getElementById(dotsId);
    const cards = carouselInner.querySelectorAll(cardSelector);
    if (!cards.length) return;

    let currentSlideIndex = 0;
    let autoSlideInterval;
    let cardsPerView = getCardsPerViewFn();

    const getTotalSlides = () => Math.ceil(cards.length / cardsPerView);

    function createDots() {
        if(!dotsContainer) return;
        dotsContainer.innerHTML = '';
        const totalSlides = getTotalSlides();
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.classList.add('carousel-dot', `${carouselId}-dot`);
            if (i === currentSlideIndex) dot.classList.add('active');
            dot.dataset.slideIndex = i;
            dot.addEventListener('click', (event) => {
                currentSlideIndex = parseInt(event.target.dataset.slideIndex);
                showCards(currentSlideIndex * cardsPerView);
                startAutoSlide();
            });
            dotsContainer.appendChild(dot);
        }
    }

    function updateDots() {
        if(!dotsContainer) return;
        const dots = dotsContainer.querySelectorAll('.carousel-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlideIndex);
        });
    }

    function showCards(firstCardIndex) {
        const cardWidth = cards[0].offsetWidth + 16; // card width + gap
        const scrollAmount = firstCardIndex * cardWidth;
        carouselInner.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
        updateDots();
    }

    function nextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % getTotalSlides();
        showCards(currentSlideIndex * cardsPerView);
    }

    function startAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    function initialize() {
        cardsPerView = getCardsPerViewFn();
        currentSlideIndex = 0;
        createDots();
        showCards(0);
        startAutoSlide();
    }

    window.addEventListener('resize', initialize);
    initialize();
}

// Setup News Carousel
setupCarousel('news-carousel-inner', '.news-card', 'news-dots-container', () => {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
});



// Photo Gallery Section Carousel Logic

const galleryImage = document.getElementById('gallery-image');
const galleryDotsContainer = document.getElementById('gallery-dots-container');

const galleryImages = [
    'Images/Gallery/life_1.jpeg',
    'Images/Gallery/teacher_day.jpg',
    'Images/Gallery/sem1.jpg',
    'Images/Gallery/life_2.jpeg',
    'Images/Gallery/life_3.jpeg',
    'Images/Gallery/life_4.jpg'
];
let currentGalleryImageIndex = 0;
let galleryAutoSlideInterval;

function createGalleryDots() {
    if (!galleryDotsContainer) return;
    galleryDotsContainer.innerHTML = '';
    galleryImages.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('carousel-dot', 'gallery-carousel-dot');
        if (index === currentGalleryImageIndex) {
            dot.classList.add('active');
        }
        dot.addEventListener('click', () => {
            currentGalleryImageIndex = index;
            showGalleryImage(currentGalleryImageIndex);
            startGalleryAutoSlide();
        });
        galleryDotsContainer.appendChild(dot);
    });
}

function updateGalleryDots() {
    if (!galleryDotsContainer) return;
    const dots = galleryDotsContainer.querySelectorAll('.gallery-carousel-dot');
     dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentGalleryImageIndex);
    });
}

function showGalleryImage(index) {
    if (!galleryImage) return;
    galleryImage.style.opacity = 0;
    setTimeout(() => {
        galleryImage.src = galleryImages[index];
        galleryImage.style.opacity = 1;
        updateGalleryDots();
    }, 500);
}

function nextGalleryImage() {
    currentGalleryImageIndex = (currentGalleryImageIndex + 1) % galleryImages.length;
    showGalleryImage(currentGalleryImageIndex);
}

function startGalleryAutoSlide() {
    if (!galleryImage) return;
    clearInterval(galleryAutoSlideInterval);
    galleryAutoSlideInterval = setInterval(nextGalleryImage, 5000);
}

if (galleryImage) {
    createGalleryDots();
    showGalleryImage(currentGalleryImageIndex);
    startGalleryAutoSlide();
}

// Upward Ticker Logic

document.addEventListener('DOMContentLoaded', () => {
    const upwardTickerContainer = document.getElementById('upward-ticker-items');

    const upwardTickerData = [
        {
            text: "International Conference on 'From Code to Cloud'.",
            link: "News&Events.html#conference",
            date: "04-Sep-2025",
	    isNew: true // Add this flag to the desired item	
        },

        {
            text: "ABVSME organizes Atal Smriti Samvad.",
            link: "https://www.jnu.ac.in/node/159897624",
            date: "20-Aug-2025"
        },
        {
            text: "List-1 MBA Phase-2 (2025-26) Results are available now.",
            link: "http://jnuee.jnu.ac.in/jnuabmba2025resultsyz/default.aspx",
            date: "15-Aug-2025"
        },
        {
            text: "Entrepreneurship Workshop for students.",
            link: "News&Events.html#workshop",
            date: "19-Mar-2025"
        }
    ];

    function populateUpwardTicker() {
        if (!upwardTickerContainer) return;

        upwardTickerContainer.innerHTML = '';
        // Duplicate the data for a seamless loop
        const tickerContent = [...upwardTickerData, ...upwardTickerData];

        tickerContent.forEach(item => {
            const linkElement = document.createElement('a');
            linkElement.href = item.link;
            linkElement.target = "_blank";
            linkElement.rel = "noopener noreferrer";
            linkElement.classList.add('upward-ticker-item');
            linkElement.innerHTML = `
    <p class="date">${item.date}</p>
    <div class="flex items-center">
        ${item.isNew ? '<span class="new-badge-upward">NEW</span>' : ''}
        <p class="text">${item.text}</p>
    </div>
            `;
            upwardTickerContainer.appendChild(linkElement);
        });
    }

    populateUpwardTicker();
});
