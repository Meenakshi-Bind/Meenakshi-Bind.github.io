// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle (remembers choice, defaults to system preference)
const root = document.documentElement;
const saved = (() => { try { return localStorage.getItem("theme"); } catch { return null; } })();
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
root.dataset.theme = saved || (prefersDark ? "dark" : "light");

document.querySelector(".theme-btn").addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch {}
});

// Mobile menu
const menuBtn = document.querySelector(".menu-btn");
const links = document.getElementById("nav-links");
menuBtn.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
links.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => links.classList.remove("open"))
);

// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// Highlight active nav link
const sections = document.querySelectorAll("section[id]");
const navLinks = links.querySelectorAll("a");
const spy = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });
sections.forEach(s => spy.observe(s));
