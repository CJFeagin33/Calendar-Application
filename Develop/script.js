// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDay = $('#currentDay')
var d = new Date();
var strDate = (d.getMonth()+1) + "/" + d.getDate() + "/" + d.getFullYear();
var strTime = d.getHours()
console.log(strTime)

// all the different time elements
var hour9 = $('#hour-9')
var hour10 = $('#hour-10')
var hour11 = $('#hour-11')
var hour12 = $('#hour-12')
var hour13 = $('#hour-13')
var hour14 = $('#hour-14')
var hour15 = $('#hour-15')
var hour16 = $('#hour-16')
var hour17 = $('#hour-17')


var init = function() {
  currentDay.text("Today's Date: "+ strDate);
  determineTime();
};

// This function will determine which html elements are labeled as past,
// present, and future classes.
var determineTime = function() {
  if (strTime === 9) {
    hour9.addClass('present');
    hour10.addClass('future');
    hour11.addClass('future');
    hour12.addClass('future');
    hour13.addClass('future');
    hour14.addClass('future');
    hour15.addClass('future');
    hour16.addClass('future');
    hour17.addClass('future');
  } else if (strTime === 10) {
    hour9.addClass('past');
    hour10.addClass('present');
    hour11.addClass('future');
    hour12.addClass('future');
    hour13.addClass('future');
    hour14.addClass('future');
    hour15.addClass('future');
    hour16.addClass('future');
    hour17.addClass('future');
  } else if (strTime === 11) {
    hour9.addClass('past');
    hour10.addClass('past');
    hour11.addClass('present');
    hour12.addClass('future');
    hour13.addClass('future');
    hour14.addClass('future');
    hour15.addClass('future');
    hour16.addClass('future');
    hour17.addClass('future');
  } else if (strTime === 12) {
    hour9.addClass('past');
    hour10.addClass('past');
    hour11.addClass('past');
    hour12.addClass('present');
    hour13.addClass('future');
    hour14.addClass('future');
    hour15.addClass('future');
    hour16.addClass('future');
    hour17.addClass('future');
  } else if (strTime === 13) {
    hour9.addClass('past');
    hour10.addClass('past');
    hour11.addClass('past');
    hour12.addClass('past');
    hour13.addClass('present');
    hour14.addClass('future');
    hour15.addClass('future');
    hour16.addClass('future');
    hour17.addClass('future');
  } else if (strTime === 14) {
    hour9.addClass('past');
    hour10.addClass('past');
    hour11.addClass('past');
    hour12.addClass('past');
    hour13.addClass('past');
    hour14.addClass('present');
    hour15.addClass('future');
    hour16.addClass('future');
    hour17.addClass('future');
  } else if (strTime === 15) {
    hour9.addClass('past');
    hour10.addClass('past');
    hour11.addClass('past');
    hour12.addClass('past');
    hour13.addClass('past');
    hour14.addClass('past');
    hour15.addClass('present');
    hour16.addClass('future');
    hour17.addClass('future');
  } else if (strTime === 16) {
    hour9.addClass('past');
    hour10.addClass('past');
    hour11.addClass('past');
    hour12.addClass('past');
    hour13.addClass('past');
    hour14.addClass('past');
    hour15.addClass('past');
    hour16.addClass('present');
    hour17.addClass('future');
  } else if (strTime === 17) {
    hour9.addClass('past');
    hour10.addClass('past');
    hour11.addClass('past');
    hour12.addClass('past');
    hour13.addClass('past');
    hour14.addClass('past');
    hour15.addClass('past');
    hour16.addClass('past');
    hour17.addClass('present');
  } else {
    hour9.addClass('past');
    hour10.addClass('past');
    hour11.addClass('past');
    hour12.addClass('past');
    hour13.addClass('past');
    hour14.addClass('past');
    hour15.addClass('past');
    hour16.addClass('past');
    hour17.addClass('past')
  }
}

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?


// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?

init()