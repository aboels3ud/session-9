// ===== script.js - Portfolio Main Script (Sessions 05-09) =====

// ===== 1. TIME GREETING (Session 06 & 07) =====
function greetByTime() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "Good Morning ☀️";
  if (hour >= 12 && hour < 17) return "Good Afternoon 🌤️";
  if (hour >= 17 && hour < 21) return "Good Evening 🌇";
  return "Good Night 🌙";
}

// ===== 2. RENDER HERO (Session 05) =====
function renderHero() {
  document.getElementById("hero-greeting").textContent = greetByTime();
  document.getElementById("hero-name").textContent = portfolioData.name;
  document.getElementById("hero-title").textContent = portfolioData.title;
  document.getElementById("hero-about").textContent = portfolioData.about;
}

// ===== 3. RENDER ABOUT =====
function renderAbout() {
  document.getElementById("about-text").textContent = portfolioData.about;
}

// ===== 4. RENDER SKILLS (Session 08) =====
function renderSkills() {
  const grid = document.getElementById("skills-grid");
  grid.innerHTML = ""; // clear

  portfolioData.skills.forEach(function (skill) {
    const card = document.createElement("div");
    card.classList.add("skill-card");
    card.textContent = skill;
    grid.appendChild(card);
  });
}

// ===== 5. RENDER PROJECTS (Session 08 & 09) =====
function renderProjects() {
  const grid = document.getElementById("projects-grid");
  grid.innerHTML = "";

  portfolioData.projects.forEach(function (project) {
    const techHTML = project.tech
      .map((t) => `<span class="tech-tag">${t}</span>`)
      .join("");

    const card = document.createElement("div");
    card.classList.add("project-card");
    card.innerHTML = `
      <div class="project-header">${project.emoji}</div>
      <div class="project-body">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tech-tags">${techHTML}</div>
        <div class="project-links">
          <a href="${project.github}" class="project-link github" target="_blank">GitHub</a>
          <a href="${project.live}" class="project-link live" target="_blank">Live Demo</a>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ===== 6. RENDER CONTACT =====
function renderContact() {
  const container = document.getElementById("contact-links");
  const { email, linkedin, github } = portfolioData.contact;

  container.innerHTML = `
    <a href="mailto:${email}" class="contact-link">📧 ${email}</a>
    <a href="${linkedin}" class="contact-link" target="_blank">💼 LinkedIn</a>
    <a href="${github}" class="contact-link" target="_blank">🐙 GitHub</a>
  `;
}

// ===== 7. RENDER FOOTER =====
function renderFooter() {
  document.getElementById("footer-text").textContent =
    `© ${new Date().getFullYear()} ${portfolioData.name}. All rights reserved.`;
}

// ===== 8. BURGER MENU (Session 09) =====
function initBurgerMenu() {
  const burgerBtn = document.getElementById("burger-btn");
  const navMenu = document.getElementById("nav-menu");

  burgerBtn.addEventListener("click", function () {
    navMenu.classList.toggle("open");
    burgerBtn.classList.toggle("active");
  });

  // Close on nav link click
  document.querySelectorAll(".nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
      navMenu.classList.remove("open");
      burgerBtn.classList.remove("active");
    });
  });

  // Close on outside click
  document.addEventListener("click", function (e) {
    if (!burgerBtn.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove("open");
      burgerBtn.classList.remove("active");
    }
  });
}

// ===== 9. INIT ALL =====
window.addEventListener("DOMContentLoaded", function () {
  renderHero();
  renderAbout();
  renderSkills();
  renderProjects();
  renderContact();
  renderFooter();
  initBurgerMenu();

  console.log("Portfolio loaded! 🚀");
  console.log("Data:", portfolioData);
});
