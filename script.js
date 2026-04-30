const mascot = document.querySelector(".mascot");

if (mascot) {
  let t = 0;
  setInterval(() => {
    t += 0.05;
    mascot.style.transform = `translateY(${Math.sin(t) * 6}px)`;
  }, 30);
}

function generateStars(count) {
  let stars = [];
  for (let i = 0; i < count; i++) {
    let x = Math.random() * 2000;
    let y = Math.random() * 2000;
    stars.push(`${x}px ${y}px white`);
  }
  return stars.join(",");
}

// Apply stars safely
const stars1 = document.getElementById("stars");
const stars2 = document.getElementById("stars2");
const stars3 = document.getElementById("stars3");

if (stars1) stars1.style.boxShadow = generateStars(700);
if (stars2) stars2.style.boxShadow = generateStars(200);
if (stars3) stars3.style.boxShadow = generateStars(100);

function copyCA() {
  const text = document.getElementById("ca-text").innerText;
  const btn = document.querySelector(".copy-btn");

  navigator.clipboard.writeText(text).then(() => {
    btn.innerText = "COPIED ✓";
    btn.style.boxShadow = "0 0 20px rgba(255,180,120,0.8)";

    setTimeout(() => {
      btn.innerText = "COPY";
      btn.style.boxShadow = "";
    }, 2000);
  });
}

function scrollToStory() {
  document.getElementById("story").scrollIntoView({
    behavior: "smooth",
  });
}
