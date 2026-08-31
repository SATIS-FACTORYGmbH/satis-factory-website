// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // "Projekte" dropdown: click-toggle (works for touch and desktop alike)
  document.querySelectorAll('.nav-dropdown-toggle').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var dropdown = btn.closest('.nav-dropdown');
      var isOpen = dropdown.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  });
  document.addEventListener('click', function (e) {
    document.querySelectorAll('.nav-dropdown.open').forEach(function (dropdown) {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
        dropdown.querySelector('.nav-dropdown-toggle').setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Click-to-load YouTube embed (no cookies/tracking until user consents)
  document.querySelectorAll('[data-video-consent]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var frame = btn.closest('.video-frame');
      var videoId = frame.getAttribute('data-video-id');
      var iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + videoId + '?autoplay=1&rel=0';
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
      iframe.setAttribute('allowfullscreen', '');
      iframe.title = 'SATIS-FACTORY Rundflugvideo';
      frame.querySelector('.video-consent').remove();
      frame.appendChild(iframe);
    });
  });

  // Team grid: keep pinned cards first, shuffle the rest on every page load
  var teamGrid = document.querySelector('.team-grid');
  if (teamGrid) {
    var shuffleable = Array.prototype.slice.call(teamGrid.querySelectorAll('.team-card:not(.pinned)'));
    for (var i = shuffleable.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = shuffleable[i];
      shuffleable[i] = shuffleable[j];
      shuffleable[j] = tmp;
    }
    shuffleable.forEach(function (card) { teamGrid.appendChild(card); });
  }

  // Simple lightbox for galleries
  var lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    var galleryLinks = Array.prototype.slice.call(document.querySelectorAll('.gallery a'));
    var lbImg = lightbox.querySelector('img');
    var current = 0;

    function show(index) {
      current = (index + galleryLinks.length) % galleryLinks.length;
      lbImg.src = galleryLinks[current].getAttribute('href');
      lbImg.alt = galleryLinks[current].querySelector('img').alt || '';
    }

    galleryLinks.forEach(function (link, i) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        show(i);
        lightbox.classList.add('open');
      });
    });

    lightbox.querySelector('.lightbox-close').addEventListener('click', function () {
      lightbox.classList.remove('open');
    });
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) lightbox.classList.remove('open');
    });
    lightbox.querySelector('.lightbox-prev').addEventListener('click', function () { show(current - 1); });
    lightbox.querySelector('.lightbox-next').addEventListener('click', function () { show(current + 1); });
    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') lightbox.classList.remove('open');
      if (e.key === 'ArrowRight') show(current + 1);
      if (e.key === 'ArrowLeft') show(current - 1);
    });
  }
});
