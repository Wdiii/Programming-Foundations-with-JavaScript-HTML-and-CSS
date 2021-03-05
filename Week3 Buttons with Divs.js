function jschange() {
  alert("JS alert message")
}; 

function jsconfirm() {
  var message;
  var choice = confirm("Press a button!");
  if (choice == true) {
    message = "You pressed OK!";
    alert(message);
  } else {
    message = "Are you sure you want to cancel?";
    alert(message);
  }
}