// scripts.js

// Smooth scroll for nav links with animation
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');

  for (let link of links) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetID = this.getAttribute("href").substring(1);
      const target = document.getElementById(targetID);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

        // Add animation class
        target.classList.add("animate-highlight");

        // Remove the class after animation completes
        setTimeout(() => {
          target.classList.remove("animate-highlight");
        }, 1000); // match with CSS animation duration
      }
    });
  }
});
