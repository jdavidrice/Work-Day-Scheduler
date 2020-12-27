// jQuery wrapper
$(document).ready(function () {

  // Moment instance
  const m = moment();

  // Header HTML
  $('.jumbotron').html(`
  <h1 class='display-3'>Work Day Scheduler</h1>
  <h2 id='subtitle' class='lead'>A simple calendar app for scheduling your work day.</h2>
  <p id='currentDay' class='lead'>${m.format('[Today is] dddd, MMMM Do YYYY[, and the time is...]')}</p><br>
  <h3 id='myClockDisplay' class='clock' onload='showTime()'></h3>
`)

  // Main content HTML
  $('.today').html(`
  <h4>${m.format("dddd['s Schedule]")}</h4>
`)
  
  // Getting and setting with local storage
  activity8.value = localStorage.getItem('activity8');
  saveBtn8.onclick = () => {
    localStorage.setItem('activity8', activity8.value)
  };
  // activity9.value = localStorage.getItem('activity9');
  // saveBtn9.onclick = () => {
  //   localStorage.setItem('activity9', activity9.value)
  // };
  // activity10.value = localStorage.getItem('activity10');
  // saveBtn10.onclick = () => {
  //   localStorage.setItem('activity10', activity10.value)
  // };
  // activity11.value = localStorage.getItem('activity11');
  // saveBtn11.onclick = () => {
  //   localStorage.setItem('activity11', activity11.value)
  // };
  // activity12.value = localStorage.getItem('activity12');
  // saveBtn12.onclick = () => {
  //   localStorage.setItem('activity12', activity12.value)
  // };
  // activity1.value = localStorage.getItem('activity1');
  // saveBtn1.onclick = () => {
  //   localStorage.setItem('activity1', activity1.value)
  // };
  // activity2.value = localStorage.getItem('activity2');
  // saveBtn2.onclick = () => {
  //   localStorage.setItem('activity2', activity2.value)
  // };
  // activity3.value = localStorage.getItem('activity3');
  // saveBtn3.onclick = () => {
  //   localStorage.setItem('activity3', activity3.value)
  // };
  // activity4.value = localStorage.getItem('activity4');
  // saveBtn4.onclick = () => {
  //   localStorage.setItem('activity4', activity4.value)
  // };

// Change timeblock color based on actual time
function updateCheck () {
  setInterval(()=> {
    currentHour = m.hour()
      $( "textarea" ).each(function() {
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
function showTime(){
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

