const websocket = new WebSocket('wss://echo.websocket.org/');
const btnSend = document.querySelector('.send');
const btnGeoLocation = document.querySelector('.geo-location');
const chatWindow = document.querySelector('.chat-window');

function writeToScreen(message) {
  let pre = document.createElement("p");
  pre.innerHTML = message;
  chatWindow.appendChild(pre);
}

const success = (position) => {
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;

  writeToScreen(`<span class="message-client"><a href="https://www.openstreetmap.org/#map=18/${latitude}/${longitude}" target="_blank">Гео-локация</a></span>`);
}

btnSend.addEventListener('click', () => {
  let textMessage = document.querySelector('input').value;

  writeToScreen(`<span class="message-client">${textMessage}</span>`);
  websocket.send(textMessage);
  websocket.onmessage = function(evt) {
    writeToScreen(`<span class="message-server">${evt.data}</span>`);
  };
});

btnGeoLocation.addEventListener('click', () => {
  if (!navigator.geolocation) {
    status.textContent = 'Geolocation не поддерживается вашим браузером';
  } else {
    navigator.geolocation.getCurrentPosition(success);
  }
});