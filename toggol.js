document.getElementById('addmoney').style.display = 'none'
document.getElementById('cashout').style.display = 'none'
document.getElementById('Pay-Bill').style.display = 'none'
document.getElementById('transaction-history').style.display = 'none'


  function handleToggle(id,status){
    document.getElementById(id).style.display = status;
}

// document.getElementById('add-money-box').addEventListener('click',
//     function(){
//         document.getElementById('addmoney').style.display = 'block'
//         document.getElementById('cashout').style.display = 'none'
//           document.getElementById('transaction-history').style.display = 'none'
//     }
// )

// document.getElementById('cash-out-box').addEventListener('click',
//     function(){
//         document.getElementById('cashout').style.display = 'block'
//         document.getElementById('addmoney').style.display = 'none'
//           document.getElementById('transaction-history').style.display = 'none'
//     }
// )
// document.getElementById('transaction-history-box').addEventListener('click',
//     function(){
//         document.getElementById('cashout').style.display = 'none'
//         document.getElementById('addmoney').style.display = 'none'
//         document.getElementById('transaction-history').style.display = 'block'
//     }
// )

               