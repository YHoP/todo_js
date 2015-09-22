$(document).ready(function() {

  $("form#new-tasks").submit(function(event) {
  event.preventDefault();

  var inputtedTask = $("input#new-task").val();
  var tasks = { taskName: inputtedTask, completed: false};


  $("ul#toDo").append("<li><span class='tasks'>" + tasks.taskName + "</span></li>");

  $(".tasks").click(function() {
    tasks.completed = true;
    $("ul#completed").append("<li><span class='complete'>" + $(this).taskName + "</span></li>");
    $(this).remove();

  }); // end of tasks last() click



  $("input#new-task").val("");
  }); // end of new-tasks submit




}); // end of document
