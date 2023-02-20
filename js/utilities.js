
// FUNCTION FOR doing math product prices for PLUS
function updatingDomPricesPlus(idVl, idTotal, price){
    const phoneValue = getValue(idVl);
    const phoneTotal =  phoneValue +1;
    document.getElementById(idVl).value = phoneTotal;
    const phoneValueTwo = getValue(idVl);
    const phoneTotalText = setInnerText(idTotal);
    const phoneTotalTwo = price * phoneValueTwo;
    document.getElementById(idTotal).innerText = phoneTotalTwo;
    subTotalPrice();
}

// FUNCTION FOR doing math product prices for MINUS
function updatingDomPricesMinus(idVl, idTotal, price){
    const phoneValue = getValue(idVl);
    const phoneTotal =  phoneValue -1;
    document.getElementById(idVl).value = phoneTotal;
    const phoneValueTwo = getValue(idVl);
    const phoneTotalText = setInnerText(idTotal);
    const phoneTotalTwo = price * phoneValueTwo;
    document.getElementById(idTotal).innerText = phoneTotalTwo;
    subTotalPrice();
}

// FUNCTION FOR SET INNERTEXT FOR GET VALU TO UPDATING ANOTHER TEXT TO NUMBER CONVERT NUMBER WITH PARSEFLOAT
function setInnerText(id){
    const setextInner = document.getElementById(id);
    const textInner= setextInner.innerText;
    return parseFloat(textInner);
}


// FUNCTION FOR GET INPUT VALUE IN NUMBER CONVERTING 
function getValue(id){
    const htmlInput = document.getElementById(id);
    const valueInpt = htmlInput.value;
    return parseFloat(valueInpt);
}

// FUNCTION FOR SUB TOTAL PRICE VALUE PRINT ALL TOTAL ITEMS PRICES 
    function subTotalPrice(){
        const phoneTotalText = setInnerText('phone-total');
        const caseTotalText = setInnerText('case-total');
        const phoneTotal = phoneTotalText + caseTotalText;
        document.getElementById('sub-total').innerText = phoneTotal;
    
    }
