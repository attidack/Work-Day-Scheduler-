var time = ['9am','10am',"11am","12pm","1pm","2pm","3pm","4pm","5pm"]
var container = $('.container')
var timeAmPm = $('.hour').text()
var scheduleDataObj = {}
var scheduleItem = {}
$("#currentDay").text(moment().format('MMMM Do YYYY'));
var currentTime = moment().format('ha')

// HTML creation of rows based on the "time" array
function timeRowIteration(){
  for (let i = 0; i < time.length; i++) {
    var dateRow = $("<div>")
    .addClass("row time-block")
    var timeCol =$("<div>")
    .text(time[i])
    .addClass("col-1 hour");
    var textCol = $('<textarea>')
    .addClass("col-10 description")
    .text('');
    var saveBtns = $('<div>')
    .addClass("col-1 saveBtn fa-solid fa-save d-flex justify-content-center align-items-center");
    saveBtns.on("click", handleSave )
    container.append(dateRow);
    dateRow.append(timeCol, textCol, saveBtns);
    var difference = moment(time[i], "ha") - moment(currentTime, 'ha')
    if (difference < 0) {
      textCol.addClass("past")
    }else if(difference === 0) {
      textCol.addClass('present')
    }else{
      textCol.addClass('future')
    }console.log(difference)
  }
};
timeRowIteration()


//handles the saving of the time and message to local host, find the values, add values to an array, then add that array to a another array, then save to loacl storage
function handleSave(e){
  var textBoxContents = e.target.previousElementSibling.value
  var timePosition = $(this).siblings(".hour").text()
  var scheduleDataObj =  {
    time: timePosition,
    message: textBoxContents
  }
  scheduleItem[scheduleDataObj.time] = scheduleDataObj.message
  localStorage.setItem("schedule", JSON.stringify(scheduleItem));
}
//placing items from local storage into the textblock
function setItems(){
  $.each(scheduleItem, function(key, value){
    var hour = key;
    var message = value;
    var time = $('.time-block').find(".hour").filter(function(){
      return $(this).text() === hour
    })
    var messageUpdate = time.siblings('.description')
    messageUpdate.text(message)
  })
}
// loading the items from local storage
function loadSchedule(){
  scheduleItem = JSON.parse(localStorage.getItem('schedule'))
  if (!scheduleItem) {
    scheduleItem = {}
  }  
  $.each(scheduleItem, function(key, value){
    var hour= key;
    var message = value;
 })
 setItems()
}
loadSchedule();
