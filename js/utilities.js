
// FUNCTION FOR SET INNERTEXT FOR GET VALU TO UPDATING ANOTHER TEXT TO NUMBER CONVERT N
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