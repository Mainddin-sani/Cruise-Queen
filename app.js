const first_class_rent = parseInt(getMyElement('first-class-cost').innerText);
const economy_class_rent = parseInt(getMyElement('economy-class-cost').innerText);
const vat_percentage = 10;

// Get ElementBy Function
function getMyElement(element_id) {
    return document.getElementById(element_id);
}

// Get input value Number & string
function getInputValueById(element_id, is_return_type_number = true) {
    let get_element = getMyElement(element_id);

    if (is_return_type_number) {
        return parseInt(get_element.value);
    } else {
        return get_element.value;
    }
}

// All input Value & calculation function
function getInputElement() {
    getMyElement('flyingForm').innerText = getInputValueById('flyFrom', false);
    getMyElement('flyingTo').innerText = getInputValueById('flyTo', false);
    getMyElement('departure-date').innerText = getInputValueById('departure', false);
    getMyElement('return-date').innerText = getInputValueById('return', false);

    let first_class_qty = getInputValueById('first-class-history');
    let economy_class_qty = getInputValueById('economy-class-history');

    getMyElement('first-class').innerText = first_class_qty;
    getMyElement('first-class-Fixed-price').innerText = first_class_rent;
    getMyElement('first-class-Fixed-price-total').innerText = first_class_qty * first_class_rent;

    getMyElement('economy-class').innerText = economy_class_qty;
    getMyElement('economy-class-Fixed-price').innerText = economy_class_rent;
    getMyElement('economy-class-Fixed-price-total').innerText =  economy_class_qty * economy_class_rent;

    
    getMyElement('invoice-sub-total').innerText = getSubtotal();
    getMyElement('invoice-vat').innerText = getVat();
    getMyElement('invoice-total').innerText = getTotal();  
}


// count handler function
function countHandler(isIncrement, input_id) {
    var inputValue = getInputValueById(input_id);
    var incrementValue = inputValue;
    // increment & decrement condition 
    if (isIncrement) {
        incrementValue = inputValue + 1;
    } else {
        if ((inputValue - 1) < 0) {
            incrementValue = 0;
        } else {
            incrementValue = inputValue - 1;
        }
    }
     // set input value
     getMyElement(input_id).value = incrementValue;

    calculateCost();
}


// Sub Total calculate
function getSubtotal() {
    let first_class_cost_value = getInputValueById('first-class-history');
    let economy_class_cost_value = getInputValueById('economy-class-history');

    let subtotal = first_class_cost_value * first_class_rent + economy_class_cost_value * economy_class_rent;

    return subtotal;
}

// vat percentage calculate
function getVat() {
    let calculated_vat_percentage = vat_percentage / 100;
    let vat = calculated_vat_percentage * getSubtotal();

    return vat;
}

// Grand Total
function getTotal() {
    return getSubtotal() + getVat();
}


// total calculation math & set subTotal , VAT , Grand Total
function calculateCost() {
    getMyElement('subtotal').innerText = getSubtotal();

    getMyElement('vat').innerText =  getVat();

    getMyElement('grand-total').innerText = getTotal();
}

