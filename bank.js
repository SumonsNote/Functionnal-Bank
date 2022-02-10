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

document
  .getElementById("deposit-submit").addEventListener("click", function () {
    const depositAmount = getInputValue("deposit-input");

    // get current deposit
      updateTotalField('deposit-total', depositAmount);

    // total Balance
    const totalBalance = document.getElementById("balace-total");
    const totalBalanceText = totalBalance.innerText;
    const previousBalance = parseFloat(totalBalanceText);
    totalBalance.innerText = previousBalance + depositAmount;
  });

document
  .getElementById("withdraw-submit").addEventListener("click", function () {
    const totalWithdrawAmount = getInputValue("withdraw-input");

    updateTotalField("withdraw-total", totalWithdrawAmount);

    // update balance after withdraw
    const totalBalance = document.getElementById("balace-total");
    const totalBalanceText = totalBalance.innerText;
    const PrevtotalBalance = parseFloat(totalBalanceText);
    totalBalance.innerText = PrevtotalBalance - totalWithdrawAmount;
  });
