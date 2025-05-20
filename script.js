function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let session = 'AM';

  if (hours >= 12) {
    session = 'PM';
  }

  hours = hours % 12;
  hours = hours ? hours : 12; // 0 becomes 12

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  const timeString = `${hours}:${minutes}:${seconds} ${session}`;
  document.getElementById('clock').textContent = timeString;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock();

// Toggle Dark/Light Mode
const modeToggle = document.getElementById('modeToggle');
modeToggle.addEventListener('click', () => {
  const body = document.body;
  body.classList.toggle('light');
  body.classList.toggle('dark');

  if (body.classList.contains('light')) {
    modeToggle.textContent = 'Switch to Dark Mode';
  } else {
    modeToggle.textContent = 'Switch to Light Mode';
  }
});
