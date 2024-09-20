function getInputFiledValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;


};

function getTexFiledValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
};


// fitures related
function showFunctionById(id) {
    document.getElementById('show-add-money-from').classList.add('hidden');
    document.getElementById('show-cash-out-from').classList.add('hidden');
    document.getElementById('transaction-histroy').classList.add('hidden');

    // show 
    document.getElementById(id).classList.remove('hidden');
}
