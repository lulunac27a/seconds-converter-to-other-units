const secondsText = document.getElementById("seconds");
const outputText = document.getElementById("output");
function convertSeconds() {
  const seconds = parseInt(secondsText.value, 10);
  const secondsRemaining = seconds % 60;
  const minutes = Math.floor(seconds / 60);
  const minutesRemaining = minutes % 60;
  const hours = Math.floor(minutes / 60);
  const hoursRemaining = hours % 24;
  const days = Math.floor(hours / 24);
  const daysRemaining = days % 7;
  const weeks = Math.floor(days / 7);
  outputText.textContent = `${weeks} weeks, ${daysRemaining} days, ${hoursRemaining} hours, ${minutesRemaining} minutes, ${secondsRemaining} seconds\n(${weeks} weeks or ${days} days or ${hours} hours or ${minutes} minutes or ${seconds} seconds)`;
}
