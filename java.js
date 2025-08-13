// I used CoPilot to help me make the background color change when hovering over the nav bar and also to make the spotlight follow the mouse cursor.

function randomColor() {
  const hue = 200 + Math.floor(Math.random() * 40); // 200–240 for blue hues
  const sat = 40 + Math.floor(Math.random() * 30);   // 30–60% saturation for muted
  const light = 50 + Math.floor(Math.random() * 15); // 80–95% lightness for pastel
  return `hsl(${hue},${sat}%,${light}%)`;
}

const originalColor = randomColor();
document.body.style.background = originalColor;
document.body.dataset.originalColor = originalColor;

const nav = document.querySelector('.tabs');
nav.addEventListener('mouseover', function() {
  document.body.style.background = randomColor();
});
nav.addEventListener('mouseout', function() {
  document.body.style.background = document.body.dataset.originalColor;
});

  const spotlight = document.getElementById('spotlight');

   document.addEventListener('mousemove', (e) => {
  spotlight.style.left = `${e.clientX}px`;
  spotlight.style.top = `${e.clientY + 20}px`;
});

    document.addEventListener('mouseleave', () => {
      spotlight.style.display = 'none';
    });

    document.addEventListener('mouseenter', () => {
      spotlight.style.display = 'block';
    });

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('questionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('formMessage').textContent = "Thank you! Your question has been submitted.";
    this.reset();
  });
});

function toggleDropdown(id) {
  const content = document.getElementById(id);
  content.classList.toggle('show');
}

/*page4*/
// I used CoPilot to ensure the background music automatically played on-load or if blocked, on-click and also to stop it when the hacker pop-up opened.

function toggleDropdown(id) {
  const content = document.getElementById(id);
  content.classList.toggle('show');
  // Show hacked modal and play sound if dropdown 4 is clicked
  if (id === 'dropdownContent4') {
    showHackedModal();
  }
}

function showHackedModal() {
  document.getElementById('hackedModal').style.display = 'flex';
  const audio = document.getElementById('hackedAudio');
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
  // Pause ambient music
  const ambient = document.getElementById('ambientAudio');
  if (ambient) {
    ambient.pause();
  }
}

function closeHackedModal() {
  document.getElementById('hackedModal').style.display = 'none';
  const audio = document.getElementById('hackedAudio');
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
  // Resume ambient music
  const ambient = document.getElementById('ambientAudio');
  if (ambient) {
    ambient.play().catch(()=>{});
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const ambient = document.getElementById('ambientAudio');
  const video = document.querySelector('video');
  if (video && ambient) {
    video.addEventListener('play', () => {
      ambient.pause();
    });
    video.addEventListener('pause', () => {
      ambient.play().catch(()=>{});
    });
    video.addEventListener('ended', () => {
      ambient.play().catch(()=>{});
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const ambient = document.getElementById('ambientAudio');
  if (ambient) {
    ambient.volume = 0.5;
    // Try to play immediately
    ambient.play().catch(() => {
      // If blocked, play on first user interaction
      const resumeAudio = () => {
        ambient.play().catch(()=>{});
        document.removeEventListener('click', resumeAudio);
        document.removeEventListener('keydown', resumeAudio);
      };
      document.addEventListener('click', resumeAudio);
      document.addEventListener('keydown', resumeAudio);
    });
  }
});
