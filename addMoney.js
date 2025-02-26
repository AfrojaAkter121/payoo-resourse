document.getElementById('add-money-box').addEventListener('click',
    function(){
     handleToggle('addmoney','block');
     handleToggle('cashout','none');
     handleToggle('transaction-history','none');
     handleToggle('latest-payment','none');
     handleToggle('Pay-Bill','none');
     handleToggle('transfer-money' , 'none')
     handleToggle('get-bonus' , 'none')
    }
)

document.getElementById('add-money').addEventListener('click',function(event){
    event.preventDefault();
    const amount = document.getElementById('amount').value ;
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById('pin').value;
    const convertPin = parseInt(pin);
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedBalance = parseFloat(mainBalance);
    const accountNum = document.getElementById('account-input').value;
    const selectBank = document.getElementById('allBank').value


    if(amount < 0){
        alert('Please added positive number ');
        return;
    }

    if(accountNum.length === 11 && pin.length ===4){
        if(convertPin === 4589){
            if(amount){
                const sum = convertedBalance + convertedAmount;
                document.getElementById('main-balance').innerText = sum;
                const amountValueHide = document.getElementById('amount');
                amountValueHide.value = '';

                const container = document.getElementById('transaction-container');
                const div = document.createElement('div');
                div.classList.add("bg-blue-200")
                div.classList.add('mt-5');
                div.classList.add('p-4');

                div.innerHTML =`
                <h1 class = 'text to-blue-700'> Added Money From : ${selectBank} </h1>
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