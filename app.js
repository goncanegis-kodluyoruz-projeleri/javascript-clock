// Get visitor name
const userName = document.getElementById('myName');

function greeting() {
  let person = prompt('Adınızı giriniz', 'adınız').trim();
  if (person != null) {
    if (person == '') {
      person = 'yabancı';
      userName.innerHTML = person;
    } else {
      userName.innerHTML = person;
    }
  }
}

greeting();

// Get and show time
const clock = document.querySelector('#myClock');

function showTime() {
  const days = [
    'Pazar',
    'Pazartesi',
    'Salı',
    'Çarşamba',
    'Perşembe',
    'Cuma',
    'Cumartesi',
  ];

  const now = new Date();
  const day = days[now.getDay()];
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  clock.innerHTML = `${hours}:${minutes}:${seconds} ${day}`;
  console.log(clock);
}

setInterval(showTime, 1000);
