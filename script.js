// === Шарики ===
function createBalloons() {
  const container = document.querySelector(".balloons");
  for (let i = 0; i < 20; i++) {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.animationDuration = 5 + Math.random() * 5 + "s";
    balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
    container.appendChild(balloon);
  }
}

// === Конфетти ===
function createConfetti() {
  const container = document.querySelector(".confetti-container");
  for (let i = 0; i < 150; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
    confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
    confetti.style.opacity = Math.random();
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    container.appendChild(confetti);
  }
}

// === Звёзды на фоне ===
function createStars() {
  const starsContainer = document.querySelector(".stars");
  for (let i = 0; i < 200; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.width = star.style.height = Math.random() * 3 + "px";
    star.style.background = "white";
    star.style.opacity = Math.random();
    starsContainer.appendChild(star);
  }
}

// === Фейерверки ===
function createFireworks() {
  const container = document.querySelector(".fireworks");
  setInterval(() => {
    const firework = document.createElement("div");
    firework.classList.add("firework");
    firework.style.left = Math.random() * 100 + "vw";
    firework.style.top = Math.random() * 50 + "vh";

    container.appendChild(firework);

    setTimeout(() => {
      firework.remove();
    }, 1500);
  }, 1000);
}

// === Музыка с кнопкой ===
function setupMusicButton() {
  const musicBtn = document.getElementById("musicBtn");
  const music = document.getElementById("birthdayMusic");
  let isPlaying = false;

  musicBtn.addEventListener("click", function () {
    if (!isPlaying) {
      music.play();
      musicBtn.textContent = "🔇 Выключить музыку";
      musicBtn.style.background = "linear-gradient(45deg, #27ae60, #2ecc71)";
      isPlaying = true;
    } else {
      music.pause();
      music.currentTime = 0; // сброс
      musicBtn.textContent = "🎵 Включить музыку";
      musicBtn.style.background = "linear-gradient(45deg, #ff6b6b, #ee5a52)";
      isPlaying = false;
    }
  });
}

// === Запуск ===
createStars();
createBalloons();
createConfetti();
createFireworks();
setupMusicButton();
