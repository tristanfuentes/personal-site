(() => {
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");
  const navLinks = Array.from(document.querySelectorAll(".nav-links a"));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const setTheme = (theme) => {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    if (toggle) {
      const isLight = theme === "light";
      toggle.textContent = isLight ? "Dark mode" : "Light mode";
      toggle.setAttribute("aria-pressed", String(isLight));
      toggle.setAttribute("aria-label", isLight ? "Toggle dark mode" : "Toggle light mode");
    }
  };

  const savedTheme = localStorage.getItem("theme");
  setTheme(savedTheme === "light" ? "light" : "dark");

  if (toggle) {
    toggle.addEventListener("click", () => {
      setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });
  }

  if (!reduceMotion) {
    navLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        const href = link.getAttribute("href");
        if (!href || !href.startsWith("#")) return;
        const target = document.querySelector(href);
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", href);
      });
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      });
    },
    { rootMargin: "-45% 0px -45% 0px", threshold: 0.01 }
  );

  document.querySelectorAll("main section[id]").forEach((section) => observer.observe(section));
})();
