// ---------- Google Analytics (nur mit Einwilligung) ----------
// TODO: Sobald eine GA4-Property existiert, hier die echte Measurement-ID eintragen (Format "G-XXXXXXXXXX").
var GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
var GA_CONSENT_KEY = 'sf_analytics_consent';

function sfLoadGoogleAnalytics() {
  if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID.indexOf('XXXX') !== -1) return;
  if (document.getElementById('sf-ga-script')) return;
  var script = document.createElement('script');
  script.id = 'sf-ga-script';
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
  document.head.appendChild(script);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true });
}

function sfGetConsent() {
  try { return window.localStorage.getItem(GA_CONSENT_KEY); } catch (e) { return null; }
}
function sfSetConsent(value) {
  try { window.localStorage.setItem(GA_CONSENT_KEY, value); } catch (e) { /* localStorage nicht verfügbar */ }
}

function sfShowCookieBanner() {
  if (document.querySelector('.cookie-banner')) return;
  var banner = document.createElement('div');
  banner.className = 'cookie-banner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-label', 'Cookie-Einstellungen');
  banner.innerHTML =
    '<p>Wir würden gerne mit Ihrer Einwilligung Google Analytics einsetzen, um zu verstehen, wie unsere Website genutzt wird. Details dazu in unserer <a href="datenschutz.html">Datenschutzerklärung</a>.</p>' +
    '<div class="actions">' +
      '<button type="button" class="btn btn-outline" data-cookie-decline>Ablehnen</button>' +
      '<button type="button" class="btn" data-cookie-accept>Akzeptieren</button>' +
    '</div>';
  document.body.appendChild(banner);
  banner.querySelector('[data-cookie-accept]').addEventListener('click', function () {
    sfSetConsent('granted');
    banner.remove();
    sfLoadGoogleAnalytics();
  });
  banner.querySelector('[data-cookie-decline]').addEventListener('click', function () {
    sfSetConsent('denied');
    banner.remove();
  });
}

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var consent = sfGetConsent();
  if (consent === 'granted') {
    sfLoadGoogleAnalytics();
  } else if (consent !== 'denied') {
    sfShowCookieBanner();
  }

  // Footer-Link, um die Cookie-Wahl jederzeit zu ändern
  var footerBottom = document.querySelector('.footer-bottom');
  if (footerBottom) {
    var settingsLink = document.createElement('a');
    settingsLink.href = '#';
    settingsLink.textContent = 'Cookie-Einstellungen';
    settingsLink.addEventListener('click', function (e) {
      e.preventDefault();
      sfShowCookieBanner();
    });
    var lastSpan = footerBottom.querySelector('span:last-child');
    if (lastSpan) {
      lastSpan.appendChild(document.createTextNode(' · '));
      lastSpan.appendChild(settingsLink);
    }
  }

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
