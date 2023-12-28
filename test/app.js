const navFunc = () => {
  const mobileMenuIcon = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");

  mobileMenuIcon.addEventListener("click", function () {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  });
};

function toggleMobileMenu() {
  const mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.classList.toggle("show");
}
