document.getElementById('add-money').addEventListener('click',function(event){
    event.preventDefault();
    const amount = document.getElementById('amount').value ;
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById('pin').value;
    const convertPin = parseInt(pin);
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedBalance = parseFloat(mainBalance);
    if(amount && pin){
        if(convertPin === 4589){
            const sum = convertedBalance + convertedAmount;
            document.getElementById('main-balance').innerText = sum;
            const amountValueHide = document.getElementById('amount');
            amountValueHide.value = '';
            
           }
           else{
               alert('invalid pin')
           }
    }
    else{
        alert('Enter amount and pin number')
    }
})