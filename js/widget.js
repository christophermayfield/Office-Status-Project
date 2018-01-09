$(document).ready(function() {
  var url = '../data/employees.json'; //path to json data
  $.getJSON(url, function (response) {

    var statusHTML = '<ul class="bulleted">';
    $.each(response, function(index, employee) {
      if(employee.inoffice === true) {
        statusHTML +='<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }

      statusHTML += employee.name + '</li>';
    }); //end loop

    statusHTML += '</ul>';
    $('#employeeList').html(statusHTML);
  }); //end JSON
}); //end ready
