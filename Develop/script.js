// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDay = $('#currentDay')
var d = new Date();
var strDate = (d.getMonth()+1) + "/" + d.getDate() + "/" + d.getFullYear();
var strTime = d.getHours()
console.log(strTime)
var saveButton = $('.saveBtn')

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

// all the different text area elements
var hour9TextArea = $('#hour9TextArea')
var hour10TextArea = $('#hour10TextArea')
var hour11TextArea = $('#hour11TextArea')
var hour12TextArea = $('#hour12TextArea')
var hour13TextArea = $('#hour13TextArea')
var hour14TextArea = $('#hour14TextArea')
var hour15TextArea = $('#hour15TextArea')
var hour16TextArea = $('#hour16TextArea')
var hour17TextArea = $('#hour17TextArea')

var init = function() {
  currentDay.text("Today's Date: "+ strDate);
  determineTime();
  document.getElementsByClassName('description9').innerText = localStorage.getItem('hour-9')
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

$(function () {
  saveButton.on('click', function () {
    localStorage.setItem('hour-9', hour9TextArea.val());
    localStorage.setItem('hour-10', hour10TextArea.val());
    localStorage.setItem('hour-11', hour11TextArea.val());
    localStorage.setItem('hour-12', hour12TextArea.val());
    localStorage.setItem('hour-13', hour13TextArea.val());
    localStorage.setItem('hour-14', hour14TextArea.val());
    localStorage.setItem('hour-15', hour15TextArea.val());
    localStorage.setItem('hour-16', hour16TextArea.val());
    localStorage.setItem('hour-17', hour17TextArea.val());
  })

  document.getElementById('hour9TextArea').innerText = localStorage.getItem('hour-9')
  document.getElementById('hour10TextArea').innerText = localStorage.getItem('hour-10')
  document.getElementById('hour11TextArea').innerText = localStorage.getItem('hour-11')
  document.getElementById('hour12TextArea').innerText = localStorage.getItem('hour-12')
  document.getElementById('hour13TextArea').innerText = localStorage.getItem('hour-13')
  document.getElementById('hour14TextArea').innerText = localStorage.getItem('hour-14')
  document.getElementById('hour15TextArea').innerText = localStorage.getItem('hour-15')
  document.getElementById('hour16TextArea').innerText = localStorage.getItem('hour-16')
  document.getElementById('hour17TextArea').innerText = localStorage.getItem('hour-17')
})

init()