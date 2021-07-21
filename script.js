const bill = document.querySelector('#bill');
const btnEnter = document.querySelector('#btn-enter');
const cash = document.querySelector('#cash');
const btnCheck = document.querySelector('#btn-check');
const checkDiv = document.querySelector('#cash-div');
const returnChange = document.querySelector('.returnChange');
const noOfNotes = document.querySelectorAll('.noOfNotes');

let notes = [2000, 500, 100, 20, 10, 5, 1];
let returnNotes = [];

btnEnter.addEventListener('click', function () {
  checkDiv.style.display = 'block';
});
btnCheck.addEventListener('click', function () {
  returnChange.style.display = 'block';
  let billAmount = parseInt(bill.value);
  let cashAmount = parseInt(cash.value);
  //console.log('billAmount: ' + billAmount);
  for (const notes of noOfNotes) {
    notes.innerText = '';
  }
  console.log('Bill Amount: ' + billAmount);
  console.log('Cash Amount: ' + cashAmount);
  /*let returnAmount = cashAmount - billAmount;
  console.log('Return Amount: ' + returnAmount);*/
  if (cashAmount === billAmount) {
    alert('No change');
  } else if (billAmount > cashAmount) {
    alert('Please get more cash...');
  } else {
    setTimeout(function () {
      returnChange.className = output.className.replace('', 'show');
    }, 1000);
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

    console.log(returnNotes);
    console.log(noOfNotes);

    returnNotes = [];
  }
});
