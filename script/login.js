 document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();
    const accountNum = document.getElementById('account-input').value ;

    const pin = document.getElementById('pin-input').value;
    const convertPin = parseInt(pin);
    if(accountNum.length === 11){
        if(convertPin === 4589){
            window.location.href = 'main.html'
        }
    }
    else{
        alert('need valid account number');
    }
})
