var d, p;
var dead;
var deadline;
alert("press start to start the timer");

function start(display) {
  dead = prompt("enter deadline date", "May 29,2016 13:15:00");
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
      display.textContent = "DAYS :" + day + ":" + "HOURS :" + hou + ":" + "MINUTES :" + minu + ":" + "SECONDS :" + sec;

    }
    if (sec == 0 && minu == 0 && hou == 0 && day == 0) {
      alert("LIFT OFF");
    }
  };
  timer();
  d = setInterval(timer, 1000);
}

function sta(display) {
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
      display.textContent = day + ":" + hou + ":" + minu + ":" + sec;
      document.getElementById("ti").innerHTML = "Days : Hours : Minutes : Seconds";
    }
    if (sec == 0 && minu == 0 && hou == 0 && day == 0) {
      alert("LIFT OFF");
    }
  };
  timer();
  d = setInterval(timer, 1000);
}

function star() {

  display = document.getElementById('time');
  start(display);
}

function stop() {
  clearInterval(d);
  d = null;
  document.getElementById("time").innerHTML = 0;
}

function pause() {
  clearInterval(d);
  p = new Date();
}

function cont() {
  display = document.getElementById('time');
  sta(display);

}
