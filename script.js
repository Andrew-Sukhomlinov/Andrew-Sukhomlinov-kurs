alert("Как играть: копите деньги и прокачивайтесь, в минус можно уйти до (-100), после - вы проиграете!")
var score = 0;
updating = 1;
function clickBtn() {
  score = score + updating;
  document.getElementsByTagName("h1")[0].firstChild.data = score + "$";
}
function update() {
  score = score - 100;
  document.getElementsByTagName("h1")[0].firstChild.data = score + "$";
  if1();
  updating += 1;
}
function update1() {
  score = score - 150;
  document.getElementsByTagName("h1")[0].firstChild.data = score + "$";
  if1();
  updating += 2;
}
function update2() {
  score = score - 250;
  document.getElementsByTagName("h1")[0].firstChild.data = score + "$";
  if1();
  updating += 3;
}
function update3() {
  score = score - 500;
  document.getElementsByTagName("h1")[0].firstChild.data = score + "$";
  if1();
  updating += 10;
}
function auto() {
  score = score - 1000;
  document.getElementsByTagName("h1")[0].firstChild.data = score + "$";
  if1();
  setTimeout("plusauto()", 1000);
}
function if1 () {
  if (score < -100) {
    document.write("Вы проиграли, превышен лимит 'долга'");
  }
}
function plusauto () {
  score += updating;
  document.getElementsByTagName("h1")[0].firstChild.data = score + "$";
  setTimeout("auto1()", 1000);
}
function auto1 () {
  score += updating;
  setTimeout("plusauto()", 1000);
  document.getElementsByTagName("h1")[0].firstChild.data = score + "$";
}
function pashalka () {
  score += 10;
  document.getElementsByTagName("h1")[0].firstChild.data = score + "$";
}
function reboot () {
  alert("Уровень прокачки " + updating + ". Баланс " + score + " .");
}

