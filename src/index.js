import cipher from './cipher.js';

let takePhrase = document.getElementById("takePhrase");
let offsetNumber = document.getElementById("offsetNumber");
let boxToCipher = document.getElementById("boxToCipher");
let boxCipherMessage = document.getElementById("boxCipherMessage");
let receiveCipherPhrase = document.getElementById("receiveCipherPhrase");
let encodeButton = document.getElementById("encodeButton");

startDisplay();

function startDisplay () {
boxToCipher.style.display = "block";
boxCipherMessage.style.display = "none";
}

encodeButton.addEventListener("click", encodeClick);


function encodeClick () {
    let value = parseInt(offsetNumber.value);
    let codeMessage = cipher.encode(value, takePhrase.value);
    receiveCipherPhrase.value = codeMessage;
    boxCipherMessage.style.display = "block";
}




