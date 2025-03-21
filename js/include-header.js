document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("header-container");
  if (!headerContainer) return;

  const headerHTML = `
        <header>
            <nav class="navbar">
                <div class="hamburger">
                    <i class="fas fa-bars"></i>
                </div>
                
                <div class="logo">
                    <a href="index.html">eRBe</a>
                </div>

                <ul class="nav-links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="courses.html">Courses</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

                <div class="header-right">
                    <div class="search-container">
                        <form class="search-form">
                            <input type="text" class="search-input" placeholder="Search courses...">
                            <button type="submit" class="search-button">
                                <i class="fas fa-search"></i>
                            </button>
                        </form>
                    </div>

                    <div class="auth-buttons">
                        <a href="sign-in.html" class="btn btn-outline">Sign In</a>
                        <a href="sign-up.html" class="btn btn-primary">Sign Up</a>
                    </div>
                </div>

                <div class="mobile-search-trigger">
                    <i class="fas fa-search"></i>
                </div>
            </nav>
        </header>

        <div class="search-overlay">
            <form class="search-form">
                <button type="submit" class="search-button">
                    <i class="fas fa-search"></i>
                </button>
                <input type="text" class="search-input" placeholder="Search for anything">
                <button type="button" class="search-close">
                    <i class="fas fa-times"></i>
                </button>
            </form>
        </div>
    `;

  headerContainer.innerHTML = headerHTML;

  // Mobile menu toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const mobileSearchTrigger = document.querySelector(".mobile-search-trigger");
  const searchContainer = document.querySelector(".search-container");
  const searchOverlay = document.querySelector(".search-overlay");
  const searchClose = document.querySelector(".search-close");
  const searchInput = document.querySelector(".search-overlay .search-input");

  // Mobile menu toggle
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  // Search functionality
  function openSearch() {
    if (window.innerWidth <= 1024) {
      searchOverlay.classList.add("active");
      searchInput.focus();
      document.body.style.overflow = "hidden";
    }
  }

  function closeSearch() {
    searchOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  mobileSearchTrigger.addEventListener("click", openSearch);
  searchContainer.addEventListener("click", (e) => {
    if (window.innerWidth > 1024) {
      e.stopPropagation(); // Prevent opening overlay on desktop
    } else {
      openSearch();
    }
  });
  searchClose.addEventListener("click", closeSearch);

  // Close search on form submit
  const searchForm = document.querySelector(".search-overlay .search-form");
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    closeSearch();
  });

  // Close search on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && searchOverlay.classList.contains("active")) {
      closeSearch();
    }
  });

  // Close search when clicking outside
  searchOverlay.addEventListener("click", (e) => {
    if (e.target === searchOverlay) {
      closeSearch();
    }
  });

  // Handle window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
      navbar.classList.remove("search-active");
    }
  });
});
