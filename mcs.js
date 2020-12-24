function timeConversion(duration) {
  const portions = [];

  const msInHour = 1000 * 60 * 60;
  const hours = Math.trunc(duration / msInHour);
  if (hours > 0) {
    portions.push(hours + ' часа');
    duration = duration - (hours * msInHour);
  }

  const msInMinute = 1000 * 60;
  const minutes = Math.trunc(duration / msInMinute);
  if (minutes > 0) {
    portions.push(minutes + ' минут');
    duration = duration - (minutes * msInMinute);
  }

  const seconds = Math.trunc(duration / 1000);
  if (seconds > 0) {
    portions.push(seconds + ' сек');
  }

  return portions.join(' ');
}

function setModePublic() {
  [...document.getElementsByClassName('blc')].map(n => n && n.remove());
}
function update() {
  addressServer.innerText = get['ip-address'];
  if(get['status'] == 'offline'){
    statusServer.innerText = 'Выключен';
    statusServer.style.color = '#f00';
  }else{
    statusServer.innerText = 'В сети';
    statusServer.style.color = '#0f0';
  }
  str = get['mcversion'];
  str = str.substring(0, str.length - 1) + 'x';
  versionServer.innerText = str;
  playersServer.innerText = get['players'] + '/' + get['max_players'];
  uptimeServer.innerText = timeConversion(get['uptime']*1000);
}

function cpAdrr(){
  var text = get['ip-address'];
  navigator.clipboard.writeText(text).then(function() {
    addressServer.innerText = 'Адрес сервера скопирован!';
  }, function(err) {
    addressServer.innerText = 'Ошибка копирования!';
    console.error('Async: Could not copy text: ', err);
  });
}

function init() {

  function link(id){
    window[id] = document.getElementById(id);
  }

  link('addressServer');
  link('statusServer');
  link('versionServer');
  link('playersServer');
  link('uptimeServer');
  link('copyAddress');

  passMCS = new URLSearchParams(window.location.search).get('pass');

  if ((localStorage.getItem('passMCS') === null) && (passMCS === null) && true) {
    return 0;
  }else{
    if(localStorage.getItem('passMCS') !== null){
        passMCS = localStorage.getItem('passMCS');
    }else{
      localStorage.setItem('passMCS', passMCS)
    }
  }
  if(passMCS === null){
    return 0;
  }

  firebase.initializeApp(JSON.parse(atob(passMCS)));
  function set(key,value){firebase.database().ref().child(key).set(value);}
  get = {};
  firebase.database().ref().on('value', snap => { get = snap.val(); update(); });

  copyAddress.onclick = cpAdrr;
}

window.onload = function() {
  if(init() == 0){
    setModePublic();
  }
}
