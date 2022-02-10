function getInputValue(inputId) {
  const depositInput = document.getElementById(inputId);
  const depositAmountText = depositInput.value;
  depositInput.value = "";
  const depositAmount = parseFloat(depositAmountText);
  return depositAmount;
}

function updateTotalField(totalField, amount) {
  const deposit = document.getElementById(totalField);
  const depositTotalText = deposit.innerText;
  const previousDepositTotal = parseFloat(depositTotalText);
  deposit.innerText = previousDepositTotal + amount;
  return deposit;
}

function getCurrentBalance() {
  const totalBalance = document.getElementById("balace-total");
  const totalBalanceText = totalBalance.innerText;
  const previousBalance = parseFloat(totalBalanceText);
  return previousBalance;
}

function updateBalance(amount, isAdd) {
    const totalBalance = document.getElementById("balace-total");
    const previousBalance = getCurrentBalance()

  if (isAdd == true) {
    totalBalance.innerText = previousBalance + amount;
  } else {
    totalBalance.innerText = previousBalance - amount;
  }
}

document
  .getElementById("deposit-submit")
  .addEventListener("click", function () {
    const depositAmount = getInputValue("deposit-input");
    if (depositAmount > 0) {
      updateTotalField("deposit-total", depositAmount);
      updateBalance(depositAmount, true);
    }
  });

document
  .getElementById("withdraw-submit")
  .addEventListener("click", function () {
    const totalWithdrawAmount = getInputValue("withdraw-input");
    const currentBalance = getCurrentBalance();
    if (totalWithdrawAmount > 0 && totalWithdrawAmount < currentBalance) {
      updateTotalField("withdraw-total", totalWithdrawAmount);
      updateBalance(totalWithdrawAmount, false);
    }
    if (totalWithdrawAmount > currentBalance) {
        alert("You can not withdraw more than current balance");
    }
  });
