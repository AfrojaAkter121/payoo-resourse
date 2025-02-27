document.getElementById('bonus-box').addEventListener('click',
    function(){
     handleToggle('addmoney','none');
     handleToggle('cashout','none');
     handleToggle('transaction-history','none');
     handleToggle('latest-payment','none');
     handleToggle('Pay-Bill','none');
     handleToggle('transfer-money' , 'none')
     handleToggle('get-bonus' , 'block')
    }
)

document.getElementById('getbonus-btn').addEventListener('click',function(event){
    event.preventDefault();
    const amount = getInputValueById('getbonus-amount') ;
    const mainBalance = getStringValueById('main-balance');

    if(amount){
        const sum = mainBalance + amount;
        document.getElementById('main-balance').innerText = sum;

        document.getElementById('getbonus-amount').value = '';

        const container = document.getElementById('transaction-container');
                const div = document.createElement('div');
                div.classList.add("bg-green-200")
                div.classList.add('mt-5');
                div.classList.add('p-4');

                div.innerHTML =`
                <h3>Get Bonus Add : ${amount}</h3>
                `
                container.appendChild(div);
    }
    else{
        alert('Enter Get Bonus Balance');
    }
})