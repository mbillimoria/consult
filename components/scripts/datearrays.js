var dateFormat = require('dateformat');

function getDateArray(type) {
  //Get the current Date
  currentDate = new Date();
  var dateArray = [];

  //Determine the type needed to return
  // w = This week
  // m = This month

  if (type == "w") {

    //Find Monday of that week
    var day = currentDate.getDay();
    var diff = currentDate.getDate() - day + (day == 0 ? -6:1);
    var MondayOfThisWeek = new Date(currentDate.setDate(diff));

    //Populate the array with the 5 days of the week
    var nextDay = new Date();
    for (i=0; i < 5; i++) {
      nextDay = new Date(nextDay.setDate(MondayOfThisWeek.getDate()+i));
      dateArray[i] = dateFormat(nextDay, "dd-mm");
      nextDay = new Date();
    }
  } else if (type =="m") {

  }

  //return
  return dateArray;
}

document.getElementById("test").innerHTML = "Values were: " + getDateArray("w");
