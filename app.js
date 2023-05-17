function encrypt() {
    let text = document.getElementById("textToEncript").value;
    let textMessy = encryptText(text);
    hiddenElement("outputAlt");
    showElementWithFlex("outputMsg");
    showTextInElement("msgEncripted", textMessy);
    document.getElementById("textToEncript").value = "";
}

function decrypt() {
    let text = document.getElementById("textToEncript").value;
    var textDesencripted = decryptText(text);
    hiddenElement("outputAlt");
    showElementWithFlex("outputMsg");
    showTextInElement("msgEncripted", textDesencripted);
}

const encryptText = (text) => {
    let words = text.split(' ');
    let newWords = [];

    for (let word of words) {
        word = word.replaceAll('e', 'enter');
        word = word.replaceAll('i', 'imes');
        word = word.replaceAll('a', 'ai');
        word = word.replaceAll('o', 'ober');
        word = word.replaceAll('u', 'ufat');

        newWords.push(word);
    }

    const textEncripted = newWords.join(' ');
    return textEncripted;
}

const decryptText = (text) => {
    let words = text.split(" ");
    let newWords = [];

    for (let word of words) {
        word = word.replaceAll('enter', 'e');
        word = word.replaceAll('imes', 'i');
        word = word.replaceAll('ai', 'a');
        word = word.replaceAll('ober', 'o');
        word = word.replaceAll('ufat', 'u');
        newWords.push(word);
    }

    const textDesencripted = newWords.join(' ');

    return textDesencripted;
}

const hiddenElement = (id) => {
    let element = document.getElementById(id);
    element.style.display = "none";
}

const showElementWithFlex = (id) => {
    let element = document.getElementById(id);
    element.style.display = "flex";
}

const showTextInElement = (id, text) => {
    const pNode = document.getElementById(id);
    pNode.textContent = text;
}

function copyToClipBoard() {
    var content = document.getElementById('msgEncripted');
    content.select();
    document.execCommand('copy');
    document.getElementById("msgEncripted").textContent = "";
}