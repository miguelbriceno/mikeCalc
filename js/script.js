// Global variable
var numbersChain = "";
var memoryChain = "";
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

    case "+":
      lastOp = "suma";
      suma(numbersChain);
      numbersChain = "";
      $("#nums").text(numbersChain);
      break;

    case "-":
      lastOp = "resta";
      resta(numbersChain);
      numbersChain = "";
      $("#nums").text(numbersChain);
      break;

    case "*":
      lastOp = "multiplicacion";
      multiplicacion(numbersChain);
      numbersChain = "";
      $("#nums").text(numbersChain);
      break;

    case "/":
      lastOp = "division";
      division(numbersChain);
      numbersChain = "";
      $("#nums").text(numbersChain);
      break;


    case "Delete":
      numbersChain = "";
      memoryChain = "";
      acumulate = 0;
      value = 0;
      $("#nums").text(numbersChain);
      $("#memory").text(numbersChain);
      break;

    case "Enter":
      switch (lastOp) {
        case "suma":
          suma(numbersChain);
          numbersChain = "";
          $("#nums").text(numbersChain);
          break;

        case "resta":
          resta(numbersChain);
          numbersChain = "";
          $("#nums").text(numbersChain);
          break;

        case "multiplicacion":
          multiplicacion(numbersChain);
          numbersChain = "";
          $("#nums").text(numbersChain);
          break;

        case "division":
          division(numbersChain);
          numbersChain = "";
          $("#nums").text(numbersChain);
          break;

        default:
          break;
      }
      break;

    default:
      break;
  }
});

function suma(numOnDisplay) {
  value = Number(numOnDisplay);
  acumulate = acumulate + value;
  $("#memory").text(acumulate);
}

function resta(numOnDisplay) {
  value = Number(numOnDisplay);
  acumulate = acumulate - value;
  $("#memory").text(acumulate);
}

function multiplicacion(numOnDisplay) {
  value = Number(numOnDisplay);
  acumulate = acumulate * value;
  $("#memory").text(acumulate);
}

function division(numOnDisplay) {
  value = Number(numOnDisplay);
  acumulate = acumulate / value;
  $("#memory").text(acumulate);
}
