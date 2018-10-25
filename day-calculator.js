// function needs to take the date in YYYY/MM/DD format and convert it into strings
// year, month, and day.

// if year, month and day are valid, calculate the day number

function calculateDayInYear(date) {
  var splitDate = date.split('/');
  var year = Number(splitDate[0]); // takes year
  var month = Number(splitDate[1]); // takes month
  var day = Number(splitDate[2]); // takes date
  var febDays = daysInFeb(year);
  var DAYS_IN_MONTH = [31, febDays, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (year && validMonth(month) && validDay(month, day)) {
    console.log(date, "is day", calculateDayNumber(month, day), "of the year", year);
    return calculateDayNumber(month, day);
  }
  else {
    console.log("Invalid date");
  }

  function validMonth(month) {
    return month && month >= 1 && month <= 12;
  } // tests the validity of the month

  function validDay(month, day) {
    return day && day >= 1 && day <= DAYS_IN_MONTH[month - 1]; // takes the day in the month
  } // tests the validity of the day

  function calculateDayNumber(month, day) {
    var dayOfYear = day;
    if (month !== 1){
      for (var i = 1; i < month; i++) { //
        dayOfYear += DAYS_IN_MONTH[i - 1];
      }
    }
    return dayOfYear;
  } // calculates the day number of the year

  function daysInFeb(year) {
    if ((isMultiple(year, 4) && !isMultiple(year, 100)) || (isMultiple(year, 4) && isMultiple(year, 100) && isMultiple(year, 400))) {
      return 29;
    }
    else {
      return 28;
    }
  }

  function isMultiple(numerator, denominator) {
    return numerator % denominator === 0;
  }

 // var date = process.argv[2];
  if (!date) {
    console.log("Please provide a date in the format YYYY/MM/DD");
  }
  else {
    calculateDayInYear(date);
  }
}

/*
    Below are some simple tests!

    They run the function with a predetermined parameter and compare the output to the value we are expecting to get!

    The console.log will output either 'true' or 'false' based on whether or not the function
    returns a value that matched our expected value.

    You'll know your code works correctly when all of these tests return 'true'
*/
console.log("Tests:");
console.log("---------------");
console.log(calculateDayInYear("1900/3/2") === 61); // should be true
console.log(calculateDayInYear("2000/3/2") === 62);  // should be true
console.log(calculateDayInYear("2012/2/29") === 60); // should be true
console.log(calculateDayInYear("2015/12/31") === 365); // should be true