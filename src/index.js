import cipher from './cipher.js';

let takePhrase = document.getElementById("takePhrase");
let offsetNumber = document.getElementById("offsetNumber");
let receiveCipherPhrase = document.getElementById("receiveCipherPhrase");
let encodeButton = document.getElementById("encodeButton");
let decodeButton = document.getElementById("decodeButton");

function encodeClick () {
    let value = parseInt(offsetNumber.value);
    let codeMessage = cipher.encode(value, takePhrase.value);
    receiveCipherPhrase.value = codeMessage;
}

encodeButton.addEventListener("click", encodeClick);

function decodeClick () {
    let value = parseInt(offsetNumber.value);
    let decodeMessage = cipher.decode(value, takePhrase.value);
    receiveCipherPhrase.value = decodeMessage;
}

decodeButton.addEventListener("click", decodeClick);