const pxInput = document.getElementById("px");
const remInput = document.getElementById("rem");
const rootInput = document.getElementById("root-input");
let rootSize = 16;

function onPxinput(event) {
  const pxValue = Number(event.target.value);
  remInput.value = pxValue / rootSize;
  return;
}

function onREMinput(event) {
  const remValue = Number(event.target.value);
  pxInput.value = remValue * rootSize;
  return;
}

function onRootInput(event) {
  let newRootValue = Number(event.target.value);
  rootInput.value = newRootValue;
  rootSize = newRootValue;
}
