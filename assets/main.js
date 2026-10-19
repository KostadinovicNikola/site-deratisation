// Menu mobile
const burger = document.querySelector('.burger');
const menu = document.getElementById('menu');
if (burger && menu) {
  burger.addEventListener('click', () => {
    const ouvert = menu.classList.toggle('ouvert');
    burger.setAttribute('aria-expanded', ouvert);
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('ouvert');
    burger.setAttribute('aria-expanded', false);
  }));
}
// Année du pied de page
const annee = document.getElementById('annee');
if (annee) annee.textContent = new Date().getFullYear();
