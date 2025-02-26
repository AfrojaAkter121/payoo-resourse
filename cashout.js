document.getElementById('cash-out-box').addEventListener('click',
    function(){
     handleToggle('addmoney','none');
     handleToggle('cashout','block');
     handleToggle('transaction-history','none');

    }
)

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

        if(convertedAmount > convertedBalance){
            alert('Invalid Amount');
            return;
        }

    if(accountNum.length === 11 && pin.length === 4){
        if(convertPin === 4589){
            if(amount){
                const sum = convertedBalance - convertedAmount;
                document.getElementById('main-balance').innerText = sum;
                const amountValueHide = document.getElementById('cashout-amount');
                amountValueHide.value = '';

                const container = document.getElementById('transaction-container');
                const div = document.createElement('div');
                div.classList.add('bg-red-200')
                div.classList.add('mt-5')

                div.innerHTML = `
                <h1> Cash Out : ${amount} </h1>
                <h2> from this Account Number : ${accountNum} </h2>
                `
                container.appendChild(div)


                
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