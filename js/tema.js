const toggleDarkMode = document.getElementById('btn-tema');
const icono = document.getElementById('icono-tema');
const temaSistema = window.matchMedia('(prefers-color-scheme: dark').matches ? 'dark' : 'light';

document.documentElement.setAttribute('data-theme', temaSistema);

if (localStorage.getItem('dark-mode') === 'enabled') {
  document.body.classList.add('dark-mode');
  icono.classList.remove('fa-moon');
  icono.classList.add('fa-sun');
} else {
  icono.classList.remove('fa-sun');
  icono.classList.add('fa-moon');
}

toggleDarkMode.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('dark-mode', 'enabled');
    icono.classList.remove('fa-moon');
    icono.classList.add('fa-sun');
  } else {
    localStorage.setItem('dark-mode', 'disabled');
    icono.classList.remove('fa-sun');
    icono.classList.add('fa-moon');
  }
});