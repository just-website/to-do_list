var table = document.querySelector('table');
var field = document.querySelector('#input');

field.addEventListener('keypress', addTask);
table.addEventListener('click', checkTask);
table.addEventListener('dblclick', edit);
table.addEventListener('click',removeTr);

function addTask(event) {
  if (event.keyCode === 13) {
    addTr();
    clearInput();
  }
}

function createTd() {
  var elem = document.createElement('td');
  var input = document.createElement('input');
  var span = document.createElement('span');
  var div = document.createElement('div');
  input.setAttribute('type', 'checkbox');
  span.innerHTML = '<i>' + field.value + '</i>';
  div.innerHTML = 'x';
  elem.appendChild(input);
  elem.appendChild(span);
  elem.appendChild(div);
  return elem;
}

function addTr() {
  table.appendChild(createTr());
}

function createTr() {
    var tr = document.createElement('tr');
    tr.appendChild(createTd());
    return tr;
}

function clearInput() {
  field.value = '';
}

function checkTask(event) {
  var elem = event.target.closest('input[type="checkbox"]');
  if (elem) {
    elem.style.visibility = 'hidden';
    elem.nextElementSibling.style.textDecoration = 'line-through';
  }
}

function edit(event) {
  var elem = event.target.closest('i');
  if (elem) {
    elem.parentElement.appendChild(createInput(elem));
  }
}

function createInput(elem) {
  var input = document.createElement('input');
  input.value = elem.innerHTML;
  elem.innerHTML = '';
  input.addEventListener('keypress', saveEdit);
  return input;
}

function saveEdit(event) {
  var elem = event.target.closest('input');
  var editElem = elem.parentElement.firstElementChild;
  if (event.keyCode === 13) {
    editElem.innerHTML = elem.value;
    elem.style.display = 'none';
  }
}

function removeTr(event) {
  var elem = event.target.closest('div');
  if (elem) {
    var tr = elem.parentElement.parentElement;
    tr.parentElement.removeChild(tr);
  }
}
