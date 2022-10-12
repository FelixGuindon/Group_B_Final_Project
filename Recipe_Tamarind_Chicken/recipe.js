var ingredient1Value = 2.0;
var ingredient2Value = 0.5;
var ingredient3Value = 3.0;
var ingredient4Value = 2.0;
var ingredient5Value = 1.0;
var ingredient6Value = 1.0;
var ingredient7Value = 1.0;
var ingredient8Value = 1.0;

function calcPortion() {
    var portion = parseFloat(document.getElementById("portionValue").value);
    console.log(portion);
    portion = Math.round(portion * 10) / 10;
    console.log(portion);

    if (portion <= 0) {
        alert("Value Cannot Be Less Than 0")
    } else if (portion >= 100) {
        alert("Value Cannot Be More Than 100")
    } else {
        document.getElementById("ingredient1Value").textContent = Math.round((ingredient1Value * portion) * 100) /100;
        document.getElementById("ingredient2Value").textContent = Math.round((ingredient2Value * portion) * 100) /100;
        document.getElementById("ingredient3Value").textContent = Math.round((ingredient3Value * portion) * 100) /100;
        document.getElementById("ingredient4Value").textContent = Math.round((ingredient4Value * portion) * 100) /100;
        document.getElementById("ingredient5Value").textContent = Math.round((ingredient5Value * portion) * 100) /100;
        document.getElementById("ingredient6Value").textContent = Math.round((ingredient6Value * portion) * 100) /100;
        document.getElementById("ingredient7Value").textContent = Math.round((ingredient7Value * portion) * 100) /100;
        document.getElementById("ingredient8Value").textContent = Math.round((ingredient8Value * portion) * 100) / 100;
        // Math.round (num * 100) / 100 ----- round so a number can only have two decimals
        document.getElementById("portionSizeValue").textContent = portion;
        // reset input on button click
        document.getElementById("portionValue").value = '';
    }
}