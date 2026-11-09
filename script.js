function getBalance() {
    return Number(document.getElementById("balance").innerText); // Retrieve the value of balance and convert it to Number()
}

function printBalance(num) {
    document.getElementById("balance").innerText = num; // Sets the value of balance equal to num (whatever value is passed through it)
}

function getAmount() {
    return Number(document.getElementById("amount").value); // Retrieves amount/value entered in input
}

function showMessage(msg) {
    document.getElementById("message").innerText = msg; // shows a message like transaction successful or failed.
}

function clearAmount() {
    document.getElementById("balance").value = ""; // sets balance to nothing
}
function isAmountValid() { 
    var typed = document.getElementById("amount").value;
    if (typed == "") {
        showMessage("Please enter an amount.") // checks if 'typed' is empty
        return false;
    } else if (Number(typed) <= 0) {
        showMessage("Please enter an amount greater than 0.") // checks if 'typed' is less than zero
        return false;
    } else {
        return;
    }
};
document.getElementById("credit-btn").addEventListener("click", function () {
    if (isAmountValid() == false) {
        return;
    }
    var amount = getAmount();
    var newbalance = getBalance() + amount;
    printBalance(newbalance)
    showMessage("Transaction successful.")
    clearAmount();
});

document.getElementById('debit-btn').addEventListener('click', function(){
    if (isAmountValid() == false) {
        return
    }
    var amount = getAmount();
    if (amount > getBalance()) {
        showMessage("Not enough Balance");
        return;
    }
    var newbalance = getBalance() - amount;
    printBalance(newbalance)
    showMessage('Transaction successful.')
    clearAmount();
});