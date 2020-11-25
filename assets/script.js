document.getElementById("jumbotron").innerHTML = `
  <h1 class="display-3">Work Day Scheduler</h1>
  <p class="lead">A simple calendar app for scheduling your work day</p>
  <p id="currentDay" class="lead"></p>
`;

document.getElementById("timeblock").innerHTML = `
  <input type="text" class="text-area" placeholder="Enter activity here">
  </input>
`;

// Current date and time
let m = moment();

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



console.log(`toString() => ${m.toString()}`); // Local mode
console.log(`toISOString() => ${m.toISOString()}`); // UTC mode

