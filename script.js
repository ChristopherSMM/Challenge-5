$(document).ready(function () {

  var inputAnswer = $('.saveBtn')
  var buttonEL = $('button')
  $(buttonEL).on('click', saveData());

  function getData(i) {
    console.log("get", i);
    return JSON.parse(localStorage.getItem(i));
  }
  function saveData(i, v) {
    console.log("save", i, v);
    localStorage.setItem(i, JSON.stringify(v));
  }
  var currentHour = dayjs();

  $(".time-block").each(function () {
    var blockhour = parseInt($(this).attr("id").split("-")[1]);

    if (blockhour < currentHour) {
      $(this).addClass("past");
    } else if (blockhour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });

  // TODO: Add code to display the current date in the header of the page.
  //had trouble with this piece so i hope it works
  $("#currentHour").text(dayjs().format("hh:mm:ss a"))
  $("#currentDay").text(dayjs().format("MMM DD, YYYY"))
})
  ;