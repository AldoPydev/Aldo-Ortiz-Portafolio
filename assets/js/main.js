/*=============== SHOW SIDEBAR ===============*/
const showMenu = (navId, toggleId) => {
  const nav = document.getElementById(navId),
    toggle = document.getElementById(toggleId);

  toggle.addEventListener("click", () => {
    nav.classList.toggle("show-menu");
    toggle.classList.toggle("show-icon");
  });
};
showMenu("nav-menu", "nav-toggle");

/*=============== SHOW SECTION ===============*/
document.addEventListener("DOMContentLoaded", () => {
  const enlaces = document.querySelectorAll(".nav__link");
  const secciones = document.querySelectorAll("section");

  function mostrarSeccion(id) {
    secciones.forEach(sec => sec.classList.remove("activo"));
    const seleccionada = document.getElementById(id);
    if (seleccionada) {
      seleccionada.classList.add("activo");
      // Actualizar el hash en la URL
      window.location.hash = id;
    }
  }

  // Asignar eventos a cada enlace
  enlaces.forEach(enlace => {
    enlace.addEventListener("click", e => {
      e.preventDefault();
      const id = enlace.getAttribute("data-seccion");
      mostrarSeccion(id);
    });
  });

  // Al cargar la página, revisar si hay hash en la URL
const hash = window.location.hash.replace("#", "");
if (hash) {
  mostrarSeccion(hash);
} else {
  mostrarSeccion("home"); // por defecto Home
}



});

/*=============== LINK ACTIVE ===============
const sidebarLink = document.querySelectorAll(".sidebar__list a");

function linkColor() {
  sidebarLink.forEach((l) => l.classList.remove("active-link"));
  this.classList.add("active-link");
}

sidebarLink.forEach((l) => l.addEventListener("click", linkColor));
*/
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
