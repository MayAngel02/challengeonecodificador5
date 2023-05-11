function encriptText(e) {
    let text = document.getElementById("textToEncript").value;
    let textArray = createLettersArray(text);
    let textArrayMessy = messyArray(textArray);
    let textMessy= generateTextMessy(textArrayMessy);
    console.log(textMessy);
}

const createLettersArray = (text) => {
    let letras = [];
    let textArray = new String(text);

    for (let i = 0; i < textArray.length; i++) {
        letras.push({
            letra: textArray[i],
            position: i
        })
    }
    return letras;

}

const messyArray=(textArray)=>{
    return textArray.sort(function () { return Math.random() - 0.5 });
}
const generateTextMessy=(textArrayMessy)=>{
    let textMessy = "";
    for (let i = 0; i < textArrayMessy.length; i++) {
        textMessy = textMessy + textArrayMessy[i].letra
    }
    return textMessy;
}