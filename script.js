// Año dinámico
document.getElementById('year').textContent = new Date().getFullYear();

// Cambiar tema
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
