window.firstFBLoad = true;

var jokesIP = ['Не пиши больше /kill. Ок?', 'Сервер взломан(нет)!', 'Вы гадкий читер!', 'Сервер умный что не нужен адрес сервера.', 'Адрес сервера заблокирован за то что сервер был Terraria сервером', 'Русские хакеры удалоли адрес(нет)', 'Адрес сервера повержен ФБР-ом', 'А вы знали что сервер выключен?', 'Погнали играть в террарию', 'Адрес сервера использует магию против вас! Ваше здоровье: 1ХП']

function randomJokeIP() {
  return jokesIP[Math.floor(Math.random() * jokesIP.length)];
}

window.mobileCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};
window.mobile = window.mobileCheck();
// window.mobile = true; // REMOVE IN PUBLIC VERSION

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
    if(v[i].getAttribute('var') == a){
      v[i].innerText = b;
    }
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
  var stOnline;
  stOnline = get['status'] == 'online';
  if(get['uptime'] != uptime){
    if(stOnline){
      stOnline = false;
    }
  }
  if(!stOnline){
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
    window.scrollTo(0, 0);
  }
    replaceAllDoc('%tailscale_password%', get['tailscale-password']);
    replaceAllDoc('%tailscale_email%', get['tailscale-email']);
    replaceAllDoc('%ip_bedrock%', get['ip-bedrock']);
    replaceAllDoc('%version%', get['mcversion']);
    replaceAllDoc('%version_be%', get['mcversion_be']);
    replaceAllDoc('%ram%', get['ram'] + ' Мегабайт');
    if(stOnline){
      replaceAllDoc('%ip_pc%', get['ip-address']);
    }else{
      replaceAllDoc('%ip_pc%', randomJokeIP());
    }
    copySupport();
    theqr.src = get['qrcode'];

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
  if(window.mobile){
    document.body.classList.add("mobile");
  }
}

window.onload = function() {
  if(init() == 0){
    setModePublic();
  }
}
