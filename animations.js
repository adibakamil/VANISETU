/* VaaniSetu Animation Engine */
(function () {
  /* Enable the animation system (gated in CSS to avoid hidden content without JS) */
  if (document.documentElement) {
    document.documentElement.classList.add('animations-on');
  }
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Utility: respect reduced motion ── */
  function shouldAnimate() { return !prefersReduced; }

  /* ── Smooth easing for count-up ── */
  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

  function animateValue(el, target, suffix, prefix, duration) {
    if (!shouldAnimate()) {
      el.textContent = prefix + target + suffix;
      return;
    }
    var start = null;
    var step = function (ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      var val = Math.round(target * easeOutCubic(p));
      el.textContent = prefix + val + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  /* ── Count-up numbers from data-count attributes ── */
  function initCounts(scope) {
    if (!shouldAnimate()) return;
    var els = (scope || document).querySelectorAll('[data-count]');
    els.forEach(function (el) {
      if (el.__counted) return;
      var raw = el.getAttribute('data-count');
      var suffix = el.getAttribute('data-suffix') || '';
      var prefix = el.getAttribute('data-prefix') || '';
      var duration = parseInt(el.getAttribute('data-duration') || '1100', 10);
      var target = parseFloat(raw);
      el.__counted = true;
      el.__start = 0;
      var start = null;
      var step = function (ts) {
        if (!start) start = ts;
        var p = Math.min((ts - start) / duration, 1);
        var val = Math.round(target * easeOutCubic(p));
        el.textContent = prefix + val + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }

  /* ── Keep overflow values (e.g. 24/24, 18/24) intact ── */
  function initCombos(scope) {
    (scope || document).querySelectorAll('[data-count-combo]').forEach(function (el) {
      if (el.__counted) return;
      el.__counted = true;
      var raw = el.getAttribute('data-count-combo');
      var parts = raw.split('/');
      var top = parseInt(parts[0], 10);
      var bottom = parts[1];
      var duration = parseInt(el.getAttribute('data-duration') || '1100', 10);
      var start = null;
      var step = function (ts) {
        if (!start) start = ts;
        var p = Math.min((ts - start) / duration, 1);
        el.textContent = Math.round(top * easeOutCubic(p)) + '/' + bottom;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }

  /* ── Number count-up on visibility ── */
  function initCountObserver() {
    var els = document.querySelectorAll('[data-count], [data-count-combo]');
    if (!els.length || !shouldAnimate()) {
      initCounts(); initCombos(); return;
    }
    if (!('IntersectionObserver' in window)) {
      initCounts(); initCombos(); return;
    }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          if (en.target.hasAttribute('data-count')) initCounts(en.target.parentNode);
          else initCombos(en.target.parentNode);
          obs.unobserve(en.target);
        }
      });
    }, { threshold: 0.2 });
    els.forEach(function (el) { obs.observe(el); });
  }

  /* ── Progress bars: animate width from 0 ── */
  function initProgressBars() {
    var bars = document.querySelectorAll('[data-progress]');
    if (!bars.length) return;
    if (!shouldAnimate() || !('IntersectionObserver' in window)) {
      bars.forEach(function (b) {
        b.style.width = b.getAttribute('data-progress') + '%';
      });
      return;
    }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.style.width = en.target.getAttribute('data-progress') + '%';
          en.target.classList.add('anim-progress-fill');
          obs.unobserve(en.target);
        }
      });
    }, { threshold: 0.2 });
    bars.forEach(function (b) { obs.observe(b); });
  }

  /* ── SVG chart line + dots animation ── */
  function initCharts() {
    if (!shouldAnimate()) return;
    var charts = document.querySelectorAll('[data-chart]');
    charts.forEach(function (container) {
      var polylines = container.querySelectorAll('polyline');
      function draw() {
        polylines.forEach(function (pl) {
          var len = pl.getTotalLength();
          pl.style.strokeDasharray = len;
          pl.style.strokeDashoffset = len;
          requestAnimationFrame(function () {
            pl.style.transition = 'stroke-dashoffset 1.4s cubic-bezier(0.22,0.61,0.36,1)';
            pl.style.strokeDashoffset = '0';
          });
        });
        container.querySelectorAll('circle').forEach(function (c, i) {
          c.style.opacity = '0';
          c.style.transition = 'opacity 0.3s ease ' + (0.15 * i + 0.6) + 's';
          requestAnimationFrame(function () { c.style.opacity = '1'; });
        });
      }
      if (!('IntersectionObserver' in window)) { draw(); return; }
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { draw(); obs.disconnect(); }
        });
      }, { threshold: 0.3 });
      obs.observe(container);
    });
  }

  /* ── Donut chart draw ── */
  function initDonuts() {
    if (!shouldAnimate()) return;
    var donuts = document.querySelectorAll('[data-donut]');
    donuts.forEach(function (svg) {
      var paths = svg.querySelectorAll('path');
      function draw() {
        paths.forEach(function (p) {
          var dash = p.getAttribute('stroke-dasharray');
          var base = parseFloat(dash.split(',')[0]);
          var circumference = 100;
          p.style.strokeDasharray = '0, ' + circumference;
          requestAnimationFrame(function () {
            p.style.transition = 'stroke-dasharray 1.2s cubic-bezier(0.22,0.61,0.36,1)';
            p.style.strokeDasharray = dash;
          });
        });
      }
      if (!('IntersectionObserver' in window)) { draw(); return; }
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { draw(); obs.disconnect(); }
        });
      }, { threshold: 0.4 });
      obs.observe(svg);
    });
  }

  /* ── Scroll reveal ── */
  function initReveals() {
    var els = document.querySelectorAll('[data-reveal]');
    if (!els.length) return;
    if (!shouldAnimate() || !('IntersectionObserver' in window)) {
      els.forEach(function (e) { e.classList.add('revealed'); });
      return;
    }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          var delay = en.target.getAttribute('data-delay');
          if (delay) en.target.style.transitionDelay = delay + 'ms';
          en.target.classList.add('revealed');
          obs.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(function (e) { obs.observe(e); });
  }

  /* ── Dashboard load stagger ── */
  function initDashboardLoad() {
    var items = document.querySelectorAll('.dash-load');
    if (!items.length) return;
    items.forEach(function (el, i) {
      setTimeout(function () {
        el.classList.add('dash-in');
      }, 60 + i * 70);
    });
  }

  /* ── Landing hero entrance ── */
  function initHeroEnter() {
    var els = document.querySelectorAll('.hero-enter');
    els.forEach(function (el, i) {
      setTimeout(function () {
        el.classList.add('h-in');
      }, 100 + i * 140);
    });
  }

  /* ── Offline sync toggle ── */
  function initOfflineSync() {
    var btn = document.querySelector('[data-sync-btn]');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var badge = btn.closest('.offline-card, [data-offline]');
      var status = btn.getAttribute('data-status');
      var next = status === 'offline' ? 'sync' : 'offline';
      btn.setAttribute('data-status', next);
      if (status === 'offline') {
        btn.innerHTML = '<span class="ai-dots"><span></span><span></span><span></span></span> Syncing...';
        btn.disabled = true;
        setTimeout(function () {
          btn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Synced';
          btn.className = btn.className.replace(/bg-white/g, 'bg-status-green').replace(/text-brand-red/g, 'text-white');
          btn.disabled = false;
          btn.style.borderColor = '#10B981';
        }, 1200);
      } else {
        btn.innerHTML = '<i class="fa-solid fa-wifi"></i> Sync Now';
        if (badge) badge.style.borderColor = '#E2E8F0';
      }
    });
  }

  /* ── Alert click expand toggle ── */
  function initAlertToggle() {
    document.querySelectorAll('[data-alert]').forEach(function (a) {
      a.addEventListener('click', function () {
        var detail = a.querySelector('[data-alert-detail]');
        if (detail) detail.classList.toggle('hidden');
      });
    });
  }

  /* ── Spin icon on demand ── */
  function initToastAndIcons() {
    document.querySelectorAll('[data-spin-on-click]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var icon = btn.querySelector('i') || btn;
        icon.classList.add('rotating');
        setTimeout(function () { icon.classList.remove('rotating'); }, 700);
      });
    });
  }

  /* ── Init all on DOM ready ── */
  function init() {
    initReveals();
    initProgressBars();
    initCountObserver();
    initCharts();
    initDonuts();
    initDashboardLoad();
    initHeroEnter();
    initOfflineSync();
    initAlertToggle();
    initToastAndIcons();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
