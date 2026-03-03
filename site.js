/* === ELEA INSTITUTE — Shared Site JS === */
(function () {
  var btn  = document.getElementById('hamburger');
  var menu = document.getElementById('mobile-nav');
  if (!btn || !menu) return;

  function open()  { menu.classList.add('open');  btn.classList.add('open');  btn.setAttribute('aria-expanded', 'true');  }
  function close() { menu.classList.remove('open'); btn.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
  function toggle() { menu.classList.contains('open') ? close() : open(); }

  btn.addEventListener('click', function (e) { e.stopPropagation(); toggle(); });

  // Close on any link click (navigates away)
  menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', close); });

  // Close when tapping outside
  document.addEventListener('click', function (e) {
    if (!btn.contains(e.target) && !menu.contains(e.target)) close();
  });
})();
