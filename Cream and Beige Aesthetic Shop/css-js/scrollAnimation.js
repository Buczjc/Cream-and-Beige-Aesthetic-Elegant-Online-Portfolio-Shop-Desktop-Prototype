//Sidebar Functions

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 2500,
  delay: 400,
});

//Navigation Animation

ScrollReveal().reveal(".border", {
  delay: 400,
  origin: "left",
});

ScrollReveal().reveal(".logo", {
  delay: 200,
  origin: "left",
});

ScrollReveal().reveal(".hideOnMobile", {
  delay: 200,
  origin: "right",
});

ScrollReveal().reveal(".menu-button", {
  delay: 200,
  origin: "right",
});

//Home Page Animation
ScrollReveal().reveal(".home-banner-block", {
  delay: 500,
  origin: "left",
});

ScrollReveal().reveal(".main-home-content", {
  delay: 700,
  origin: "left",
});

ScrollReveal().reveal(".img-home-content", {
  delay: 800,
  origin: "right",
});

//About Page Animation
ScrollReveal().reveal(".about-page-img-block", {
  delay: 500,
  origin: "left",
});

ScrollReveal().reveal(".about-page-content-header", {
  delay: 600,
  origin: "right",
});

ScrollReveal().reveal(".about-page-main-content", {
  delay: 600,
  origin: "top",
});

ScrollReveal().reveal(".btn-position-about-page", {
  delay: 600,
  origin: "bottom",
});

//Course Page Animation
ScrollReveal().reveal(".course-img-sample-1", {
  delay: 500,
  origin: "left",
});

ScrollReveal().reveal(".course-img-sample-2", {
  delay: 500,
  origin: "right",
});

ScrollReveal().reveal(".content-header", {
  delay: 600,
  origin: "bottom",
});

ScrollReveal().reveal(".content-header-2", {
  delay: 600,
  origin: "bottom",
});

ScrollReveal().reveal(".content-main", {
  delay: 700,
  origin: "right",
});

ScrollReveal().reveal(".content-main-2", {
  delay: 700,
  origin: "left",
});

ScrollReveal().reveal(".btn-course-page-2", {
  delay: 700,
  origin: "left",
});

ScrollReveal().reveal(".btn-course-page", {
  delay: 700,
  origin: "right",
});

//Shop Page
ScrollReveal().reveal(".shop-course-header", {
  delay: 400,
  origin: "top",
});

ScrollReveal().reveal(".shop-course-item-container", {
  delay: 400,
  origin: "bottom",
});

ScrollReveal().reveal(".contact-header", {
  delay: 400,
  origin: "left",
});

ScrollReveal().reveal(".contact-form", {
  delay: 400,
  origin: "right",
});
