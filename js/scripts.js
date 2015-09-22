$(document).ready(function() {
  var taskList = [];

  $("form#new-tasks").submit(function(event) {
  event.preventDefault();

  var task = $("input#new-task").val();
  taskList.push(task);
  // var tasks = { taskName: inputtedTask, completed: false};
  
  $("ul#toDo").append("<span class='tasks'><li>" + taskList[taskList.length-1] + "</li></span>");
  
  $(".tasks").click(function() {
    $(this).remove();
    $(this).appendTo("ul#completed");
  }); // end of tasks last() click

  $("input#new-task").val("");
  }); // end of new-tasks submit

}); // end of document
