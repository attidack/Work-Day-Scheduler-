var time = [9,10,11,12,1,2,3,4,5]
var container = $('.container')
// time array,
for (const timeStep of time) {
    var dateRow = $("<div>")
    .addClass("row time-block");
    var timeCol =$("<div>")
    .text('time')
    .addClass("col-1 hour");
    var textCol = $('<div>')
    .addClass("col-10 description")
    .attr("id", "textarea")
    .text('message');
    var saveBtns = $('<div>')
    .addClass("col-1 saveBtn")
    .text('save');
    container.append(dateRow);
    dateRow.append(timeCol, textCol, saveBtns);
    console.log("1")
    
  }
  