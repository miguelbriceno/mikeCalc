// Global variable
var numbersChain = "";
var value = 0;
var acumulate = 0;
var equalPressed = false;
var lastOp = "";


// Eventlistener for number keys
$(document).keydown(function(e) {
  var key = e.key;

  switch (key) {
    case "1":
      drawNumber(key);
      animateBtn(key);
      break;

    case "2":
      drawNumber(key);
      animateBtn(key);
      break;

    case "3":
      drawNumber(key);
      animateBtn(key);
      break;

    case "4":
      drawNumber(key);
      animateBtn(key);
      break;

    case "5":
      drawNumber(key);
      animateBtn(key);
      break;

    case "6":
      drawNumber(key);
      animateBtn(key);
      break;

    case "7":
      drawNumber(key);
      animateBtn(key);
      break;

    case "8":
      drawNumber(key);
      animateBtn(key);
      break;

    case "9":
      drawNumber(key);
      animateBtn(key);
      break;

    case "0":
      drawNumber(key);
      animateBtn(key);
      break;

    case ".":
      drawNumber(key);
      animateBtn("dot");
      break;

    case "Delete":
      animateBtn("deleteAll");
      eraseAll();
      break;

    case "+":
      animateBtn("plus");
      callSuma();
      break;

    case "-":
      animateBtn("minus");
      callResta();
      break;

    case "*":
      animateBtn("multiply");
      callMultiply();
      break;

    case "/":
      animateBtn("divide");
      callDivide();
      break;

    case "Enter":
      animateBtn("equal");
      callEqual();
      break;

    case "Backspace":
      animateBtn("backDelete");
      callErase();
      break;

    default:
      break;
    }
});

//Add event listener to all buttons and animate them
$("button").click(function() {
  var btnPressed = $(this).attr("name");
  var toAnimate = $(this).attr("id");
  animateBtn(toAnimate);

  switch (btnPressed) {
    case "1":
      drawNumber(btnPressed);
      break;

    case "2":
      drawNumber(btnPressed);
      break;

    case "3":
      drawNumber(btnPressed);
      break;

    case "4":
      drawNumber(btnPressed);
      break;

    case "5":
      drawNumber(btnPressed);
      break;

    case "6":
      drawNumber(btnPressed);
      break;

    case "7":
      drawNumber(btnPressed);
      break;

    case "8":
      drawNumber(btnPressed);
      break;

    case "9":
      drawNumber(btnPressed);
      break;

    case "0":
      drawNumber(btnPressed);
      break;

    case ".":
      drawNumber(btnPressed);
      break;

    case "deleteAll":
      eraseAll();
      break;

    case "equal":
      callEqual();
      break;

    case "backDelete":
      callErase();
      break;

    case "plus":
      callSuma();
      break;

    case "minus":
      callResta();
      break;

    case "multiply":
      callMultiply();
      break;

    case "divide":
      callDivide();
      break;

    default:
      break;
  }
})

// Function to draw numbers on screen
function drawNumber(number){
  numbersChain = numbersChain.concat(number);
  $("#nums").text(numbersChain);
}

// Function to animate buttons
function animateBtn(btn){
  btn = "#" + btn;
  $(btn).addClass("btnPressed");
  setTimeout(function(){
    $(btn).removeClass("btnPressed");
  },100);
}

// Functions to erase
function callErase(){
  numbersChain = numbersChain.slice(0, -1);
  $("#nums").text(numbersChain);
}

function eraseAll(){
  numbersChain = "0";
  acumulate = 0;
  value = 0;
  lastOp = "";
  $("#nums").text(numbersChain);
  $("#memory").text(numbersChain);
}

// Function that execute the math operations
function callEqual(){
  operation(lastOp, numbersChain);
  numbersChain = "0";
  lastOp = "";
  value = 0;
  $("#nums").text(numbersChain);
  numbersChain = acumulate;
}

function callSuma(){
  if (lastOp == "") {
    lastOp = "suma";
    acumulate = Number(numbersChain);
    $("#memory").text(acumulate);
    $("#nums").text("");
    numbersChain = "";
  } else {
    operation(lastOp, numbersChain);
    numbersChain = "";
    $("#nums").text(numbersChain);
    lastOp = "suma";
  }
}

function callResta() {
  if (lastOp == "") {
    lastOp = "resta";
    acumulate = Number(numbersChain);
    $("#memory").text(acumulate);
    $("#nums").text("");
    numbersChain = "";
  } else {
    operation(lastOp, numbersChain);
    numbersChain = "";
    $("#nums").text(numbersChain);
    lastOp = "resta";
  }
}

function callMultiply() {
  if (lastOp == "") {
    lastOp = "multiplicacion";
    acumulate = Number(numbersChain);
    $("#memory").text(acumulate);
    $("#nums").text("");
    numbersChain = "";
  } else {
    operation(lastOp, numbersChain);
    numbersChain = "";
    $("#nums").text(numbersChain);
    lastOp = "multiplicacion";
  }
}

function callDivide(){
  if (lastOp == "") {
    lastOp = "division";
    acumulate = Number(numbersChain);
    $("#memory").text(acumulate);
    $("#nums").text("");
    numbersChain = "";
  } else {
    operation(lastOp, numbersChain);
    numbersChain = "";
    $("#nums").text(numbersChain);
    lastOp = "division";
  }
}

function operation(operation, numOnDisplay) {
  switch (operation) {
    case "suma":
    value = Number(numOnDisplay);
    acumulate = acumulate + value;
    $("#memory").text(acumulate);
    break;

    case "resta":
    value = Number(numOnDisplay);
    acumulate = acumulate - value;
    $("#memory").text(acumulate);
    break;

    case "multiplicacion":
    value = Number(numOnDisplay);
    acumulate = acumulate * value;
    $("#memory").text(acumulate);
    break;

    case "division":
    value = Number(numOnDisplay);
    acumulate = (acumulate / value);
    $("#memory").text(acumulate);
    break;

    default:
    break;
  }
}
