document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = getInputFiledValueById('add-money-input');
    const pinNumber = getInputFiledValueById('input-pin-number');

    if (isNaN(addMoney)) {
        return alert('Provide the valid number')
    }

    if (pinNumber === 1234) {
        const balance = getTexFiledValueById('main-balance');
        const newBalance = balance + addMoney;
        document.getElementById('main-balance').innerText = newBalance;

        // add transaction history
        const p = document.createElement('p');
        p.className = 'border';
        p.innerText = `
        Cash in: ${addMoney} tk. New Balance: ${newBalance}
        `
        document.getElementById('transaction-container').appendChild(p);



    } else {
        alert('Wrong pin number.')
    }
});