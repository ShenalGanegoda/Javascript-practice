// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
leapYearCheck(2028);

function leapYearCheck(year) {
  if (year % 4 == 0) {
    console.log("It's a leap year!");
  } else console.log("Not a leap year.");
}
