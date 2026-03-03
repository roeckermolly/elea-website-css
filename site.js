/* === ELEA INSTITUTE — Shared Site JS === */
(function () {
  var btn  = document.getElementById('hamburger');
  var menu = document.getElementById('mobile-nav');
  if (!btn || !menu) return;

  // Always start hidden regardless of CSS load order
  menu.style.display = 'none';

  function open() {
    menu.style.display = 'block';
    btn.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  }
  function close() {
    menu.style.display = 'none';
    btn.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }
  function toggle() { menu.style.display === 'none' ? open() : close(); }

  btn.addEventListener('click', function (e) { e.stopPropagation(); toggle(); });

  // Close on any link click
  menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', close); });

  // Close when tapping outside
  document.addEventListener('click', function (e) {
    if (!btn.contains(e.target) && !menu.contains(e.target)) close();
  });
})();
