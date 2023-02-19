


document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const phoneValue = getValue("phone-number-field");
    const phoneTotal =  phoneValue - 1;
    document.getElementById('phone-number-field').value = phoneTotal;
    const phoneValueTwo = getValue("phone-number-field");
    const phoneTotalText = setInnerText('phone-total');
    const phoneTotalTwo = 1219 * phoneValueTwo;
    // const phoneTotal = phoneTotalText * phoneValue;
    document.getElementById('phone-total').innerText = phoneTotalTwo;
})



document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const phoneValue = getValue("phone-number-field");
    const phoneTotal =  phoneValue +1;
    document.getElementById('phone-number-field').value = phoneTotal;
    const phoneValueTwo = getValue("phone-number-field");
    const phoneTotalText = setInnerText('phone-total');
    const phoneTotalTwo = 1219 * phoneValueTwo;
    // const phoneTotal = phoneTotalText * phoneValue;
    document.getElementById('phone-total').innerText = phoneTotalTwo;
    subTotalPrice()

})




