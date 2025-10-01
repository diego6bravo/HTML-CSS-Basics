(function () {
  // Bloquear click derecho
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  }, { passive: false });

  // Bloquear selección con teclado (Ctrl/Cmd + ...), F12, etc.
  document.addEventListener('keydown', function (e) {
    var key = (e.key || '').toLowerCase();
    var ctrl = e.ctrlKey || e.metaKey; // ctrl en Windows/Linux, meta (Cmd) en Mac
    var shift = e.shiftKey;

    // Teclas individuales que queremos bloquear (F12)
    if (e.keyCode === 123) { // F12
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    // Combinaciones comunes a bloquear
    if (ctrl && (key === 's' || key === 'u' || key === 'p' || key === 'c' || key === 'x' || key === 'a')) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    // Ctrl/Cmd + Shift + I / J / C
    if (ctrl && shift && (key === 'i' || key === 'j' || key === 'c')) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    // Ctrl+Shift+S (guardar como)
    if (ctrl && shift && key === 's') {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
  }, { passive: false });

  // Bloquear acciones de copiar / cortar / pegar
  document.addEventListener('copy', function (e) {
    e.preventDefault();
  }, { passive: false });

  document.addEventListener('cut', function (e) {
    e.preventDefault();
  }, { passive: false });

  document.addEventListener('paste', function (e) {
    e.preventDefault();
  }, { passive: false });

  console.log('Protección UI activa: click derecho, atajos, copiar/pegar bloqueados (sin excepciones).');
})();

