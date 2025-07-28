
document.addEventListener("DOMContentLoaded", () => {
  const animatedItems = [
    ...document.querySelectorAll(".main-content h1"),
    ...document.querySelectorAll(".main-content p"),
    ...document.querySelectorAll(".action-buttons-bottom a"),
    ...document.querySelectorAll(".nav a"),
    ...document.querySelectorAll(".footer-nav a"),
    ...document.querySelectorAll(".footer-bottom p"),
    ...document.querySelectorAll(".credits")
  ];

  animatedItems.forEach((el, i) => {
    el.classList.add("fade-in");
    el.style.animationDelay = (i * 0.15 + 0.3).toFixed(2) + "s";
  });
});
