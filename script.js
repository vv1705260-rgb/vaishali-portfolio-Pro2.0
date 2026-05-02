console.log("Portfolio loaded 🚀");
function showSection(section) {
  const sections = document.querySelectorAll(".main section");

  sections.forEach(sec => {
    sec.classList.add("hidden");
  });

  document.querySelector("." + section).classList.remove("hidden");
}
// Section switch
function showSection(section) {
  const sections = document.querySelectorAll(".main section");
  sections.forEach(sec => sec.classList.add("hidden"));
  document.querySelector("." + section).classList.remove("hidden");
}

// Typing effect
const text = ["Python Developer", "Web Developer", "Building Real Projects"];
let i = 0, j = 0;
let current = "";
let isDeleting = false;

function type() {
  current = text[i];
  document.getElementById("typing").textContent = current.substring(0, j);

  if (!isDeleting && j < current.length) {
    j++;
    setTimeout(type, 100);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % text.length;
    setTimeout(type, 1000);
  }
}

type();

// Dark/light toggle
function toggleTheme() {
  document.body.classList.toggle("light");
}
window.onload = () => {
  document.getElementById("loader").style.display = "none";
};
