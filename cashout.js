document.getElementById('cash-out-btn').addEventListener('click',
    function(event){
        event.preventDefault();
    const pin = document.getElementById('cashout-pin').value;
    const convertPin = parseInt(pin);
    const amount = document.getElementById('cashout-amount').value ;
    const convertedAmount = parseFloat(amount);
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedBalance = parseFloat(mainBalance);
    const accountNum = document.getElementById('account-No').value;
    if(accountNum.length === 11 && pin.length === 4){
        if(convertPin === 4589){
            if(amount){
                const sum = convertedBalance - convertedAmount;
                document.getElementById('main-balance').innerText = sum;
                const amountValueHide = document.getElementById('cashout-amount');
                amountValueHide.value = '';
                
            }else{
                alert('Enter Amount')
            }
           }
           else{
               alert('invalid pin')
           }
    }
    else{
        alert('Enter valid account number and pin')
    }
    }
)