// MENU MOBILE
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
  const aberto = nav.classList.toggle("active");
  toggle.setAttribute("aria-expanded", aberto);
});


// FECHAR MENU AO CLICAR EM LINK (MOBILE)
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    toggle.setAttribute("aria-expanded", "false");
  });
});
