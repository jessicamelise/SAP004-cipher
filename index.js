import cipher from './cipher.js';

let takePhrase = document.getElementById("take-phrase");
let offsetNumber = document.getElementById("offset-number");
let receiveNewMessage = document.getElementById("receive-new-message");
let encodeButton = document.getElementById("encode-button");
let decodeButton = document.getElementById("decode-button");
let popup = document.getElementById("popup");
let popupBackground = document.getElementById("popup-background");
let copyButton = document.getElementById("copy-button");
let escButton = document.getElementById("esc-button");
let messageCopy = document.getElementById("message-copy");

function encodeClick () {
    popup.classList.add("exibir");
    popupBackground.classList.add("exibir");
    let value = parseInt(offsetNumber.value);
    let codeMessage = cipher.encode(value, takePhrase.value);
    receiveNewMessage.value = codeMessage;
}

encodeButton.addEventListener("click", encodeClick);

function decodeClick () {
    popup.classList.add("exibir");
    popupBackground.classList.add("exibir");
    let value = parseInt(offsetNumber.value);
    let decodeMessage = cipher.decode(value, takePhrase.value);
    receiveNewMessage.value = decodeMessage;
}

decodeButton.addEventListener("click", decodeClick);

function escClick () {
    popup.classList.remove("exibir");
    popupBackground.classList.remove("exibir");
    messageCopy.style.visibility = "hidden";
}

escButton.addEventListener("click", escClick);

function copyClick () {
    receiveNewMessage.select();
    document.execCommand("copy");
    messageCopy.style.visibility = "visible";
}

copyButton.addEventListener("click", copyClick);