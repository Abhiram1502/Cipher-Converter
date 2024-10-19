function updateShift(){
    const shift = document.getElementById("shiftRange").value;
    document.getElementById("shiftValue").textContent = shift;
    const normalAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const shiftedAlphabet = normalAlphabet.slice(shift)+normalAlphabet.slice(0,shift);
    document.getElementById("shiftedAlph").textContent = shiftedAlphabet.split('').join(' ');
}

function convert() {
    const shift = parseInt(document.getElementById("shiftRange").value);
    const inputText = document.getElementById("inputText").value.toUpperCase();
    const normalAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const shiftedAlphabet = normalAlphabet.slice(shift) + normalAlphabet.slice(0, shift);
    let outputText = '';

    for (let i = 0; i < inputText.length; i++) {
        const index = normalAlphabet.indexOf(inputText[i]);
        if (index !== -1) {
            outputText += shiftedAlphabet[index];
        } else {
            outputText += inputText[i];
        }
    }

    document.getElementById("outputText").value = outputText;
}

function copyText() {
    const outputText = document.getElementById("outputText");
    outputText.select();
    outputText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Cipher text copied to clipboard!");
}


