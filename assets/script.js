// Render entire day's timeblocks on page load?

// Materialize auto init
M.AutoInit();

// var instance = M.TapTarget.getInstance(elem);

// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.tap-target');
//   var instances = M.TapTarget.init(elems, options);
// });

// Or with jQuery

// $(document).ready(function(){
//   $('.tap-target').tapTarget();
// });
        
// Moment instance
m = moment();



document.getElementById("jumbotron").innerHTML = `
  <h1 class="display-3">Work Day Scheduler</h1>
  <p id="subtitle" class="lead">A simple calendar app for scheduling your work day.</p>
  <p id="currentDay" class="lead">${m.format("[Today is] dddd, MMMM Do YYYY[, and the time is...]")}</p>
  <div id="myClockDisplay" class="clock" onload="showTime()"></div>
`;

//  document.querySelector(".container").innerHTML =`
  
//   `;  

// document.getElementById("dayblock").innerHTML =`
  
// `;

document.getElementById("timeblock").innerHTML =`
    <p>${m.format("dddd")}</p>
    <input type="text" class="text-area" placeholder="Enter activity here">
    <input type="submit" value="Save" class="saveBtn">


`;
// console.log(m.format("[The day is] dddd MMM Mo[, and we're in] YYYY"));
// <p>${m.format("dddd[, ] MM[/]D")}</p>

// Digital Clock - based on https://codepen.io/afarrar/pen/JRaEjP, but incorporating code from https://time.gov to make it work correctly
function showTime(){
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = h >= 12 ? 'PM' : 'AM';
  
  h = h % 12;
  h = h ? h : 12;
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("myClockDisplay").innerText = time;
  document.getElementById("myClockDisplay").textContent = time;
  
  setTimeout(showTime, 1000);
  
}

showTime();

// Fun with Moment.js 
///////////////////////////////////////////////////////////////////

// Current date and time
// let m = moment();

// // Create from ISO 8601 string
// m = moment("2020-11-25T12:07:00.000-05:00");

// // Using a format BEST WAY
// m = moment("06/14/2020 3:30PM", "MM/DD/YYYY h:mmP")

// // Create using milliseconds since epoch (Jan 1st 1970)
// m = moment(600000);

// // Crate using seconds since epoch (Jan 1st 1970)
// m = moment.unix(7200);

// // Create a moment object in UTC mode
// m = moment.utc("2020-11-25T12:07:00.000-05:00");

// console.log(`toString() => ${m.toString()}`); // Local mode
// console.log(`toISOString() => ${m.toISOString()}`); // UTC mode

///////////////////////////////////////////////////////////////////

// const m = moment();

// console.log(m.toString());

// Getting units
// console.log(`Milliseconds is ${m.millisecond()}`);
// console.log(`Seconds is ${m.seconds()}`);
// console.log(`Minutes is ${m.minutes()}`);
// console.log(`Hours is ${m.hour()}`);
// console.log(`Day of Week is ${m.day()}`);
// console.log(`Date of Month is ${m.date()}`);
// console.log(`Day of Year is ${m.dayOfYear()}`);
// console.log(`Months is ${m.month()}`); //Zero indexed
// console.log(`Years is ${m.year()}`);
// console.log(`Week of Year is ${m.week()}`);

// console.log(`Quarter of Year is ${m.get("quarter")}`);

// Setting units

// m.minutes(52);
// m.hour(14);
// m.week(4);

// m.set("day", 5);

// console.log(m.toString());

// const differentMoment = moment("2020-10-20");

// console.log(moment.max(moment(), differentMoment).toString());

///////////////////////////////////////////////////////////////////////
// const m = moment(); // Defaults to local time zone

// console.log(`Original Moment: ${m.toString()}`);

// m.add({
//   "hours": 7,
//   "minutes": 15,
// })

// m.add(7, "h").add(10, "m");

// m.subtract({
//   "days": 3,
//   "seconds": 40,
// })

// m.subtract(3, "d").subtract(40, "s");

// m.startOf("hour");
// m.startOf("year");

// m.endOf("day");

// Local time
// console.log(`After Manipulation: ${m.toString()}`);

// // UTC
// m.utc();

// // Make Local 
// m.local();

// UTC offset
// m.utcOffset(10); // hours (between -15 and 15 inclusive)
// m.utcOffset(600); // minutes (before -15 or past 15)
// m.utcOffset("+02:35");
// m.utcOffset("-02:35");

// console.log(`UTC Offset in minutes is ${m.utcOffset()}`);

// Convert between Local and UTC
// console.log(`After Manipulation: ${m.toString()}`);

//////////////////////////////////////////////////////////////////
// DISPLAYING DATE IN DIFFERENT WAYS

// const m = moment();
// const m2 = moment("2020-10-13");

// console.log(m.format("dddd MMM Mo YYYY"));
// console.log(m.format("[The day is] dddd MMM Mo[, and we're in] YYYY"));

// // Change locale to change date format
// m.locale("en-au");

// // Month/Day/Year
// console.log(m.format("L"));

// How long ago a day/hour/etc was from now

// console.log(m.toString());
// // console.log(m2.format("L"));
// // console.log(m2.fromNow());
// // console.log(m.from("2021-05-15"));

// //const eventMoment = moment().add(-7, "hours");
// const eventMoment = moment().add(3, "days");
// console.log(eventMoment.toString());

// // CALENDAR format reports "Today at..."
// console.log(eventMoment.calendar());

// Difference between two moments in milliseconds (add "days" etc for other units)
// console.log(m.diff(m2, "days", true));
// console.log(m.diff(m2, "weeks", true));

// console.log(m.valueOf()); // millisec
// console.log(m.unix()); // sec

// // Days in the selected month (m)
// console.log(m.daysInMonth());

// // To JSON

// // make an object
// const jsonObj = {     
//   momentObj: m2
// };

// m2.toJSON = function () {
//   return this.format("[This is JSON, and BTW, here is the date:] L");
// }
// console.log(JSON.stringify(jsonObj));

// // not an object
// console.log(JSON.stringify(m));
/////////////////////////////////////////////////////////////

// ".isSame" accurate to millisecond

// console.log(moment("2019-06-04").isSame("2019-06-04"));
// console.log(moment("2019-06-04").isSame("2019-06-03"));
// console.log(moment("2019-06-03 15:35:32.764").isSame("2019-06-03 15:35:32.764"));
// console.log(moment("2019-06-04 15:35:32.764").isSame("2019-06-04 15:35:32.765"));
// console.log(moment("2019-06-04 15:35:32").isSame("2019-06-04 15:35:32", "hour"));
// console.log(moment("2019-06-04 14:35:32").isSame("2019-06-04 15:35:32", "hour"));

// console.log(moment("2019-06-04").isBefore("2019-06-03"));
// console.log(moment("2019-06-04").isBefore("2019-06-07"));
// console.log(moment("2019-06-04").isBefore("2019-06-07", "year"));
// console.log(moment("2019-06-04").isBefore("2020-06-07", "year"));
// console.log(moment("2019-06-04").isBefore("2019-06-08", "week"));
// console.log(moment("2019-06-04").isBefore("2019-06-09", "week"));
// console.log(moment("2019-06-04").isAfter("2019-06-09"));
// console.log(moment("2019-06-04").isAfter("2019-06-01"));
// console.log(moment("2019-06-04").isSameOrBefore("2019-06-01"));
// console.log(moment("2019-06-04").isSameOrBefore("2019-06-04"));


// const m1 = moment("2019-06-06");
// const m2 = moment("2019-06-05");
// const m3 = moment("2019-06-07");
// console.log(m1.isBetween(m2, m3));
// console.log(m3.isBetween(m1, m3));

// console.log(moment("2019-10-06 01:59:59").locale("en-au").isDST());
// console.log(moment("2019-10-06 02:00:00").locale("en-au").isDST());

// console.log(moment().locale("en-us").isDST());
// console.log(moment("2020-11-01").isDST());

// console.log(moment.isMoment(m1));
// console.log(moment.isMoment({
//   name: "jeremy"
// }));

// const jeremy = {
//   name: "Jeremy",
//   age: 44,
//   date: false
// }

// console.log(jeremy);
// console.log(jeremy.name);
// console.log(jeremy.age);
// console.log(jeremy.date);

// console.log(moment.isDate({name: "jeremy"}));
// console.log(moment.isDate(m1));
// console.log(moment.isDate("2020-11-27"));
/////////////////////////////////////////////////////////////////////

// Durations

// let dur;

// dur = moment.duration(5000);
// dur = moment.duration(5, "seconds");
// dur = moment.duration(1, "day");

// console.log(dur.humanize()); // "a few seconds"; "a day"

// console.log(moment.duration(2, "weeks").days()); // 14
// console.log(moment.duration(2, "weeks").get("days")); // 14
// console.log(moment.duration(5, "weeks").days()); // 4 (weeks only works up to 30 days) 
// console.log(moment.duration(5, "weeks").asDays()); // 35  
// console.log(moment.duration(5, "weeks").as("days")); // 35  
// console.log(moment.duration(5, "weeks").as("seconds")); // 3024000 

// console.log(moment.duration(1, "day").add(1, "week").humanize());
// console.log(moment.duration(1, "day").subtract(1, "week").humanize());

// const m1 = moment().add(2, "days");
// const m2 = moment().add(1, "week");

// console.log(moment.duration(m2.diff(m1)).asDays()); // 5
// console.log(moment.duration(m2.diff(m1)).asHours()); // 120

// console.log(dur.toISOString());


