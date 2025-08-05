const ELEMENT_INPUTDECRE = document.getElementById("btnFontSizeDecrease")
const ELEMENT_INPUTINCRE = document.getElementById("btnFontSizeIncrease")
const ELEMENT_CONTENT = document.getElementById('content')
let fontSize = parseInt(window.getComputedStyle(ELEMENT_CONTENT).fontSize)


ELEMENT_INPUTDECRE.addEventListener('click', function () {
  fontSize = fontSize - 2
  ELEMENT_CONTENT.style.fontSize = fontSize + "px";
});

ELEMENT_INPUTINCRE.addEventListener('click', function () {
  fontSize = fontSize + 2
  ELEMENT_CONTENT.style.fontSize = fontSize + "px";
});

const ELEMENT_INPUTLINEHEIGHT = document.getElementById('inputLineHeight')

ELEMENT_INPUTLINEHEIGHT.addEventListener('change', function () {
  let value = ELEMENT_INPUTLINEHEIGHT.value
  console.log(value)
  ELEMENT_CONTENT.style.lineHeight = value
});

const ELEMENT_INPUTTEXTALIGN = document.getElementById("slbTextAlign")
ELEMENT_INPUTTEXTALIGN.addEventListener('change', function () {
  let value = ELEMENT_INPUTTEXTALIGN.value
  console.log(value)
  ELEMENT_CONTENT.style.textAlign = value
});

function ChangeBackgroundColor(color) {
  ELEMENT_CONTENT.style.backgroundColor = color
}

const ELEMENT_INPUTCOLOR = document.getElementById('inputColor')
ELEMENT_INPUTCOLOR.addEventListener('change', function () {
  let value = ELEMENT_INPUTCOLOR.value
  console.log(value)
  ELEMENT_CONTENT.style.color = value
});


