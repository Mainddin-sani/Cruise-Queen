var firstClassRent = parseInt(document.getElementById('first-class-cost').innerText);
var economyClassRent = parseInt(document.getElementById('economy-class-cost').innerText);

function getInputElement() {
    var getInputElement = document.getElementById('flyFrom').value;
    document.getElementById('flyingForm').innerText = getInputElement;

    var getInputElement = document.getElementById('flyTo').value;
    document.getElementById('flyingTo').innerText = getInputElement;

    var getInputElement = document.getElementById('departure').value;
    document.getElementById('departure-date').innerText = getInputElement;

    var getInputElement = document.getElementById('return').value;
    document.getElementById('return-date').innerText = getInputElement;


    var firstClassCostValue = getInputHistory('first');
    var economyClassCostValue = getInputHistory('economy');
    var subtotal = firstClassCostValue * firstClassRent + economyClassCostValue * economyClassRent;
    document.getElementById('subtotal').innerText = subtotal;
    var CountryVat = 0.1 * subtotal;
    document.getElementById('vat').innerText = CountryVat;
    var grandTotal = subtotal + CountryVat;
    document.getElementById('grand-total').innerText = grandTotal;

    document.getElementById('subTotal').innerText = subtotal;

    document.getElementById('Vat-chagre').innerText = CountryVat;

    document.getElementById('Total-calc').innerText = grandTotal;

    var getInputElement = document.getElementById('first-class-history').value;
    document.getElementById('first-class').innerText = getInputElement;
    var getInputElement = document.getElementById('economy-class-history').value;
    document.getElementById('economy-class').innerText = getInputElement;

    document.getElementById('first-class-Fixed-price').innerText = firstClassRent;
    document.getElementById('economy-class-Fixed-price').innerText = economyClassRent;

    document.getElementById('first-class-Fixed-price-total').innerText = firstClassCostValue * firstClassRent;

    document.getElementById('economy-class-Fixed-price-total').innerText =  economyClassCostValue * economyClassRent;

    
    console.log(firstClassCostValue);

    

    
}




console.log(getInputElement);

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
    console.log(incrementValue);
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

