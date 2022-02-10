function getInputValue() {
  const depositInput = document.getElementById("deposit-input");
  const depositAmountText = depositInput.value;
  depositInput.value = "";
  const depositAmount = parseFloat(depositAmountText);
  return depositAmount;
}

document.getElementById("deposit-submit").addEventListener("click", function () {
    const depositAmount = getInputValue();

    // get current deposit
    const depositTotal = document.getElementById("deposit-total");
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + depositAmount;

    // total Balance
    const totalBalance = document.getElementById("balace-total");
    const totalBalanceText = totalBalance.innerText;
    const previousBalance = parseFloat(totalBalanceText);
    totalBalance.innerText = previousBalance + depositAmount;
  });

document
  .getElementById("withdraw-submit")
  .addEventListener("click", function () {
    const WithdrawInput = document.getElementById("withdraw-input");
    const totalWithdrawText = WithdrawInput.value;
    WithdrawInput.value = "";
    const totalWithdrawAmount = parseFloat(totalWithdrawText);

    const withdrawTotal = document.getElementById("withdraw-total");
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawAmount = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = withdrawAmount + totalWithdrawAmount;

    // update balance after withdraw
    const totalBalance = document.getElementById("balace-total");
    const totalBalanceText = totalBalance.innerText;
    const PrevtotalBalance = parseFloat(totalBalanceText);
    totalBalance.innerText = PrevtotalBalance - totalWithdrawAmount;
  });
