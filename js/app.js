


document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const phoneValue = getValue("phone-number-field");
    const phoneTotalText = setInnerText('phone-total');
    const phoneTotal = phoneTotalText * phoneValue;
    document.getElementById('phone-total').innerText = phoneTotal;
})


document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const phoneValue = getValue("phone-number-field");
    const phoneTotalText = setInnerText('phone-total');
    const phoneTotal = phoneTotalText * phoneValue;
    document.getElementById('phone-total').innerText = phoneTotal;

})


function inputChanging(){
    const phoneValue = getValue("phone-number-field");
    const phoneTotalText = setInnerText('phone-total');
    const phoneTotal = phoneTotalText * phoneValue;
    console.log(phoneTotal, phoneTotal);
}
function setInnerText(id){
    const setextInner = document.getElementById(id);
    const textInner= setextInner.innerText;
    return parseFloat(textInner);
}
function getValue(id){
    const htmlInput = document.getElementById(id);
    const valueInpt = htmlInput.value;
    return parseFloat(valueInpt);
}



