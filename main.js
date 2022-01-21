var currentBalance = 0
document.getElementById('balance').innerHTML = currentBalance

function showInput(input) {
  document.getElementById(input).style.visibility = "visible"
}

function hideInput(input) {
  document.getElementById(input).style.visibility = "hidden"
}

function deposit() {
  showInput('depositInput')
  hideInput('withdrawInput')
}

function withdraw() {
  showInput('withdrawInput')
  hideInput('depositInput')
}

function confirmDeposit() {
  let amount = document.getElementById('deposit-amount').value
  currentBalance = currentBalance + Number(amount)
  document.getElementById('balance').innerHTML = currentBalance
}

function confirmWithdraw() {
  let amount = document.getElementById('withdraw-amount').value
  let newBalance = currentBalance - Number(amount)
  if(newBalance < 0) {
    alert('Insufficient balance')
    return
  }
  currentBalance = newBalance
  document.getElementById('balance').innerHTML = currentBalance
}


