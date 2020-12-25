window.firstFBLoad = true;

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
function blockAnyWay() {
  [...document.getElementsByClassName('anyway')].map(n => n && n.remove());
}
function copyButtonsHandle() {
  [...document.getElementsByClassName('copy')].map(n => n && cpHd(n));
}
var uptime = 0;

replaceAllDoc = function (a, b) {
  const v = document.querySelectorAll("h4, b, button, .forCopy");
  var i = 0;
  while (v.length != i) {
    v[i].innerText = v[i].innerText.replaceAll(a, b);
    i++;
  }
}
copySupport = function () {
  const v = document.querySelectorAll(".forCopy");
  var i = 0;
  while (v.length != i) {
    var s = document.createElement('img');
    s.src = 'copy.svg';
    s.alt = '[Скопировать]';
    s.className = 'copy';
    s.copy = v[i].innerText;
    v[i].after(s);
    i++;
  }
  copyButtonsHandle();
}

alert = function(text){
    var alertElement = document.getElementsByClassName('alert')[0];
    var textAlert = alertElement.getElementsByTagName('p')[0];
    textAlert.innerText = text;
    alertElement.style.visibility = 'visible';
    setTimeout(function functionName() {
      alertElement.style.visibility = 'hidden';
    }, 3000);
}
function update() {
  if(get['status'] == 'offline' && get['uptime'] != uptime){
    statusServer.innerText = 'Выключен';
    statusServer.style.color = '#f00';
  }else{
    statusServer.innerText = 'В сети';
    statusServer.style.color = '#0f0';
  }
  if(get['status-be'] == 'offline'){
    statusServerBedrock.innerText = 'Выключен';
    statusServerBedrock.style.color = '#f00';
  }else{
    statusServerBedrock.innerText = 'В сети';
    statusServerBedrock.style.color = '#0f0';
  }
  str = get['mcversion'];
  str = str.substring(0, str.length - 1) + 'x';
  versionServer.innerText = str;
  playersServer.innerText = get['players'] + '/' + get['max_players'];
  uptimeServer.innerText = timeConversion(get['uptime']*1000);
  uptime = get['uptime'];
  if(window.firstFBLoad){
    acceptDiscordInvite.onclick = function () {
      window.open(get['discord-invite']);
    }
    downloadMCBE.onclick = function () {
      window.open(get['url-install-android']);
    }
    replaceAllDoc('%tailscale_password%', get['tailscale-password']);
    replaceAllDoc('%tailscale_email%', get['tailscale-email']);
    replaceAllDoc('%ip_bedrock%', get['ip-bedrock']);
    replaceAllDoc('%version%', get['mcversion']);
    replaceAllDoc('%version_be%', get['mcversion_be']);
    replaceAllDoc('%ip_pc%', get['ip-address']);
    copySupport();
    theqr.src = get['qrcode'];
    window.scrollTo(0, 0);
  }
  window.firstFBLoad = false;
}

function cpHd(n){
  n.onclick = function (e) {
    var text = e.target.copy;
    navigator.clipboard.writeText(text).then(function() {
      alert('Текст скопирован!');
    }, function(err) {
      alert('Ошибка копирования!');
      console.error('Async: Could not copy text: ', err);
    });
  }
}

function init() {
  var alertElement = document.getElementsByClassName('alert')[0];
  alertElement.style.visibility = 'hidden';
  
  function link(id){
    window[id] = document.getElementById(id);
  }

  link('statusServer');
  link('versionServer');
  link('playersServer');
  link('uptimeServer');
  link('statusServerBedrock');

  link('goToMainPage');

  link('downloadTl');
  link('errorMinecraft');
  link('downloadTailscale');
  link('acceptDiscordInvite');
  link('downloadMCBE');
  link('discordOfficial');

  link('qrcode');
  link('qrcodeGet');
  link('closeqr');
  link('theqr')
  qrcode.style.display = "none";
  closeqr.onclick = function () {
    qrcode.style.display = "none";
  }
  qrcodeGet.onclick = function () {
    qrcode.style.display = "block";
  }
  goToMainPage.onclick = function () {
    document.location.replace('https://simakyr.github.io/');
  }
  downloadTl.onclick = function () {
    window.open('https://tlauncher.org/installer');
  }
  errorMinecraft.onclick = function () {
    window.open('https://tlauncher.org/ru/help.html');
  }
  downloadTailscale.onclick = function () {
    window.open('https://play.google.com/store/apps/details?id=com.tailscale.ipn');
  }
  discordOfficial.onclick = function () {
    window.open('https://discord.com/')
  }
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
  blockAnyWay();
  ;
}

window.onload = function() {
  if(init() == 0){
    setModePublic();
  }
}
