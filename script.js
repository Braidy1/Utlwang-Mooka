document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("modeToggle");
  toggle.addEventListener("click", () => {
    document.documentElement.dataset.theme =
      document.documentElement.dataset.theme === "light" ? "dark" : "light";
  });
});