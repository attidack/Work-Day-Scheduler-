var time = [9,10,11,12,1,2,3,4,5]
var container = $('.container')
var timeAmPm = $('.hour').text("9")
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

function handleSave(e){
  var textBoxContents = e.target.previousElementSibling.value
  var timePosition = $(this).siblings(".hour").text()
  var localid = $(this).parent("div").attr("data-row-id")
  var scheduleDataObj =  {
    id: localid,
    time: timePosition,
    message: textBoxContents
  }
  localStorage.setItem(localid, JSON.stringify(scheduleDataObj));
}



function loadSchedule(scheduleDataObj){
  const schedule = JSON.parse(localStorage.getItem('9'))
  if (schedule == null || schedule == "") {
    timeRowIteration()
  }else{
    $('.hour')
    // for (let index = 0; index < schedule.length; index++) {
    //   const element = array[index];
      
    // }
    timeRowIteration()

  }
  // if (schedule.id = ) {
    
  // }
  

  console.log(timeAmPm)
}
loadSchedule();