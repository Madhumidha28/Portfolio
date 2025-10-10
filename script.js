// Smooth scroll
document.querySelectorAll("nav ul li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Mobile menu toggle auto close
const checkBox = document.getElementById("check");
document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", () => {
    checkBox.checked = false;
  });
});

// Hire Me button scroll to contact
document.querySelector(".hire_me").addEventListener("click", () => {
  document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
});

document.querySelectorAll(".project-card").forEach((card) => {
  const buttons = card.querySelectorAll(".prj_btn, .prj_btn-outline");

  // Card hover → change all button styles
  card.addEventListener("mouseenter", () => {
    buttons.forEach((btn) => {
      btn.style.background = "#fff";
      btn.style.color = "var(--primary-color)";
      btn.style.border = "2px solid var(--primary-color)";
    });
  });

  // Card leave → reset button styles
  card.addEventListener("mouseleave", () => {
    buttons.forEach((btn) => {
      btn.style.background = "var(--primary-color)";
      btn.style.color = "#fff";
      btn.style.border = "none";
    });
  });
});

const words = ["Web Developer", "Frontend Developer", "Full Stack Developer"];
let i = 0;
let j = 0;
let dir = 1;
let out = "";
const el = document.querySelector(".typing");

const type = () => {
  const w = words[i];

  if (dir === 1) {
    out = w.slice(0, ++j);
    if (j > w.length) {
      dir = -1;
      setTimeout(type, 1000); // pause before deleting
      return;
    }
  } else {
    out = w.slice(0, --j);
    if (j === 0) {
      dir = 1;
      i = (i + 1) % words.length;
    }
  }

  el.textContent = out;
  setTimeout(type, 120);
};

setTimeout(() => type(), 500); // small delay before start
