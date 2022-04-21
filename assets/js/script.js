var time = [9,10,11,12,1,2,3,4,5]
var container = $('.container')
var timeAmPm = $('.hour')
var schedule = []
var scheduleDataObj = {}
$("#currentDay").text(moment().format('MMMM Do YYYY'));

function timeRowIteration(){
  // time array,
  for (const timeStep of time) {
    var dateRow = $("<div>")
    .addClass("row time-block")
    .attr("data-row-id", timeStep);
    var timeCol =$("<div>")
    .text(timeStep)
    .addClass("col-1 hour");
    if (timeStep < 12 && timeStep > 8) {
      timeCol.text(timeStep+"am")
    }else{
      timeCol.text(timeStep+"pm")
    };
    var textCol = $('<textarea>')
    .addClass("col-10 description")
    .text('message');
    var saveBtns = $('<div>')
    .addClass("col-1 saveBtn")
    .text('save');
    saveBtns.on("click", handleSave )
    container.append(dateRow);
    dateRow.append(timeCol, textCol, saveBtns);
  }
};

// event listener
function handleSave(e){
  var textBoxContents = e.target.previousElementSibling.value
  var timePosition = $(this).siblings(".hour").text()
  var scheduleDataObj = {
    time: timePosition,
    message: textBoxContents
  }
  schedule.push(scheduleDataObj)
  localStorage.setItem("schedule", JSON.stringify(schedule));
  // loadSchedule(scheduleDataObj)
}



// function loadSchedule(){
//   const schedule = JSON.parse(localStorage.getItem('schedule'))
//   if (schedule == null || schedule == "") {
//     timeRowIteration()
//   }
  
//   // loop through savedTasks array
//   for (var i = 0; i < schedule.length; i++) {
//     // pass each task object into the function that creates the row
//     timeRowIteration(schedule[i])
// }
//   console.log(schedule)
// }
timeRowIteration();