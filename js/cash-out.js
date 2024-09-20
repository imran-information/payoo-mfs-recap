document.getElementById('cash-out-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const cashOut = getInputFiledValueById('cash-out-input');
    const pinNumber = getInputFiledValueById('cash-out-pin-number');

    if (isNaN(cashOut)) {
        return alert('Provide the valid number')
    }



    if (pinNumber === 1234) {
        const balance = getTexFiledValueById('main-balance');
        if (cashOut > balance) {
           return alert('Your Account balance low')
        }
        const newBalance = balance - cashOut;
        document.getElementById('main-balance').innerText = newBalance;

        // add transaction history
        const div = document.createElement('div');
        div.innerHTML = `
        <p>Cash Out: ${cashOut}  New Balance: ${newBalance};    
        `
        document.getElementById('transaction-container').appendChild(div);
    } else {
        alert('Wrong Pin Number.')
    }


})