document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  // Form demo
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (message) message.textContent = "✓ Cảm ơn bạn! Yêu cầu đã được ghi nhận.";
    form.reset();
  });

  // Submenu: click/tap on mobile; hover remains available on desktop.
  document.querySelectorAll(".submenu-toggle").forEach(toggle => {
    toggle.addEventListener("click", (e) => {
      if (window.innerWidth < 992) {
        e.preventDefault();
        e.stopPropagation();
        const submenu = toggle.nextElementSibling;
        submenu?.classList.toggle("show");
      }
    });
  });

  // Close Bootstrap navbar after selecting a normal link on mobile.
  document.querySelectorAll("#mainNav a:not(.dropdown-toggle):not(.submenu-toggle)").forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 992) {
        const nav = document.getElementById("mainNav");
        const collapse = bootstrap.Collapse.getInstance(nav);
        collapse?.hide();
      }
    });
  });
});