// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const header = document.querySelector("header");

// Toggle mobile menu
function toggleMobileMenu() {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
}

// Close mobile menu when clicking outside
function handleClickOutside(event) {
  if (
    !hamburger.contains(event.target) &&
    !navLinks.contains(event.target) &&
    navLinks.classList.contains("active")
  ) {
    toggleMobileMenu();
  }
}

// Close mobile menu when clicking on a link
function handleLinkClick() {
  if (navLinks.classList.contains("active")) {
    toggleMobileMenu();
  }
}

// Event Listeners
hamburger.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleMobileMenu();
});

document.addEventListener("click", handleClickOutside);

// Add click event to all navigation links
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", handleLinkClick);
});

// Handle header visibility on scroll
let lastScroll = 0;
const scrollThreshold = 50;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= scrollThreshold) {
    header.style.transform = "translateY(0)";
    return;
  }

  if (currentScroll > lastScroll && !navLinks.classList.contains("active")) {
    // Scrolling down & menu is closed
    header.style.transform = "translateY(-100%)";
  } else {
    // Scrolling up or menu is open
    header.style.transform = "translateY(0)";
  }

  lastScroll = currentScroll;
});

// Prevent header from hiding when mobile menu is open
const headerObserver = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.target.classList.contains("active")) {
      header.style.transform = "translateY(0)";
    }
  });
});

headerObserver.observe(navLinks, {
  attributes: true,
  attributeFilter: ["class"],
});

// Handle window resize
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    if (window.innerWidth > 768 && navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
    }
  }, 250);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add animation to course cards on scroll
const courseCards = document.querySelectorAll(".course-card");

const observerOptions = {
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

courseCards.forEach((card) => {
  observer.observe(card);
});

// Search Bar Functionality
const searchContainer = document.querySelector(".search-container");
const searchInput = document.querySelector(".search-input");

// Expand search bar on focus
searchInput.addEventListener("focus", () => {
  searchContainer.classList.add("expanded");
});

// Contract search bar on blur, but only if it's empty
searchInput.addEventListener("blur", () => {
  if (!searchInput.value.trim()) {
    searchContainer.classList.remove("expanded");
  }
});

// Keep search bar expanded if there's text in it
searchInput.addEventListener("input", () => {
  if (searchInput.value.trim()) {
    searchContainer.classList.add("expanded");
  }
});
