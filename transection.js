document.getElementById('transaction-history-box').addEventListener('click',
    function(){
     handleToggle('addmoney','none');
     handleToggle('cashout','none');
     handleToggle('transaction-history','block');
     handleToggle('latest-payment','block');
     handleToggle('Pay-Bill','none');
     handleToggle('transfer-money' , 'none')
     handleToggle('get-bonus' , 'none')
    }
)