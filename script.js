const bill = document.querySelector('#bill');
const btnEnter = document.querySelector('#btn-enter');
const cash = document.querySelector('#cash');
const btnCheck = document.querySelector('#btn-check');
const checkDiv = document.querySelector('#cash-div');
const returnChange = document.querySelector('.returnChange');
const noOfNotes = document.querySelectorAll('.noOfNotes');
const message = document.querySelector('.message');
let notes = [2000, 500, 100, 20, 10, 5, 1];
let returnNotes = [];
hideMessage();
btnEnter.addEventListener('click', function () {
  if (bill.value == '') {
    showMessage('Enter the bill amount');
  } else if (bill.value == 0) {
    showMessage('Nothing to return...');
  } else {
    checkDiv.style.display = 'block';
  }
});
btnCheck.addEventListener('click', function () {
  hideMessage();
  if (cash.value == '') {
    showMessage('Enter the cash amount');
  } else {
    let billAmount = parseInt(bill.value);
    let cashAmount = parseInt(cash.value);
    for (const notes of noOfNotes) {
      notes.innerText = '';
    }
    if (cashAmount === billAmount) {
      showMessage('No change');
    } else if (billAmount > cashAmount) {
      showMessage(
        'I see you dont have any cash...Would you love to work as Naukar?'
      );
    } else {
      returnChange.style.display = 'block';
      let returnAmount = cashAmount - billAmount;
      console.log('Return Amount: ' + returnAmount);

      for (let i = 0; i < notes.length; i++) {
        returnNotes[i] = Math.floor(returnAmount / notes[i]);
        returnAmount = returnAmount - notes[i] * returnNotes[i];
        noOfNotes[i].innerText = returnNotes[i];
        if (returnAmount === 0) {
          break;
        }
      }

      for (const notes of noOfNotes) {
        if (notes.innerText == '0') {
          notes.innerText = '';
        }
      }
    }
  }
});
function hideMessage() {
  message.style.display = 'none';
}
function showMessage(msg) {
  message.style.display = 'block';
  message.innerText = msg;
}
