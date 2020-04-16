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

function encodeClick() {
    if (!validationField(takePhrase.value, offsetNumber.value)) {
        popupAddClassExhibit();
        callCipherEncode();
    }  
}

encodeButton.addEventListener("click", encodeClick);

function decodeClick() {
    if (!validationField(takePhrase.value, offsetNumber.value)) {
        popupAddClassExhibit();
        callCipherDecode();
    }
}

decodeButton.addEventListener("click", decodeClick);

function validationField(phrase, number) {
    if (phrase == "" || number == "") {
        alert("Por favor preencha o campo de mensagem e de deslocamento");
        return true;
    } else {
        return false;
    }
}

function popupAddClassExhibit() {
    popup.classList.add("exhibit");
    popupBackground.classList.add("exhibit");
}

function callCipherEncode() {
    let codeMessage = cipher.encode(offsetNumber.valueAsNumber, takePhrase.value);
    receiveNewMessage.value = codeMessage;
}

function callCipherDecode() {
    let decodeMessage = cipher.decode(offsetNumber.valueAsNumber, takePhrase.value);
    receiveNewMessage.value = decodeMessage;
}

function escClick() {
    popupRemoveClassExhibit();
    copyFieldHidden();
}

escButton.addEventListener("click", escClick);

function popupRemoveClassExhibit() {
    popup.classList.remove("exhibit");
    popupBackground.classList.remove("exhibit");
}

function copyClick() {
    copyMessage();
    copyFieldVisible();
}

function copyMessage() {
    receiveNewMessage.select();
    document.execCommand("copy");
}

function copyFieldHidden() {
    messageCopy.style.visibility = "hidden";
}

function copyFieldVisible() {
    messageCopy.style.visibility = "visible";
}

copyButton.addEventListener("click", copyClick);