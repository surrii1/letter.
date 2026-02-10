// COUNTDOWN
const weddingDate = new Date("Feb 11, 2026 08:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const gap = weddingDate - now;

  const days = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((gap % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}, 1000);


// WISHES
document.getElementById("wishForm").addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  const newWish = document.createElement("p");
  newWish.innerHTML = `<strong>${name}:</strong> ${message}`;

  document.getElementById("wishList").appendChild(newWish);

  this.reset();
});
