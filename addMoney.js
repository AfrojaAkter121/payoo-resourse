document.getElementById('add-money').addEventListener('click',function(event){
    event.preventDefault();
    const amount = document.getElementById('amount').value ;
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById('pin').value;
    const convertPin = parseInt(pin);
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedBalance = parseFloat(mainBalance);
    const accountNum = document.getElementById('account-input').value;
    const selector = document.getElementById('selector').value

    if(accountNum.length === 11 && pin.length ===4){
        if(convertPin === 4589){
            if(amount && selector ){
                const sum = convertedBalance + convertedAmount;
                document.getElementById('main-balance').innerText = sum;
                const amountValueHide = document.getElementById('amount');
                amountValueHide.value = '';             
            }else{
                alert('Enter Amount  and selector')
            }
           }
           else{
               alert('invalid pin')
           }
    }
    else{
        alert('Enter valid Account and pin')
    }
})