// Interacción simple para las tarjetas SOP
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.pasa-card').forEach(function (card) {
    card.addEventListener('click', function () {
      card.classList.toggle('activa');
    });
  });
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (ev) {
      var target = document.querySelector(a.getAttribute('href'));
      if (target) { target.scrollIntoView({ behavior: 'smooth', block: 'start' }); ev.preventDefault(); }
    });
  });
});
