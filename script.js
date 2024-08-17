var pages = document.getElementsByClassName("page");
const playPauseButton = document.getElementById("playPauseButton");
const music = document.getElementById("backgroundMusic");

// Set z-index for pages
for (var i = 0; i < pages.length; i++) {
  var page = pages[i];
  if (i % 2 === 0) {
    page.style.zIndex = pages.length - i;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  for (var i = 0; i < pages.length; i++) {
    pages[i].pageNum = i + 1;
    pages[i].onclick = function () {
      if (this.pageNum % 2 === 0) {
        this.classList.remove("flipped");
        this.previousElementSibling.classList.remove("flipped");
      } else {
        this.classList.add("flipped");
        this.nextElementSibling.classList.add("flipped");
      }

      // Add or remove showButton class based on the page number
      if (this.pageNum >= 7 && this.pageNum < 9) {
        playPauseButton.classList.add("showButton");
      } else {
        playPauseButton.classList.remove("showButton");
      }
    };
  }
});

// Function to toggle play/pause
function togglePlayPause() {
  if (music.paused) {
    music.play();
    playPauseButton.textContent = "Pause";
  } else {
    music.pause();
    playPauseButton.textContent = "Play";
  }
}
