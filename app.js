function encriptText(e) {
    let text = document.getElementById("textToEncript").value;
    let textArray = createLettersArray(text);
    let textArrayMessy = messyArray(textArray);
    let textMessy= generateTextMessy(textArrayMessy); 
    hiddenElement("outputAlt");
    console.log(textMessy);
    showElementWithFlex("outputMsg");
    showTextInElement("msgEncripted",textMessy);
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

const hiddenElement=(id)=>{
    let element = document.getElementById(id);
    element.style.display="none";
}

const showElementWithFlex = (id) => {
    let element = document.getElementById(id);
    element.style.display="flex";
}

const showTextInElement = (id, text) => {
    const pNode = document.getElementById(id);
    pNode.textContent = text;
}

function copyToClipBoard(){
   
    var content= document.getElementById('msgEncripted');
    content.select();
    document.execCommand('copy');
    
}