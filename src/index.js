import cipher from './cipher.js';

let takePhrase = document.getElementById("take-phrase");
let offsetNumber = document.getElementById("offset-number");
let receiveCipherPhrase = document.getElementById("receiveCipherPhrase");
let encodeButton = document.getElementById("encode-button");
let decodeButton = document.getElementById("decode-button");
let popup = document.getElementById("popup");
let popupBackground = document.getElementById("popup-background");
let copyButton = document.getElementById("copy-button");
let escButton = document.getElementById("esc-button");

function encodeClick () {
    popup.classList.add("exibir");
    popupBackground.classList.add("exibir");
    let value = parseInt(offsetNumber.value);
    let codeMessage = cipher.encode(value, takePhrase.value);
    receiveCipherPhrase.value = codeMessage;
}

encodeButton.addEventListener("click", encodeClick);

function decodeClick () {
    popup.classList.add("exibir");
    popupBackground.classList.add("exibir");
    let value = parseInt(offsetNumber.value);
    let decodeMessage = cipher.decode(value, takePhrase.value);
    receiveCipherPhrase.value = decodeMessage;
}

decodeButton.addEventListener("click", decodeClick);

function escClick () {
    popup.classList.remove("exibir");
    popupBackground.classList.remove("exibir");
}

escButton.addEventListener("click", escClick)