// Get DOM elements
const courseVideo = document.getElementById("courseVideo");
const playlistItems = document.querySelectorAll(".playlist-item");

// Function to update video source
function updateVideo(videoId) {
  courseVideo.src = `https://www.youtube.com/embed/${videoId}`;
}

// Function to update active playlist item
function updateActiveItem(clickedItem) {
  playlistItems.forEach((item) => item.classList.remove("active"));
  clickedItem.classList.add("active");
}

// Add click event listeners to playlist items
playlistItems.forEach((item) => {
  item.addEventListener("click", () => {
    const videoId = item.getAttribute("data-video");
    updateVideo(videoId);
    updateActiveItem(item);
  });
});

// Save video progress
let lastVideoTime = 0;
courseVideo.addEventListener("timeupdate", () => {
  lastVideoTime = courseVideo.currentTime;
  localStorage.setItem("videoProgress", lastVideoTime);
});

// Restore video progress when page loads
window.addEventListener("load", () => {
  const savedProgress = localStorage.getItem("videoProgress");
  if (savedProgress) {
    courseVideo.currentTime = savedProgress;
  }
});

// Handle mobile responsiveness for video player
function adjustVideoHeight() {
  const width = window.innerWidth;
  if (width <= 480) {
    courseVideo.style.height = "200px";
  } else if (width <= 768) {
    courseVideo.style.height = "300px";
  } else {
    courseVideo.style.height = "500px";
  }
}

// Call on page load and window resize
adjustVideoHeight();
window.addEventListener("resize", adjustVideoHeight);
