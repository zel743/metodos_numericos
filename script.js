function supportsBackdropFilter() {
  return CSS.supports('backdrop-filter', 'blur(1px)') || 
         CSS.supports('-webkit-backdrop-filter', 'blur(1px)');
}

document.addEventListener('DOMContentLoaded', function() {
  if (!supportsBackdropFilter()) {
    document.documentElement.classList.add('no-glass-support');
    console.log('Backdrop-filter no soportado, aplicando fallback');
  }
});