function toggleChat() {
  const modal = document.getElementById('chatModal');
  modal.classList.toggle('activo');
}
// Reinicio automático del carrusel en móvil
const carrusel = document.querySelector('.carrusel-equipo');

if (carrusel) {
  let timerScroll;
  carrusel.addEventListener('scroll', () => {
    clearTimeout(timerScroll);
    timerScroll = setTimeout(() => {
      // Si llega cerca del final del scroll horizontal
      const maxScroll = carrusel.scrollWidth - carrusel.clientWidth;
      if (carrusel.scrollLeft >= maxScroll - 10) {
        // Regresa al inicio con animación suave
        carrusel.scrollTo({ left: 0, behavior: 'smooth' });
      }
    }, 2500); // Espera 2.5 segundos de inactividad al final para regresar
  });
}
