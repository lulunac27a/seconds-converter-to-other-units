const secondsText = document.getElementById("seconds"); //seconds text box
const outputText = document.getElementById("output"); //output text area
function convertSeconds() {
  //function to convert seconds to weeks, days, hours, minutes, and seconds (other units)
  const seconds = parseInt(secondsText.value, 10); //parse number of seconds value
  const secondsRemaining = seconds % 60; //seconds remaining of minute
  const minutes = Math.floor(seconds / 60); //total number of minutes
  const minutesRemaining = minutes % 60; //minutes remaining of hour
  const hours = Math.floor(minutes / 60); //total number of hours
  const hoursRemaining = hours % 24; //hours remaining of day
  const days = Math.floor(hours / 24); //total number of days
  const daysRemaining = days % 7; //days remaining of week
  const weeks = Math.floor(days / 7); //total number of weeks
  outputText.textContent = `${weeks} weeks, ${daysRemaining} days, ${hoursRemaining} hours, ${minutesRemaining} minutes, ${secondsRemaining} seconds\n(${weeks} weeks or ${days} days or ${hours} hours or ${minutes} minutes or ${seconds} seconds)`; //update output text with all time units
}
