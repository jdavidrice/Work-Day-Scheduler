m = moment();

document.getElementById("jumbotron").innerHTML = `
  <h1 class="display-3">Work Day Scheduler</h1>
  <p class="lead">A simple calendar app for scheduling your work day</p>
  <p id="currentDay" class="lead">${m.format("[Today is] dddd MMM Mo YYYY[, and the time is ]hh:mm")}</p>
`;

document.getElementById("timeblock").innerHTML = `
  <div id="date"><p>${m.format("L")}</p></div>
  <input type="text" class="text-area" placeholder="Enter activity here">
  </input>
`;
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







