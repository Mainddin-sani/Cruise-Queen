var firstClassRent = parseInt(document.getElementById('first-class-cost').innerText);
var economyClassRent = parseInt(document.getElementById('economy-class-cost').innerText);

// get input value
function getInputHistory(inputName) {
    var getInputName = document.getElementById(inputName + '-class-history');
    var getInputValue = parseInt(getInputName.value);
    return getInputValue;
}


// count handler function
function countHandler(isIncrement, inputName) {
    var inputValue = getInputHistory(inputName);
    var incrementValue = inputValue;
    // increment & decrement condition 
    if (isIncrement) {
        var incrementValue = inputValue + 1;
    } else {
        var incrementValue = inputValue - 1;
        if (incrementValue < 0) {
            var incrementValue = 0;
        }
    }
     // set input value
    document.getElementById(inputName + "-class-history").value = incrementValue;
    calculateCost();
}


// total calculation math & set subTotal , VAT , Grand Total set
function calculateCost() {
    var firstClassCostValue = getInputHistory('first');
    var economyClassCostValue = getInputHistory('economy');
    var subtotal = firstClassCostValue * firstClassRent + economyClassCostValue * economyClassRent;
    document.getElementById('subtotal').innerText = subtotal;
    var CountryVat = 0.1 * subtotal;
    document.getElementById('vat').innerText = CountryVat;
    var grandTotal = subtotal + CountryVat;
    document.getElementById('grand-total').innerText = grandTotal;
}

