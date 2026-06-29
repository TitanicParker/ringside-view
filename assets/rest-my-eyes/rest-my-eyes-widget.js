(function () {
  'use strict';

  var runtimeUrl = 'assets/rest-my-eyes/theorem_zero_canonical_substrate_v1_0_native_visual_runtime.html';
  var style = document.createElement('style');
  style.textContent = [
    '.rest-eyes-sticker{position:fixed;right:clamp(14px,3vw,28px);bottom:clamp(14px,3vw,28px);z-index:80;border:1px solid rgba(255,255,255,.32);border-radius:999px;background:rgba(18,24,34,.78);color:#fff7d9;box-shadow:0 18px 48px rgba(0,0,0,.28);backdrop-filter:blur(16px);cursor:pointer;font:800 .82rem/1.1 system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;letter-spacing:.02em;padding:.85rem 1rem;transition:transform 160ms ease,background 160ms ease,border-color 160ms ease}',
    '.rest-eyes-sticker:hover,.rest-eyes-sticker:focus-visible{transform:translateY(-2px);background:rgba(28,37,52,.9);border-color:rgba(255,224,138,.72);outline:none}',
    '.nav-links a[data-rest-eyes-open]{color:#fff7d9;border-color:rgba(255,224,138,.4)}',
    '.rest-eyes-overlay{position:fixed;inset:0;z-index:120;display:none;place-items:center;padding:clamp(12px,3vw,30px);background:rgba(2,4,9,.88);backdrop-filter:blur(12px)}',
    '.rest-eyes-overlay.is-open{display:grid}',
    '.rest-eyes-dialog{width:min(1120px,100%);height:min(820px,100%);border:1px solid rgba(255,255,255,.18);border-radius:26px;overflow:hidden;background:#05080d;box-shadow:0 30px 120px rgba(0,0,0,.55);display:grid;grid-template-rows:auto 1fr}',
    '.rest-eyes-bar{display:flex;gap:.75rem;align-items:center;justify-content:space-between;padding:.75rem .85rem .75rem 1rem;border-bottom:1px solid rgba(255,255,255,.12);background:rgba(5,8,13,.94);color:rgba(235,250,246,.88)}',
    '.rest-eyes-bar strong{font-size:.9rem}.rest-eyes-bar span{color:rgba(235,250,246,.58);font-size:.8rem}',
    '.rest-eyes-close{border:1px solid rgba(255,255,255,.24);border-radius:999px;background:rgba(255,255,255,.08);color:#fff;cursor:pointer;font:800 .78rem/1 system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;padding:.7rem .85rem}',
    '.rest-eyes-close:hover,.rest-eyes-close:focus-visible{border-color:rgba(255,224,138,.78);outline:none}',
    '.rest-eyes-frame{width:100%;height:100%;border:0;display:block;background:#05080d}',
    'body.rest-eyes-open{overflow:hidden}',
    '@media(max-width:720px){.rest-eyes-sticker{left:50%;right:auto;transform:translateX(-50%);bottom:12px}.rest-eyes-sticker:hover,.rest-eyes-sticker:focus-visible{transform:translateX(-50%) translateY(-2px)}.rest-eyes-dialog{border-radius:18px}.rest-eyes-bar{align-items:flex-start}.rest-eyes-bar span{display:none}}'
  ].join('\n');
  document.head.appendChild(style);

  var overlay = document.createElement('section');
  overlay.className = 'rest-eyes-overlay';
  overlay.id = 'rest-eyes-overlay';
  overlay.hidden = true;
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Rest my eyes visual runtime');

  overlay.innerHTML = [
    '<div class="rest-eyes-dialog">',
    '  <div class="rest-eyes-bar">',
    '    <div><strong>Rest my eyes</strong> <span>Canonical substrate visual runtime</span></div>',
    '    <button class="rest-eyes-close" type="button">Return to reading</button>',
    '  </div>',
    '  <iframe class="rest-eyes-frame" src="' + runtimeUrl + '" title="Theorem Zero canonical substrate visual runtime" loading="lazy"></iframe>',
    '</div>'
  ].join('');

  document.body.appendChild(overlay);

  var triggers = Array.prototype.slice.call(document.querySelectorAll('[data-rest-eyes-open]'));
  var fallbackTrigger = null;

  if (!triggers.length) {
    fallbackTrigger = document.createElement('button');
    fallbackTrigger.className = 'rest-eyes-sticker';
    fallbackTrigger.type = 'button';
    fallbackTrigger.textContent = 'Rest my eyes';
    fallbackTrigger.setAttribute('aria-haspopup', 'dialog');
    fallbackTrigger.setAttribute('aria-controls', 'rest-eyes-overlay');
    document.body.appendChild(fallbackTrigger);
    triggers.push(fallbackTrigger);
  }

  var close = overlay.querySelector('.rest-eyes-close');
  var lastFocus = null;

  function openRestEyes(event) {
    if (event) event.preventDefault();
    lastFocus = document.activeElement;
    overlay.hidden = false;
    overlay.classList.add('is-open');
    document.body.classList.add('rest-eyes-open');
    close.focus();
  }

  function closeRestEyes() {
    overlay.classList.remove('is-open');
    overlay.hidden = true;
    document.body.classList.remove('rest-eyes-open');
    if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
  }

  triggers.forEach(function (trigger) {
    trigger.setAttribute('aria-haspopup', 'dialog');
    trigger.setAttribute('aria-controls', 'rest-eyes-overlay');
    trigger.addEventListener('click', openRestEyes);
  });
  close.addEventListener('click', closeRestEyes);
  overlay.addEventListener('click', function (event) {
    if (event.target === overlay) closeRestEyes();
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !overlay.hidden) closeRestEyes();
  });
})();
