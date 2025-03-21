// Mobile Search Functionality
const mobileSearchTrigger = document.querySelector(".mobile-search-trigger");
const searchContainer = document.querySelector(".search-container");
const searchClose = document.querySelector(".search-close");
const searchInput = document.querySelector(".search-input");

// Toggle mobile search
mobileSearchTrigger.addEventListener("click", () => {
  searchContainer.classList.add("active");
  searchInput.focus();
});

// Close mobile search
searchClose.addEventListener("click", () => {
  searchContainer.classList.remove("active");
  searchInput.value = "";
});

// View Toggle Functionality
const viewButtons = document.querySelectorAll(".view-btn");
const coursesContainer = document.querySelector(".courses-container");

viewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    viewButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to clicked button
    button.classList.add("active");

    // Toggle grid/list view
    if (button.dataset.view === "list") {
      coursesContainer.classList.add("list-view");
    } else {
      coursesContainer.classList.remove("list-view");
    }
  });
});

// Filter Functionality
const filters = document.querySelectorAll(".filter-select");

filters.forEach((filter) => {
  filter.addEventListener("change", updateCourses);
});

function updateCourses() {
  const category = document.getElementById("category").value;
  const level = document.getElementById("level").value;
  const duration = document.getElementById("duration").value;

  // Here you would typically make an API call or filter the courses
  // For now, we'll just log the filter values
  console.log("Filters:", { category, level, duration });
}

// Search Functionality
const searchForm = document.querySelector(".search-form");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = searchInput.value.trim();

  if (searchTerm) {
    // Here you would typically make an API call to search courses
    console.log("Searching for:", searchTerm);
  }
});

// Pagination Functionality
const paginationButtons = document.querySelectorAll(".pagination-btn");

paginationButtons.forEach((button) => {
  if (!button.disabled) {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      paginationButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      button.classList.add("active");

      // Here you would typically make an API call to get the next page
      console.log("Loading page:", button.textContent);
    });
  }
});

// Close search when clicking outside
document.addEventListener("click", (e) => {
  if (
    !searchContainer.contains(e.target) &&
    !mobileSearchTrigger.contains(e.target) &&
    window.innerWidth <= 768
  ) {
    searchContainer.classList.remove("active");
  }
});

// Handle window resize
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    searchContainer.classList.remove("active");
  }
});
