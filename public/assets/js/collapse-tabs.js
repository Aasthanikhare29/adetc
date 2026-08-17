// Minimal vanilla replacement for the only Bootstrap JS features this site uses:
// collapse/accordion (data-bs-toggle="collapse") and tabs (data-bs-toggle="tab").
// Reads the existing data-bs-* markup — no HTML changes needed. Toggles the same
// classes Bootstrap's CSS keys off (.show / .collapsed / .active), honors
// data-bs-parent (single-open accordions), and re-fires shown/hidden.bs.collapse
// through jQuery so script.js's service-video play/pause keeps working.
// ponytail: no height-slide animation (CSS show/hide only); add .collapsing
// transitions here if the slide is ever wanted back.
(function () {
  function byId(sel) { return sel && document.querySelector(sel); }

  function setButtons(panel, collapsed) {
    var btns = document.querySelectorAll('[data-bs-target="#' + panel.id + '"]');
    for (var i = 0; i < btns.length; i++) {
      btns[i].classList.toggle('collapsed', collapsed);
      btns[i].setAttribute('aria-expanded', String(!collapsed));
    }
  }

  function fire(el, name) {
    if (window.jQuery) window.jQuery(el).trigger(name);
    else el.dispatchEvent(new CustomEvent(name, { bubbles: true }));
  }

  function toggleCollapse(btn, target) {
    var isOpen = target.classList.contains('show');
    var parentSel = target.getAttribute('data-bs-parent');

    if (!isOpen && parentSel) {
      var parent = byId(parentSel);
      if (parent) {
        var open = parent.querySelectorAll('.accordion-collapse.show, .collapse.show');
        for (var i = 0; i < open.length; i++) {
          if (open[i] !== target) {
            open[i].classList.remove('show');
            setButtons(open[i], true);
            fire(open[i], 'hidden.bs.collapse');
          }
        }
      }
    }

    target.classList.toggle('show', !isOpen);
    setButtons(target, isOpen);
    fire(target, isOpen ? 'hidden.bs.collapse' : 'shown.bs.collapse');
  }

  function activateTab(btn, target) {
    var list = btn.closest('[role="tablist"], .nav');
    if (list) {
      var tabs = list.querySelectorAll('[data-bs-toggle="tab"]');
      for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
        tabs[i].setAttribute('aria-selected', 'false');
      }
    }
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');

    var content = target.closest('.tab-content');
    if (content) {
      var panes = content.querySelectorAll('.tab-pane');
      for (var j = 0; j < panes.length; j++) panes[j].classList.remove('show', 'active');
    }
    target.classList.add('show', 'active');
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-bs-toggle="collapse"], [data-bs-toggle="tab"]');
    if (!btn) return;
    var target = byId(btn.getAttribute('data-bs-target'));
    if (!target) return;
    e.preventDefault();
    if (btn.getAttribute('data-bs-toggle') === 'collapse') toggleCollapse(btn, target);
    else activateTab(btn, target);
  });
})();
