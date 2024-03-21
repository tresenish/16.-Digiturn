const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}
function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}


document.addEventListener('DOMContentLoaded', function() {
    const dropdownButton = document.getElementById('dropdown-button');
    const navMenu = document.getElementById('nav-ul-id');

    // Toggle the 'is-visible' class on click
    dropdownButton.addEventListener('click', function() {
        navMenu.classList.toggle('is-visible');
    });
});


window.addEventListener('scroll', function() {
  const polygons = document.querySelectorAll('.pol.section3x');
  const scrollTop = document.documentElement.scrollTop;
  polygons.forEach((polygon, index) => {

    const speedMultiplier = (index + 1) * 3;
    const rotation = (scrollTop / speedMultiplier) % 360;
    polygon.style.transform = `rotate(${rotation}deg)`;
  });
});
