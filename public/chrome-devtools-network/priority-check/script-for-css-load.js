requestAnimationFrame(function(e) {
  e = document.createElement('link');
  e.rel = 'stylesheet';
  e.href = 'style.css?via=body,script-for-css-load.js';
  document.head.appendChild(e);
});
