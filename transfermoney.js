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