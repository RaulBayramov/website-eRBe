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
    `;

  headerContainer.innerHTML = headerHTML;

  // Mobile menu toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const mobileSearchTrigger = document.querySelector(".mobile-search-trigger");
  const searchContainer = document.querySelector(".search-container");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      if (searchContainer.classList.contains("active")) {
        searchContainer.classList.remove("active");
      }
    });
  }

  if (mobileSearchTrigger && searchContainer) {
    mobileSearchTrigger.addEventListener("click", () => {
      searchContainer.classList.toggle("active");
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
      }
    });
  }

  // Close mobile menu and search when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav-links") && !e.target.closest(".hamburger")) {
      navLinks?.classList.remove("active");
    }

    if (
      !e.target.closest(".search-container") &&
      !e.target.closest(".mobile-search-trigger")
    ) {
      searchContainer?.classList.remove("active");
    }
  });
});
