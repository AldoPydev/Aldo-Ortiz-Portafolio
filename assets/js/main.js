/*=============== SHOW SIDEBAR ===============*/
document.addEventListener("DOMContentLoaded", () => {
  const navMenu = document.getElementById("nav-menu");
  const navToggle = document.getElementById("nav-toggle");
  const enlaces = document.querySelectorAll(".nav__link");
  const secciones = document.querySelectorAll("section");

  // 1. Lógica para Abrir / Cerrar con el botón Toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      console.log("Toggle clickeado"); // Debug
      navMenu.classList.toggle("show-menu");
      navToggle.classList.toggle("show-icon");
    });
  }

  // 2. Función para mostrar secciones
  function mostrarSeccion(id) {
    secciones.forEach((sec) => sec.classList.remove("activo"));
    const seleccionada = document.getElementById(id);
    if (seleccionada) {
      seleccionada.classList.add("activo");
      window.location.hash = id;
    }
  }

  // 3. Lógica para los enlaces (Navegar y CERRAR)
  enlaces.forEach((enlace) => {
    enlace.addEventListener("click", (e) => {
      e.preventDefault();
      const id = enlace.getAttribute("data-seccion");

      console.log("Enlace clickeado, seccion:", id); // Debug

      mostrarSeccion(id);

      // Cierre forzado del menú al hacer clic
      if (navMenu && navToggle) {
        navMenu.classList.remove("show-menu");
        navToggle.classList.remove("show-icon");
        console.log("Clases removidas"); // Debug
      }
    });
  });

  // Manejo de hash inicial
  const hash = window.location.hash.replace("#", "");
  mostrarSeccion(hash || "home");
});
/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-fill";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme)
    ? "ri-moon-clear-fill"
    : "ri-sun-fill";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme,
  );
  themeButton.classList[
    selectedIcon === "ri-moon-clear-fill" ? "add" : "remove"
  ](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
