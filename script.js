// UtilHub — shared behavior
(function () {
  "use strict";
  // dynamic year
  document.querySelectorAll("#ano").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
  // reveal on scroll (respects reduced motion via CSS)
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  }
})();
