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

function jschangecolor() {
  var div1 = document.getElementById("div1");
  var div2 = document.getElementById("div2");
  div1.className="orangeback";
  div2.className="greenback";
}

function jschangetext() {
  var text1 = document.getElementById("div1");
  var text2 = document.getElementById("div2");
  div1.innerHTML="Hello";
  div2.innerHTML="World";
}

function jschangevalue(el) {
  if ( el.value == "Change value" ) { 
    el.value = "Changed!!!";
  } else {
    el.value = "Change value";
  }
}