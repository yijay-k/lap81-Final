document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  // Avoid adding toggle twice
  if (nav.querySelector('.nav-toggle')) return;

  const navLinks = nav.querySelector('.nav-links');

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'nav-toggle';
  btn.setAttribute('aria-label', 'Toggle navigation');
  btn.setAttribute('aria-expanded', 'false');
  btn.innerHTML = '<span class="hamburger"><span></span><span></span><span></span></span>';

  nav.insertBefore(btn, nav.querySelector('.nav-actions'));

  const overlay = document.createElement('div');
  overlay.className = 'nav-overlay';
  document.body.appendChild(overlay);

  function openNav() {
    nav.classList.add('nav-open');
    btn.setAttribute('aria-expanded', 'true');
    overlay.classList.add('visible');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    nav.classList.remove('nav-open');
    btn.setAttribute('aria-expanded', 'false');
    overlay.classList.remove('visible');
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', () => {
    if (nav.classList.contains('nav-open')) closeNav(); else openNav();
  });

  overlay.addEventListener('click', closeNav);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
  });

  if (navLinks) {
    navLinks.addEventListener('click', (e) => {
      const target = e.target;
      if (target && target.tagName === 'A' && window.innerWidth <= 768) {
        closeNav();
      }
    });
  }
});