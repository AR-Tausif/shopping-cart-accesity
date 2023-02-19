
// Calling EVENT Listener for Mobile Price Total math 
document.getElementById('btn-phone-minus').addEventListener('click', function(){
    updatingDomPricesMinus("phone-number-field", "phone-total", 1219);
})
document.getElementById('btn-phone-plus').addEventListener('click', function(){
    updatingDomPricesPlus("phone-number-field", "phone-total", 1219);
})

// Calling EVENT Listener for Mobile case Price Total math 


document.getElementById('btn-case-minus').addEventListener('click', function(){
    updatingDomPricesMinus("case-number-field", "case-total", 59);
})
document.getElementById('btn-case-plus').addEventListener('click', function(){
    updatingDomPricesPlus("case-number-field", "case-total", 59);
})