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

document.addEventListener('DOMContentLoaded', function() {
    // This adds the fade-in class to the body when a page is loaded
    document.body.classList.add('page-transition-in');

    // Select all internal links on the page that don't have a special attribute
    const pageLinks = document.querySelectorAll('a[href]:not([target="_blank"]):not([href^="#"]):not([href="mailto:"]):not([href="tel:"])');

    pageLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the browser from navigating immediately
            const destination = this.href;

            // Apply the fade-out class to the current page
            document.body.classList.add('page-transition-out');
            document.body.classList.remove('page-transition-in');

            // Wait for the animation to finish, then navigate
            setTimeout(function() {
                window.location.href = destination;
            }, 500); // The timeout duration should match the CSS animation duration (0.5s)
        });
    });
});
