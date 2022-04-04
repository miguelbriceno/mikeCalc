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
      numbersChain = numbersChain.concat(key);
      $("#nums").text(numbersChain);
      break;

    case "2":
      numbersChain = numbersChain.concat(key);
      $("#nums").text(numbersChain);
      break;

    case "3":
      numbersChain = numbersChain.concat(key);
      $("#nums").text(numbersChain);
      break;

    case "4":
      numbersChain = numbersChain.concat(key);
      $("#nums").text(numbersChain);
      break;

    case "5":
      numbersChain = numbersChain.concat(key);
      $("#nums").text(numbersChain);
      break;

    case "6":
      numbersChain = numbersChain.concat(key);
      $("#nums").text(numbersChain);
      break;

    case "7":
      numbersChain = numbersChain.concat(key);
      $("#nums").text(numbersChain);
      break;

    case "8":
      numbersChain = numbersChain.concat(key);
      $("#nums").text(numbersChain);
      break;

    case "9":
      numbersChain = numbersChain.concat(key);
      $("#nums").text(numbersChain);
      break;

    case "0":
      numbersChain = numbersChain.concat(key);
      $("#nums").text(numbersChain);
      break;

    case ".":
      numbersChain = numbersChain.concat(key);
      $("#nums").text(numbersChain);
      break;

    case "Delete":
      numbersChain = "0";
      acumulate = 0;
      value = 0;
      lastOp = "";
      $("#nums").text(numbersChain);
      $("#memory").text(numbersChain);
      break;

    case "+":
      if (lastOp == "") {
        lastOp = "suma";
        acumulate = Number(numbersChain);
        $("#memory").text(acumulate);
        $("#nums").text("");
        numbersChain = "";
        break;
      } else {
        operation(lastOp, numbersChain);
        numbersChain = "";
        $("#nums").text(numbersChain);
        lastOp = "suma";
        break;
      }

    case "-":
      if (lastOp == "") {
        lastOp = "resta";
        acumulate = Number(numbersChain);
        $("#memory").text(acumulate);
        $("#nums").text("");
        numbersChain = "";
        break;
      } else {
        operation(lastOp, numbersChain);
        numbersChain = "";
        $("#nums").text(numbersChain);
        lastOp = "resta";
        break;
      }

    case "*":
      if (lastOp == "") {
        lastOp = "multiplicacion";
        acumulate = Number(numbersChain);
        $("#memory").text(acumulate);
        $("#nums").text("");
        numbersChain = "";
        break;
      } else {
        operation(lastOp, numbersChain);
        numbersChain = "";
        $("#nums").text(numbersChain);
        lastOp = "multiplicacion";
        break;
      }

      case "/":
        if (lastOp == "") {
          lastOp = "division";
          acumulate = Number(numbersChain);
          $("#memory").text(acumulate);
          $("#nums").text("");
          numbersChain = "";
          break;
        } else {
          operation(lastOp, numbersChain);
          numbersChain = "";
          $("#nums").text(numbersChain);
          lastOp = "division";
          break;
        }

      case "Enter":
        operation(lastOp, numbersChain);
        numbersChain = "0";
        lastOp = "";
        value = 0;
        $("#nums").text(numbersChain);
        numbersChain = acumulate;
        break;

      case "Backspace":
        numbersChain = numbersChain.slice(0, -1);
        $("#nums").text(numbersChain);
        break;

      default:
        break;
    }
});

// Function that execute the math operations
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

//Add event listener to all buttons and animate them
$("button").click(function() {
  $(this).addClass("btnPressed");
  setTimeout(function(){
    $("button").removeClass("btnPressed");
  },100);
  var btnPressed = $(this).attr("name");

  switch (btnPressed) {
    case "1":
      numbersChain = numbersChain.concat(btnPressed);
      $("#nums").text(numbersChain);
      break;

    case "2":
      numbersChain = numbersChain.concat(btnPressed);
      $("#nums").text(numbersChain);
      break;

    case "3":
      numbersChain = numbersChain.concat(btnPressed);
      $("#nums").text(numbersChain);
      break;

    case "4":
      numbersChain = numbersChain.concat(btnPressed);
      $("#nums").text(numbersChain);
      break;

    case "5":
      numbersChain = numbersChain.concat(btnPressed);
      $("#nums").text(numbersChain);
      break;

    case "6":
      numbersChain = numbersChain.concat(btnPressed);
      $("#nums").text(numbersChain);
      break;

    case "7":
      numbersChain = numbersChain.concat(btnPressed);
      $("#nums").text(numbersChain);
      break;

    case "8":
      numbersChain = numbersChain.concat(btnPressed);
      $("#nums").text(numbersChain);
      break;

    case "9":
      numbersChain = numbersChain.concat(btnPressed);
      $("#nums").text(numbersChain);
      break;

    case "0":
      numbersChain = numbersChain.concat(btnPressed);
      $("#nums").text(numbersChain);
      break;

    case "dot":
      numbersChain = numbersChain.concat(".");
      $("#nums").text(numbersChain);
      break;

    case "deleteAll":
      numbersChain = "0";
      acumulate = 0;
      value = 0;
      lastOp = "";
      $("#nums").text(numbersChain);
      $("#memory").text(numbersChain);
      break;

    case "equal":
      operation(lastOp, numbersChain);
      numbersChain = "0";
      lastOp = "";
      value = 0;
      $("#nums").text(numbersChain);
      numbersChain = acumulate;
      break;

    case "backDelete":
      numbersChain = numbersChain.slice(0, -1);
      $("#nums").text(numbersChain);
      break;

    case "plus":
      if (lastOp == "") {
        lastOp = "suma";
        acumulate = Number(numbersChain);
        $("#memory").text(acumulate);
        $("#nums").text("");
        numbersChain = "";
        break;
      } else {
        operation(lastOp, numbersChain);
        numbersChain = "";
        $("#nums").text(numbersChain);
        lastOp = "suma";
        break;
      }

    case "minus":
      if (lastOp == "") {
        lastOp = "resta";
        acumulate = Number(numbersChain);
        $("#memory").text(acumulate);
        $("#nums").text("");
        numbersChain = "";
        break;
      } else {
        operation(lastOp, numbersChain);
        numbersChain = "";
        $("#nums").text(numbersChain);
        lastOp = "resta";
        break;
      }

    case "multiply":
      if (lastOp == "") {
        lastOp = "multiplicacion";
        acumulate = Number(numbersChain);
        $("#memory").text(acumulate);
        $("#nums").text("");
        numbersChain = "";
        break;
      } else {
        operation(lastOp, numbersChain);
        numbersChain = "";
        $("#nums").text(numbersChain);
        lastOp = "multiplicacion";
        break;
      }

    case "divide":
      if (lastOp == "") {
        lastOp = "division";
        acumulate = Number(numbersChain);
        $("#memory").text(acumulate);
        $("#nums").text("");
        numbersChain = "";
        break;
      } else {
        operation(lastOp, numbersChain);
        numbersChain = "";
        $("#nums").text(numbersChain);
        lastOp = "division";
        break;
      }

    default:
      break;
  }
})
