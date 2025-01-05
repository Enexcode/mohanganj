// Select the collapse element and hamburger elements
const collapseElement = document.querySelector('#navbarSupportedContent');
const hamburgerButton = document.querySelector('.navbar-toggler');
const hamburgerIcon = document.querySelector('.hamburger');

// Initialize the Bootstrap Collapse
const bsCollapse = new bootstrap.Collapse(collapseElement, {
  toggle: false // Start with the navbar collapsed
});

// Toggle the navbar and hamburger icon
hamburgerButton.addEventListener("click", () => {
  // Toggle 'is-active' class for hamburger icon
  hamburgerIcon.classList.toggle("is-active");

  // Check if navbar is currently showing, then toggle its visibility
  if (collapseElement.classList.contains('show')) {
    // Hide the navbar and collapse it
    bsCollapse.hide();
  } else {
    // Show the navbar
    bsCollapse.show();
  }
});

// Close the navbar when clicking on any link (mobile view)
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      // Close the navbar when a link is clicked
      bsCollapse.hide();

      // Reset hamburger icon to normal
      hamburgerIcon.classList.remove("is-active");
    });
  });
});




// ================ Banner Slider ( Home ) 
$('.banner_main_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    dots: true,
    // fade: true,
  });


  // Bottom Menu Active Js 
  const list = document.querySelectorAll(".nav__item");
list.forEach((item) => {
  item.addEventListener("click", () => {
    list.forEach((item) => item.classList.remove("active"));
    item.classList.add("active");
  });
});
