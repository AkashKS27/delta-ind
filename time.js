var d, p, q;
var dead;
var deadline;
alert("Press Start button to start the Timer");

function start(display) {
  dead = prompt("Enter Deadline Date", "June 11,2016 00:00:00");
  deadline = new Date(dead);

  function timer() {
    var timeleft = deadline - new Date();
    var day = parseInt(timeleft / 86400000);
    timeleft -= day * 86400000;
    var hou = parseInt(timeleft / 3600000);
    timeleft -= hou * 3600000;
    var minu = parseInt(timeleft / 60000);
    timeleft -= minu * 60000;
    var sec = parseInt(timeleft / 1000);
    if (sec >= 0 && minu >= 0 && hou >= 0 && day >= 0) {
      display.textContent = "DAYS :" + day + "  HOURS :" + hou + "  MINUTES :" + minu + "  SECONDS :" + sec;

    }
    if (sec == 0 && minu == 0 && hou == 0 && day == 0) {
      alert("LIFT OFF");
    }
  };
  timer();
  d = setInterval(timer, 1000);
}

function sta(disp) {

  function timer() {
    var timelef = deadline - new Date();
    var da = parseInt(timelef / 86400000);
    timelef -= da * 86400000;
    var ho = parseInt(timelef / 3600000);
    timelef -= ho * 3600000;
    var min = parseInt(timelef / 60000);
    timelef -= min * 60000;
    var se = parseInt(timelef / 1000);
    if (se >= 0 && min >= 0 && ho >= 0 && da >= 0) {
      display.textContent = "DAYS :" + da + "  HOURS :" + ho + "  MINUTES :" + min + "  SECONDS :" + se;
    }
    if (se == 0 && min == 0 && ho == 0 && da == 0) {
      alert("LIFT OFF");
    }
  };
  timer();
  q = setInterval(timer, 1000);
}

function star() {

  display = document.getElementById("time");
  start(display);
}

function stop() {
  clearInterval(d);
  clearInterval(q);
  q = null;
  d = null;
  document.getElementById("time").innerHTML = 0;
}

function pause() {
  clearInterval(d);
  clearInterval(q);
}

function cont() {
  disp = document.getElementById("time");
  sta(disp);

}
