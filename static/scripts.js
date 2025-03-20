document.addEventListener("DOMContentLoaded", () => {
  // Menu toggle logic
  const menuToggle = document.getElementById("menuIcon");
  const popupMenu = document.getElementById("popupMenu");

  if (menuToggle && popupMenu) {
    menuToggle.addEventListener("click", () => {
      popupMenu.classList.toggle("show-menu");
    });

    document.addEventListener("click", (e) => {
      if (!menuToggle.contains(e.target)) {
        popupMenu.classList.remove("show-menu");
      }
    });
  }

  // Scroll animation logic
  const paragraph = document.getElementById('scroll-paragraph');
  if (paragraph) {
    let scrolledLeft = false;
    let scrolledHorizontal = false;
    let scrolledUp = false;

    window.addEventListener('scroll', () => {
      const rect = paragraph.getBoundingClientRect();

      if (rect.top < window.innerHeight * 0.25 && !scrolledLeft) {
        paragraph.classList.add('left-scroll');
        scrolledLeft = true;
      }

      if (scrolledLeft && !scrolledHorizontal && rect.top < window.innerHeight * 0.1) {
        paragraph.classList.remove('left-scroll');
        paragraph.classList.add('horizontal-scroll');
        scrolledHorizontal = true;
      }

      if (scrolledHorizontal && !scrolledUp && rect.top < window.innerHeight * 0.05) {
        paragraph.classList.remove('horizontal-scroll');
        paragraph.classList.add('up-scroll');
        scrolledUp = true;
      }
    });
  }
});
