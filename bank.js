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

function updateBalance(amount, isAdd) {
  const totalBalance = document.getElementById("balace-total");
  const totalBalanceText = totalBalance.innerText;
  const previousBalance = parseFloat(totalBalanceText);
  if (isAdd == true) {
    totalBalance.innerText = previousBalance + amount;
  } else {
    totalBalance.innerText = previousBalance - amount;
  }
}

document.getElementById("deposit-submit").addEventListener("click", function () {

    const depositAmount = getInputValue("deposit-input");
    updateTotalField("deposit-total", depositAmount);
    updateBalance(depositAmount, true);
  });

document.getElementById("withdraw-submit").addEventListener("click", function () {
    
    const totalWithdrawAmount = getInputValue("withdraw-input");
    updateTotalField("withdraw-total", totalWithdrawAmount);
    updateBalance(totalWithdrawAmount, false);
  });
