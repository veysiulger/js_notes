var begin = 0;

function showTime(value) {
  document.getElementById("counter_txt").innerHTML = "<h1>" + value + "</h1>";
}

showTime(begin);

function startCounter() {
  counter = setInterval(function () {
    begin++;
    showTime(begin);
  }, 1000);
}

function resetCounter() {
  clearInterval(counter);
  begin = 0;
  showTime(begin);
}
