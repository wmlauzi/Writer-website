// Navigation
function nav(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
}

// Mobile menu
const ham = document.getElementById("ham");
const mob = document.getElementById("mob");

ham.addEventListener("click", () => {
  ham.classList.toggle("open");
  mob.classList.toggle("open");
});

function closeMob() {
  ham.classList.remove("open");
  mob.classList.remove("open");
}

// Scroll shadow
window.addEventListener("scroll", () => {
  const nav = document.getElementById("mainNav");
  nav.classList.toggle("scrolled", window.scrollY > 10);
});