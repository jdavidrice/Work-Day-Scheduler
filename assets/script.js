// jQuery wrapper
$(document).ready(function () {

  // Moment instance
  const m = moment();

  // Header HTML
  function header() {
    $('.jumbotron').html(`
  <h1 class='display-3'>Work Day Scheduler</h1>
  <h2 id='subtitle' class='lead'>A simple calendar app for scheduling your work day.</h2>
  <p id='currentDay' class='lead'>${m.format('[Today is] dddd, MMMM Do YYYY[, and the time is...]')}</p><br>
  <h3 id='myClockDisplay' class='clock' onload='showTime()'></h3>
  `)
    $('.today').html(`
  <h4>${m.format("dddd['s Schedule]")}</h4>
  `)
  };
  header();

  const timeArray = [8, 9, 10, 11, 12, 1, 2, 3, 4];
  for (let i = 0; i < timeArray.length; i++) {
    timeBlock(i);
    localStore(i);
  };

  function timeBlock(i) {
    let period = "A.M."
    const hour = timeArray[i];
    if (hour > 11 || hour < 8) {
      period = "P.M."
    }
    $('.container').append(`
      <div id = "timeblock${timeArray[i]}" class= "row time-block">
        <div class="col-xs-1 col-sm-1 col-md-1 hourparent item">
          <p class="hour">${timeArray[i]}:00 ${period}</p>
        </div>
        <textarea class="col-xs-10 col-sm-10 col-md-10 item" id="activity${timeArray[i]}" data-hour="${timeArray[i]}" placeholder="Enter activity here"></textarea>
        <input type="submit" value="Save" class="saveBtn col-xs-1 col-sm-1 col-md-1 item" id="saveBtn${timeArray[i]}"/>
      </div>
      `);
  };

  function localStore(i) {
    document.getElementById(`activity${timeArray[i]}`).value = localStorage.getItem(`activity${timeArray[i]}`);
    document.getElementById(`saveBtn${timeArray[i]}`).onclick = () => {
      localStorage.setItem(`activity${timeArray[i]}`, document.getElementById(`activity${timeArray[i]}`).value)
    };
  };

  // Change timeblock color based on actual time
  function updateCheck() {
    setInterval(() => {
      currentHour = m.hour()
      $("textarea").each(function () {
        const thisHour = $(this).attr("data-hour")
        if (thisHour == currentHour) {
          $(this).addClass("present")
        } else if (thisHour < currentHour) {
          $(this).addClass("past")
        } else {
          $(this).addClass("future")
        }
      });
    }, 1000)
  }
  updateCheck();

  // Digital Clock - based on https://codepen.io/afarrar/pen/JRaEjP, but incorporating code from https://time.gov to make it work correctly
  function showTime() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = h >= 12 ? 'PM' : 'AM';

    h = h % 12;
    h = h ? h : 12;

    //h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + " " + session;
    document.getElementById('myClockDisplay').innerText = time;
    document.getElementById('myClockDisplay').textContent = time;
  }
  setInterval(showTime, 1000);

  // Below this line are the closing "ready function" delimiters from the top of the page
})

