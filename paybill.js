document.getElementById('bill-box').addEventListener('click',
    function(){
     handleToggle('addmoney','none');
     handleToggle('cashout','none');
     handleToggle('transaction-history','none');
     handleToggle('latest-payment','none');
     handleToggle('Pay-Bill','block');
     handleToggle('transfer-money' , 'none')
     handleToggle('get-bonus' , 'none')
    }
)


document.getElementById('pay-bill-btn').addEventListener('click',
    function(event){
        event.preventDefault();
        const amount = getInputValueById('pay-amount') ;
        const pin = getInputValueById('pay-pin');
        const mainBalance = getStringValueById('main-balance');
        const accountNum = document.getElementById('pay-acount').value;
        const allpayaccount = document.getElementById('allpayaccount').value
    
    
        if(amount > mainBalance){
            alert('Please added positive amount ');
            return;
        }
    
        if(accountNum.length === 11){
            if(pin === 4589){
                if(amount){
                    const sum = mainBalance - amount;
                    document.getElementById('main-balance').innerText = sum;
                    const amountValueHide = document.getElementById('pay-amount');
                    amountValueHide.value = '';
    
                    const container = document.getElementById('transaction-container');
                    const div = document.createElement('div');
                    div.classList.add("bg-pink-200")
                    div.classList.add('mt-5');
                    div.classList.add('p-4');
    
                    div.innerHTML =`
                    <h1 class = 'text to-blue-700'> Pay Bill From : ${allpayaccount} </h1>
                    <h3>Balance : ${amount}</h3>
                    <p> Account Number : ${accountNum} </p>
                    `
                    container.appendChild(div);
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