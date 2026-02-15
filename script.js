function toggleTheme() {
  document.body.classList.toggle("dark");

  const icon = document.querySelector(".theme-switch i");
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
}
