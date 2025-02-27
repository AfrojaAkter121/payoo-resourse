document.getElementById('transfer-box').addEventListener('click',
    function(){
     handleToggle('addmoney','none');
     handleToggle('cashout','none');
     handleToggle('transaction-history','none');
     handleToggle('latest-payment','none');
     handleToggle('Pay-Bill','none');
     handleToggle('transfer-money' , 'block')
     handleToggle('get-bonus' , 'none')
    }
)

document.getElementById('transfermoney-btn').addEventListener('click',
    function(event){
        event.preventDefault();
        const amount = getInputValueById('tansfer-amount');
        const accountNum = document.getElementById('transfer-account').value;
        const pin = getInputValueById('transfer-pin');
        const mainBalance = getStringValueById('main-balance');

        if(amount > mainBalance){
            alert('Please Enter Positive Amount')
            return;
        }
        if(accountNum.length === 11 && pin){
            if(pin === 4589){
                if(amount){
                    const sum = mainBalance - amount;
                    document.getElementById('main-balance').innerText = sum;

                    const amountValueHide = document.getElementById('tansfer-amount');
                    amountValueHide.value = '';
                    const pinHide =  document.getElementById('transfer-pin');
                    pinHide.value = ''

                    const container = document.getElementById('transaction-container');
                    const div = document.createElement('div');
                    div.classList.add('bg-yellow-200')
                    div.classList.add('mt-5');
                    div.classList.add('p-4');
    
                    div.innerHTML = `
                    <h1> Transfer Amount : ${amount} </h1>
                    <h2> from this Account Number : ${accountNum} </h2>
                    `
                    container.appendChild(div)
    
                }
                else{
                    alert('Please Enter Amount')
                }
            }
            else{
                alert('Invalid Pin')
            }
        }
        else{
            alert('Enter Valid Account Number And Pin')
        }
    }
)