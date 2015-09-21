$(document).ready(function() {

  $("form#new-tasks").submit(function(event) {
  event.preventDefault();

  var inputtedTask = $("input#new-task").val();
  var tasks = { taskName: inputtedTask, completed: false};

  $("ul#toDo").append("<li><span class='glyphicon glyphicon-star'></span> <span class='tasks'>" + tasks.taskName + "</span></li>");

  $(".tasks").last().click(function() {
    tasks.completed = true;

    $("ul#completed").append("<li><span class='glyphicon glyphicon-ok'></span>  <span class='complete'>" + tasks.taskName + "</span></li>");

    $(".class").remove();

  }); // end of tasks last() click

  $("input#new-task").val("");
  }); // end of new-tasks submit




}); // end of document
