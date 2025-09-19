// JavaScript for mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

const mobileAboutButton = document.getElementById('mobile-about-button');
const mobileAboutMenu = document.getElementById('mobile-about-menu');

const mobileProgramsButton = document.getElementById('mobile-programs-button');
const mobileProgramsMenu = document.getElementById('mobile-programs-menu');

const mobileFacultyButton = document.getElementById('mobile-faculty-button');
const mobileFacultyMenu = document.getElementById('mobile-faculty-menu');

const mobilePeopleButton = document.getElementById('mobile-people-button');
const mobilePeopleMenu = document.getElementById('mobile-people-menu');

const mobileStudentButton = document.getElementById('mobile-student-button');
const mobileStudentMenu = document.getElementById('mobile-student-menu');

const mobileLibraryButton = document.getElementById('mobile-library-button');
const mobileLibraryMenu = document.getElementById('mobile-library-menu');

const mobileMoreButton = document.getElementById('mobile-more-button');
const mobileMoreMenu = document.getElementById('mobile-more-menu');


mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Toggle 'About ABVSME' dropdown in mobile menu
if (mobileAboutButton) {
    mobileAboutButton.addEventListener('click', () => {
        mobileAboutMenu.classList.toggle('hidden');
        mobileAboutButton.querySelector('svg').classList.toggle('rotate-180');
    });
}


// Toggle 'Programs' dropdown in mobile menu
if (mobileProgramsButton) {
    mobileProgramsButton.addEventListener('click', () => {
        mobileProgramsMenu.classList.toggle('hidden');
        mobileProgramsButton.querySelector('svg').classList.toggle('rotate-180');
    });
}


// Toggle 'Faculty' dropdown in mobile menu
if (mobileFacultyButton) {
    mobileFacultyButton.addEventListener('click', () => {
        mobileFacultyMenu.classList.toggle('hidden');
        mobileFacultyButton.querySelector('svg').classList.toggle('rotate-180');
    });
}


// Toggle 'Student' dropdown in mobile menu
if (mobileStudentButton) {
    mobileStudentButton.addEventListener('click', () => {
        mobileStudentMenu.classList.toggle('hidden');
        mobileStudentButton.querySelector('svg').classList.toggle('rotate-180');
    });
}


// Toggle 'Library' nested dropdown in mobile menu
if (mobileLibraryButton) {
    mobileLibraryButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent parent dropdown from closing
        mobileLibraryMenu.classList.toggle('hidden');
        mobileLibraryButton.querySelector('svg').classList.toggle('rotate-180');
    });
}


// Toggle 'More' dropdown in mobile menu
if (mobileMoreButton) {
    mobileMoreButton.addEventListener('click', () => {
        mobileMoreMenu.classList.toggle('hidden');
        mobileMoreMenu.querySelector('svg').classList.toggle('rotate-180');
    });
}


// Close mobile menu and submenus when a link is clicked
if (mobileMenu) {
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            if(mobileMoreMenu) mobileMoreMenu.classList.add('hidden');
            if(mobileMoreButton) mobileMoreButton.querySelector('svg').classList.remove('rotate-180');
            if(mobileAboutMenu) mobileAboutMenu.classList.add('hidden');
            if(mobileAboutButton) mobileAboutButton.querySelector('svg').classList.remove('rotate-180');
            if(mobileProgramsMenu) mobileProgramsMenu.classList.add('hidden');
            if(mobileProgramsButton) mobileProgramsButton.querySelector('svg').classList.remove('rotate-180');
            if(mobileFacultyMenu) mobileFacultyMenu.classList.add('hidden');
            if(mobileFacultyButton) mobileFacultyButton.querySelector('svg').classList.remove('rotate-180');
            if(mobileStudentMenu) mobileStudentMenu.classList.add('hidden');
            if(mobileStudentButton) mobileStudentButton.querySelector('svg').classList.remove('rotate-180');
            if(mobileLibraryMenu) mobileLibraryMenu.classList.add('hidden');
            if(mobileLibraryButton) mobileLibraryButton.querySelector('svg').classList.remove('rotate-180');
        });
    });
}


// Accessibility Features (Font Size and Contrast)
let currentFontSize = 16; // Base font size for body
const bodyElement = document.body;

function changeFontSize(direction) {
    if (direction === 1) { // Increase
        currentFontSize = Math.min(24, currentFontSize + 2);
    } else if (direction === -1) { // Decrease
        currentFontSize = Math.max(12, currentFontSize - 2);
    } else { // Reset
        currentFontSize = 16;
    }
    bodyElement.style.fontSize = `${currentFontSize}px`;
}

function changeContrast(color) {
    console.log(`Changing contrast to ${color}`);
}

// JavaScript for Top Bar Hide/Show on Scroll
const topBar = document.getElementById('top-bar');
let lastScrollY = window.scrollY;
const scrollThreshold = 50; 

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY && window.scrollY > scrollThreshold) {
        if (topBar) topBar.style.transform = 'translateY(-100%)';
    } else {
        if (topBar) topBar.style.transform = 'translateY(0)';
    }
    lastScrollY = window.scrollY;
});


// =====================================================================
// Hero Section Carousel Logic
// =====================================================================
const heroImage = document.getElementById('hero-image');
const heroDotsContainer = document.getElementById('hero-dots-container');

const heroImages = [
    'Images/hero/abvsme_cover.png?q=80&w=2070&auto=format&fit=crop',
    'Images/hero/2.jpg?q=80&w=2071&auto=format&fit=crop',
    'Images/hero/3.jpg?q=80&w=2070&auto=format&fit=crop',
    'Images/hero/4.jpg?q=80&w=2070&auto=format&fit=crop',
    'Images/hero/5.jpg?q=80&w=2070&auto=format&fit=crop'
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


// =====================================================================
// Generic Carousel Logic
// =====================================================================
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

// =====================================================================
// Photo Gallery Section Carousel Logic
// =====================================================================
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


// =====================================================================
// Upward Ticker Logic
// =====================================================================
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


// =====================================================================
// Scroll to Top Button Logic
// =====================================================================
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

if (scrollToTopBtn) {
    window.onscroll = function() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            scrollToTopBtn.classList.remove('hidden');
        } else {
            scrollToTopBtn.classList.add('hidden');
        }
    };

    scrollToTopBtn.onclick = function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
}

// =====================================================================
// NEW: MBA Courses Page and Generic Page Logic
// =====================================================================
document.addEventListener('DOMContentLoaded', () => {
    // --- Logic for Course Page Tabs ---
    const courseTabs = document.querySelectorAll('.course-tab-button');
    const courseContents = document.querySelectorAll('.course-tab-content');

    if(courseTabs.length > 0 && courseContents.length > 0) {
        // Set default tab on page load
        courseTabs[0].classList.add('active');
        courseContents[0].classList.remove('hidden');

        courseTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Deactivate all tabs and hide all content
                courseTabs.forEach(t => t.classList.remove('active'));
                courseContents.forEach(c => c.classList.add('hidden'));

                // Activate clicked tab and show its content
                tab.classList.add('active');
                const targetContentId = tab.dataset.target;
                const targetContent = document.getElementById(targetContentId);
                if (targetContent) {
                    targetContent.classList.remove('hidden');
                }
            });
        });
    }

    // --- Logic for Accordions (used for electives) ---
    const accordionButtons = document.querySelectorAll('.accordion-button');
    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const icon = button.querySelector('svg');

            content.classList.toggle('hidden');
            icon.classList.toggle('rotate-180');
        });
    });

});


// =============================
// Scrollable Student Tables
// =============================

// Data
const placedStudents = [
  { name: "Shishir Pandey", company: "Corizo" },
  { name: "Ashutosh Singh", company: "Launched" },
  { name: "Shravan Keshari", company: "Skyra Techscape Pvt Ltd" },
  { name: "Aakash", company: "Stellara Edutech" },
  { name: "Aashutosh Singh", company: "Stellara Edutech" },
  { name: "Tejasvi", company: "TopperRank" },
  { name: "Aniket", company: "Unlox" },
  { name: "Shravan Keshari", company: "Unlox" },
  { name: "Yash Kumar", company: "Unlox" },
  { name: "Aakash", company: "Volume9" },
  { name: "Abhishek Tiwari", company: "Volume9" },
  { name: "Aniket", company: "Volume9" },
  { name: "Shravan Keshari", company: "Volume9" },
  { name: "Shashir Pandey", company: "Marut Air" }
];

const internshipStudents = [
  { name: "Ananya Rastogi", company: "Aadesh Foundation" },
  { name: "Ankita Singh", company: "Aadesh Foundation" },
  { name: "Divya Sharma", company: "Aadesh Foundation" },
  { name: "Isha Salhotra", company: "Aadesh Foundation" },
  { name: "Keshav Sharma", company: "Aadesh Foundation" },
  { name: "Pulkita", company: "Aadesh Foundation" },
  { name: "Ananya Rastogi", company: "CoreFit Care" },
  { name: "Ankush Ydav", company: "CoreFit Care" },
  { name: "Anshul Yadav", company: "CoreFit Care" },
  { name: "Divya Sharma", company: "CoreFit Care" },
  { name: "Isha Salhotra", company: "CoreFit Care" },
  { name: "Keshav Sharma", company: "CoreFit Care" },
  { name: "Nandini", company: "CoreFit Care" },
  { name: "Pulkita ", company: "CoreFit Care" },
  { name: "Vidhi Sharma", company: "CoreFit Care" },
  { name: "Yuktika Duggal", company: "CoreFit Care" },
  { name: "Ananya Rastogi", company: "Den Publications" },
  { name: "Ananya Singh", company: "Den Publications" },
  { name: "Ankita Singh", company: "Den Publications" },
  { name: "Aviral Pratap Singh", company: "Den Publications" },
  { name: "Divya Sharma", company: "Den Publications" },
  { name: "Mokshika Arya", company: "Den Publications" },
  { name: "Pulkita Thakran", company: "Den Publications" },
  { name: "Shivangi Singh", company: "Den Publications" },
  { name: "Yashika Choudhary", company: "Den Publications" },
  { name: "Vidhi Sharma", company: "Scrabble" },
  { name: "Vidhi Sharma", company: "IAA" },
  { name: "Sanika Herlekar", company: "IAA" }
];
// Utility function to render paginated tables
function setupScrollableTable(data, tbodyId, upBtnId, downBtnId) {
  const tbody = document.getElementById(tbodyId);
  const upBtn = document.getElementById(upBtnId);
  const downBtn = document.getElementById(downBtnId);

  let startIndex = 0;
  const rowsPerPage = 5;

  function renderTable() {
    tbody.innerHTML = "";
    const pageData = data.slice(startIndex, startIndex + rowsPerPage);
    pageData.forEach((student, idx) => {
  const row = document.createElement("tr");
  row.className = "border-b";
  row.innerHTML = `
    <td class="py-2 px-4 text-center">${startIndex + idx + 1}.</td>
    <td class="py-2 px-4">${student.name}</td>
    <td class="py-2 px-4 text-gray-600">${student.company}</td>
  `;
  tbody.appendChild(row);
});

    // Disable buttons when at limits
    upBtn.disabled = startIndex === 0;
    downBtn.disabled = startIndex + rowsPerPage >= data.length;
  }

  upBtn.addEventListener("click", () => {
    if (startIndex > 0) {
      startIndex -= rowsPerPage;
      renderTable();
    }
  });

  downBtn.addEventListener("click", () => {
    if (startIndex + rowsPerPage < data.length) {
      startIndex += rowsPerPage;
      renderTable();
    }
  });

  renderTable(); // initial render
}

// Initialize both tables
document.addEventListener("DOMContentLoaded", () => {
  setupScrollableTable(placedStudents, "placed-students-tbody", "placed-scroll-up", "placed-scroll-down");
  setupScrollableTable(internshipStudents, "internship-students-tbody", "internship-scroll-up", "internship-scroll-down");
});


// Associated faculty


document.addEventListener('DOMContentLoaded', function() {
        const associatedContainer = document.querySelector('#associated-faculty .grid');

        const associatedFacultyData = [
            { name: 'Prof. Ajay Kumar Dubey', image: 'Images/Faculty/Associated_Faculty/akdubey.jpg', emails: ['akdubey@mail.jnu.ac.in', 'ajaydubey.jnu@gmail.com'], ProfileUrl: 'https://www.jnu.ac.in/content/akdubey' },
            { name: 'Dr. Arun Srivastava', image: 'Images/Faculty/Associated_Faculty/arun.png', emails: ['a_srivastava@mail.jnu.ac.in', 'srivastava02@hotmail.com'], ProfileUrl: 'https://www.jnu.ac.in/content/a_srivastava' },
            { name: 'Prof. Bhupinder Zutshi', image: 'Images/Faculty/Associated_Faculty/bzutshi.jpg', emails: ['b_zutshi@mail.jnu.ac.in', 'bzutshi@gmail.com'] },
            { name: 'Prof. Girish Nath Jha', image: 'Images/Faculty/Associated_Faculty/girish.jpg', emails: ['girishjha@jnu.ac.in', 'girishjha@gmail.com'], ProfileUrl: 'https://www.jnu.ac.in/content/girishjha' },
            { name: 'Prof. Gulshan Sachdeva', image: 'Images/Faculty/Associated_Faculty/2 Gulshan Sachdeva.jpg', emails: ['gulshanjnu@gmail.com', 'gulshan@mail.jnu.ac.in'], ProfileUrl: 'https://www.jnu.ac.in/content/gulshan' },
            { name: 'Prof. Jayant Tripathi', image: 'Images/Faculty/Associated_Faculty/jtripathi.jpg', emails: ['jktripathi@mail.jnu.ac.in', 'jktrip@yahoo.com'], ProfileUrl: 'https://www.jnu.ac.in/content/jktripathi' },
            { name: 'Prof. Kaushal K. Sharma', image: 'Images/Faculty/Associated_Faculty/KaushalSharma.jpg', emails: ['kaushalkumar@mail.jnu.ac.in'] },
            { name: 'Prof. Krishnendu Ghosh Dastidar', image: 'Images/Faculty/Associated_Faculty/dastidar-photo.jpg', emails: ['krishnendu.dastidar@gmail.com', 'kgd0302@mail.jnu.ac.in', 'kgd12@yahoo.com'], ProfileUrl: 'https://www.jnu.ac.in/content/kgd0302' },
            { name: 'Prof. Madhav Govind', image: 'Images/Faculty/Associated_Faculty/Madhav Govind.png', emails: ['m_govind@mail.jnu.ac.in', 'mgovind11@gmail.com'], ProfileUrl: 'https://www.jnu.ac.in/content/m_govind' },
            { name: 'Prof. Milap Punia', image: 'Images/Faculty/Associated_Faculty/mpunia.jpg', emails: ['punia@mail.jnu.ac.in', 'milap.jnu@gmail.com'], ProfileUrl: 'https://www.jnu.ac.in/content/punia' },
            { name: 'Prof. P.K. Joshi', image: 'Images/Faculty/Associated_Faculty/PKJoshi.jpg', emails: ['pkjoshi@mail.jnu.ac.in', 'pkjoshi27@hotmail.com'], ProfileUrl: 'https://www.jnu.ac.in/content/pkjoshi' },
            { name: 'Prof. Paulraj Rajamani', image: 'Images/Faculty/Associated_Faculty/prajamani.jpg', emails: ['paulrajr@mail.jnu.ac.in'], ProfileUrl: 'https://www.jnu.ac.in/content/paulrajr' },
            { name: 'Prof. Pradipta K. Chaudhury', image: 'Images/Faculty/Associated_Faculty/pradipta.jpg', emails: ['pradipta@mail.jnu.ac.in'] },
            { name: 'Prof. Ravikesh', image: 'Images/Faculty/Associated_Faculty/ravikesh.png', emails: ['ravikesh@mail.jnu.ac.in', 'ravikesh@gmail.com'], ProfileUrl: 'https://www.jnu.ac.in/content/ravikesh' },
            { name: 'Prof. Saumen Chattopadhyay', image: 'Images/Faculty/Associated_Faculty/saumen.jpg', emails: ['saumen@mail.jnu.ac.in', 'saumen@jnu.ac.in'], ProfileUrl: 'https://www.jnu.ac.in/content/saumen' },
            { name: 'Dr. Sudesh Yadav', image: 'Images/Faculty/Associated_Faculty/sudesh.png', emails: ['syadav@mail.jnu.ac.in', 'sudesh27@hotmail.com'], ProfileUrl: 'https://www.jnu.ac.in/content/syadav' },
            { name: 'Prof. T.V. Vijay Kumar', image: 'Images/Faculty/Associated_Faculty/Photo_TVVK.jpg', emails: ['tvvk@mail.jnu.ac.in', 'tvvijaykumar@hotmail.com'], ProfileUrl: 'https://www.jnu.ac.in/content/tvvk' },
            { name: 'Prof. Umesh Kulshrestha', image: 'Images/Faculty/Associated_Faculty/umesh.png', emails: ['umesh@mail.jnu.ac.in', 'umeshkulshrestha@gmail.com'], ProfileUrl: 'https://www.jnu.ac.in/content/umesh' },
            { name: 'Dr. Usha Mina', image: 'Images/Faculty/Associated_Faculty/UshaMina.jpg', emails: ['ushamina@mail.jnu.ac.in', 'praush2@gmail.com'], ProfileUrl: 'https://www.jnu.ac.in/content/ushamina' }
        ];

        function populateFaculty(container, data, defaultTitle) {
            let facultyHTML = '';
            data.forEach(faculty => {
                const emailLinks = faculty.emails.map(email =>
                    `<a href="mailto:${email}" class="text-gray-600 hover:text-blue-500 block truncate"><i class="fas fa-envelope fa-fw mr-2"></i>${email}</a>`
                ).join('');
                const title = faculty.title || defaultTitle;
                const imageLink = faculty.ProfileUrl ?
                    `<a href="${faculty.ProfileUrl}" target="_blank">
                        <img class="w-32 h-32 rounded-full mx-auto mb-4 object-fill border-4 border-transparent hover:border-blue-200 transition-all" src="${faculty.image}" alt="Photo of ${faculty.name}">
                    </a>` :
                    `<img class="w-32 h-32 rounded-full mx-auto mb-4 object-fill border-4 border-transparent hover:border-blue-200 transition-all" src="${faculty.image}" alt="Photo of ${faculty.name}">`;

                facultyHTML += `
                    <div class="bg-white rounded-xl shadow-lg p-6 text-center flex flex-col justify-between transform hover:scale-105 transition-transform duration-300">
                        <div>
                            ${imageLink}
                            <h3 class="text-xl font-bold text-blue-800">${faculty.name}</h3>
                            <p class="text-md font-semibold text-blue-600 mt-1">${title}</p>
                        </div>
                        <div class="mt-4 pt-4 border-t border-gray-200">
                            <div class="text-xs text-left space-y-1">
                                ${emailLinks}
                            </div>
                        </div>
                    </div>
                `;
            });
            container.innerHTML = facultyHTML;
        }

        populateFaculty(associatedContainer, associatedFacultyData, 'Professor');
        
    });


// OFFICE STAFF

document.addEventListener('DOMContentLoaded', function() {
    // Existing code for Associated Faculty
    const associatedContainer = document.querySelector('#associated-faculty .grid');

    const associatedFacultyData = [
        // ... (your existing associatedFacultyData array) ...
    ];

    function populateFaculty(container, data, defaultTitle) {
        // ... (your existing populateFaculty function) ...
    }

    populateFaculty(associatedContainer, associatedFacultyData, 'Professor');

    // --- NEW CODE FOR OFFICE STAFF ---
    const officeStaffContainer = document.querySelector('#Office-staff .grid');

    const officeStaffData = [
        // Example data for office staff
        { name: 'Hitesh Verma', image: 'Images/OfficeStaff/Hitesh.jpg', title: 'Junior Assistant' },
        { name: 'Som Nath', image: 'Images/OfficeStaff/SomNath.png', title: 'Computer Operator' },
        { name: 'Amar', image: 'Images/OfficeStaff/Amar.jpg', title: 'MTS' },
        { name: 'Bhupendra Singh Bisht', image: 'Images/OfficeStaff/Bhupendra.png', title: 'Computer Operator' }
    ];

    function populateOfficeStaff(container, data) {
        let staffHTML = '';
        data.forEach(staff => {
            staffHTML += `
                <div class="bg-white rounded-xl shadow-lg p-6 text-center flex flex-col justify-between transform hover:scale-105 transition-transform duration-300">
                    <div>
                        <img class="w-32 h-32 rounded-full mx-auto mb-4 object-fill border-4 border-transparent hover:border-blue-200 transition-all" src="${staff.image}" alt="Photo of ${staff.name}">
                        <h3 class="text-xl font-bold text-blue-800">${staff.name}</h3>
                        <p class="text-md font-semibold text-blue-600 mt-1">${staff.title}</p>
                    </div>
                </div>
            `;
        });
        container.innerHTML = staffHTML;
    }

    // Call the new function to populate the office staff section
    if (officeStaffContainer) {
        populateOfficeStaff(officeStaffContainer, officeStaffData);
    }
    
});

// Newsletter 
// Script for tab functionality

        document.addEventListener('DOMContentLoaded', () => {
            const tabButtons = document.querySelectorAll('.tab-button');
            const tabContents = document.querySelectorAll('.tab-content');

            tabButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Deactivate all buttons and hide all content
                    tabButtons.forEach(btn => btn.classList.remove('active'));
                    tabContents.forEach(content => content.classList.add('hidden'));

                    // Activate the clicked button and show its corresponding content
                    button.classList.add('active');
                    const targetContentId = button.dataset.target;
                    const targetContent = document.getElementById(targetContentId);
                    if (targetContent) {
                        targetContent.classList.remove('hidden');
                    }
                });
            });
        });



// =====================================================================
// Smooth Scrolling for On-Page Anchor Links
// =====================================================================
document.addEventListener('DOMContentLoaded', function() {
    // Select all anchor links that start with '#'
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    for (let link of smoothScrollLinks) {
        link.addEventListener('click', function(e) {
            let targetId = this.getAttribute('href');
            
            // Make sure it's a valid on-page link and not just '#'
            if (targetId && targetId.length > 1) { 
                let targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Prevent the default jump-to-section behavior
                    e.preventDefault();

                    // Scroll smoothly to the target element
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    }
});


// Add this section to handle the click event for the People menu
if (mobilePeopleButton) {
    mobilePeopleButton.addEventListener('click', () => {
        mobilePeopleMenu.classList.toggle('hidden');
        mobilePeopleButton.querySelector('svg').classList.toggle('rotate-180');
    });
}

// ...

// Update the mobile menu close function to hide the new People menu as well
if (mobileMenu) {
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            // ... (keep existing code)
            if(mobilePeopleMenu) mobilePeopleMenu.classList.add('hidden');
            if(mobilePeopleButton) mobilePeopleButton.querySelector('svg').classList.remove('rotate-180');
        });
    });
}


    // =====================================================================
    // Visiting Faculty Page Logic
    // =====================================================================
    const currentFacultyContainer = document.getElementById('visiting-faculty-container');
    const pastFacultyContainer = document.getElementById('past-visiting-faculty-container');

    // Data for Current Honorary Visiting Professors
    const currentVisitingFacultyData = [
        { name: 'Amogh Rai', image: 'Images/Faculty/Visiting_Faculty/Amogh Rai.jpg', position: ' Executive Director at Sanrachna', bioUrl: 'Files/Visiting_faculty/amoghrai.pdf' },
        { name: 'Shamika Ravi', image: 'Images/Faculty/Visiting_Faculty/Shamika Ravi.jpg', position: 'Nonresident Senior Fellow, Brookings Institution Washington D.C', bioUrl: 'Files/Visiting_faculty/shamikaravi.pdf' },
        { name: 'Deepak Bagla', image: 'Images/Faculty/Visiting_Faculty/Deepak-Bagla.jpg', position: 'Managing Director and CEO', bioUrl: 'Files/Visiting_faculty/deepakbagla.pdf' },
        { name: 'Prabuddha Ganguli', image: 'Images/Faculty/Visiting_Faculty/Prabuddha Ganguli.jpg', position: 'Author', bioUrl: 'Files/Visiting_faculty/prabuddhaganguli.pdf' },
        { name: 'M. Sathyakumar', image: 'Images/Faculty/Visiting_Faculty/M Sathya.jpg', position: 'Professor', bioUrl: 'Files/Visiting_faculty/mskumar.pdf' },
        { name: 'Mudit Narain', image: 'Images/Faculty/Visiting_Faculty/Mudit Narain.jpg', position: 'Program Director at the Atal Innovation Mission, NITI Aayog', bioUrl: 'Files/Visiting_faculty/muditnarain.pdf' },
        { name: 'Pulki Mittal', image: 'Images/Faculty/Visiting_Faculty/Pulki Mittal.jpg', position: 'Professor', bioUrl: 'Files/Visiting_faculty/pulkimittal.pdf' },
        { name: 'Madhu Vij', image: 'Images/Faculty/Visiting_Faculty/madhuvij.jpg', position: 'Professor', bioUrl: '#' },
        { name: 'Kavita Sharma', image: 'Images/Faculty/Visiting_Faculty/kavitasharma.jpg', position: 'Professor', bioUrl: '#' },
    ];

    // Data for Past Honorary Visiting Faculty
    const pastVisitingFacultyData = [
        { name: 'Prof. P. K. Jain', image: 'Images/Faculty/Visiting_Faculty/Past/pk-jain.jpg', position: 'Department of Management Studies, IIT Delhi', bioUrl: '#' },
        { name: 'Dr.Prasad Kaipa', image: 'Images/Faculty/Visiting_Faculty/Past/prasad.jpeg', position: 'Academic Dean, Hindu Community Institute', bioUrl: '#' },
        { name: 'Prof. DR. GVR SHASTRI ', image: 'Images/Faculty/Visiting_Faculty/Past/gvrshashtri.jpg', position: 'Senior Economist & Author', bioUrl: '#' },
        { name: 'Prof. Vivek Singh', image: 'Images/Faculty/Visiting_Faculty/Past/viveksingh.jpeg', position: 'Intel Fellow and director of the Computational Imaging Department', bioUrl: '#' },
        { name: 'Prof. Unnat P. Pandit', image: 'Images/Faculty/Visiting_Faculty/Past/UnnatPandit_0.jpg', position: 'NITI Ayog', bioUrl: '#' },
        { name: 'Prof. Dr.Shailendra Singh', image: 'Images/Faculty/Visiting_Faculty/Past/prof-shailendra-singh.png', position: 'Director, IIM Ranchi', bioUrl: '#' },
        { name: 'Prof. Murali Subramanian', image: 'Images/Faculty/Visiting_Faculty/Past/murali.jpeg', position: 'Group Head of Core Serice, London Stock Exchange', bioUrl: '#' },
        { name: 'Prof. Dr Binod Khadria', image: 'Images/Faculty/Visiting_Faculty/Past/binodkhadria.jpg', position: 'Professor, Zakir Husain Centre for Educational Studies', bioUrl: '#' },
        { name: 'Prof. Shailendra Raj Mehta', image: 'Images/Faculty/Visiting_Faculty/Past/shailendrarajmehta.jpeg', position: 'President of MICA', bioUrl: '#' },
        { name: 'Prof. Sanjeev Sanyal', image: 'Images/Faculty/Visiting_Faculty/Past/sanjeevsanyal.jpg', position: 'Indian economist', bioUrl: '#' },
        { name: 'Prof. Dheeraj Sharma', image: 'Images/Faculty/Visiting_Faculty/Past/Dheeraj.png', position: 'Director of Indian Institute of Management Rohtak', bioUrl: '#' },
        { name: 'Prof. G Ramesh', image: 'Images/Faculty/Visiting_Faculty/Past/ramesh-g.jpeg', position: 'Centre for Public Policy (CPP) at the Indian Institute of Management Bangalore (IIMB)', bioUrl: '#' },
        { name: 'Prof. Gargi Kaul', image: 'Images/Faculty/Visiting_Faculty/Past/gargikaul.jpeg', position: '(ret.) Indian Audit and Account Services', bioUrl: '#' },
        { name: 'Prof. Parikshat Singh Manhas', image: 'Images/Faculty/Visiting_Faculty/Past/parikshatsingh.jpeg', position: 'Professor, Business School, Central University Jammu', bioUrl: '#' },
        // Add more past faculty data here
    ];

    function populateFaculty(container, data) {
        if (!container) return;
        let facultyHTML = '';
        data.forEach(faculty => {
            const bioLink = faculty.bioUrl && faculty.bioUrl !== '#' ?
                `<a href="${faculty.bioUrl}" target="_blank"></a>` : '';

            facultyHTML += `
                <div class="bg-white rounded-xl shadow-lg p-6 text-center flex flex-col justify-center transform hover:scale-105 transition-transform duration-300">
                    <a href="${faculty.bioUrl}" target="_blank">
                        <img class="w-32 h-32 rounded-full mx-auto mb-4 object-cover" src="${faculty.image}" alt="Photo of ${faculty.name}">
                    </a>
                    <h3 class="text-xl font-bold text-blue-800">${faculty.name}</h3>
                    <p class="text-md font-semibold text-blue-600 mt-1">${faculty.position}</p>
                    ${bioLink}
                </div>
            `;
        });
        container.innerHTML = facultyHTML;
    }

    // Populate both sections on page load
    populateFaculty(currentFacultyContainer, currentVisitingFacultyData);
    populateFaculty(pastFacultyContainer, pastVisitingFacultyData);


    // Former Dean
document.addEventListener('DOMContentLoaded', function() {
    // Data for Former Deans
    const formerDeansData = [
        { 
            name: 'Prof. Rajeev Sijariya', 
            image: 'Images/Faculty/Dean/Former/rajeevsijaria.jpg', 
            tenure: '2019 - 2023', 
            bioUrl: 'https://www.jnu.ac.in/content/rajeevsijariya' 
        },
   	 { 
            name: 'Prof. Arvind Kumar', 
            image: 'Images/Faculty/Dean/Former/KumarArvind.jpg', 
            tenure: '2019 - 2023', 
            bioUrl: 'https://www.jnu.ac.in/content/kumararvind', 
        }, 
        { 
            name: 'Prof. Unnat P. Pandit', 
            image: 'Images/Faculty/Dean/Former/UnnatPandit_0.jpg', 
            tenure: '2019 - 2023',  
            bioUrl: 'https://www.jnu.ac.in/content/unnatppandit', 
        },
        
	   { 
            name: 'Prof. Krishnendu Ghosh Dastidar', 
            image: 'Images/Faculty/Dean/Former/dastidar-photo.jpg', 
            tenure: '2019 - 2023',  
            bioUrl: 'https://www.jnu.ac.in/content/kgd0302', 
        },        	
    ];

    // Function to populate the Former Deans section
    function populateFormerDeans(containerId, data) {
        const container = document.getElementById(containerId);
        if (!container) return;

        let deansHTML = '';
        data.forEach(dean => {
            const bioLink = dean.bioUrl && dean.bioUrl !== '#' ?
                `<a href="${dean.bioUrl}" target="_blank"></a>` : '';
            
            deansHTML += `
                <div class="bg-white rounded-xl shadow-lg p-6 text-center flex flex-col justify-center transform hover:scale-105 transition-transform duration-300">
                    <a href="${dean.bioUrl || '#'}" target="_blank">
                        <img class="w-32 h-32 rounded-full mx-auto mb-4 object-fill border-4 border-transparent hover:border-blue-200 transition-all " src="${dean.image}" alt="Photo of ${dean.name}">
                    </a>
                    <h3 class="text-xl font-bold text-blue-800">${dean.name}</h3>
                    <p class="text-md font-semibold text-blue-600">${dean.tenure}</p>       
                    ${bioLink}
                </div>
            `;
        });
        container.innerHTML = deansHTML;
    }

    // Call the function to populate the former deans section
    populateFormerDeans('Former-Dean-container', formerDeansData);
});