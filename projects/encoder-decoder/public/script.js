const encodeButton = document.getElementById('encode');
const decodeButton = document.getElementById('decode');
const textInput = document.getElementById('textInput');
const keyInput = document.getElementById('keyInput');
let output = document.getElementById('output');

const possibleChars = '`'+String.raw`'1234567890-=~!@#$%^&*()_+qwertyuiop[]\QWERTYUIOP{}|asdfghjkl;ASDFGHJKL:"zxcvbnm,./ZXCVBNM<>? `;

const generateKey = () => {
    const characters = '0123456789abcdefghijklmnopqrstuvwxyz';
    let s = '';
    for (let i = 0; i < 16; i++) {
        s += characters[Math.floor(Math.random() * characters.length)];
    };
    return s;
};

const applyKey = (change, char, mode) => {
    const multiplier = mode; // takes 1 or -1, zero for no change
    const index = possibleChars.indexOf(char);
    return possibleChars.at((index + change * multiplier) % possibleChars.length); //because -1 doesnt work with []
};

const crypt = (text, key, mode) => {
    let newText = '';
    for (let c = 0; c < text.length; c++) {
        newText += applyKey(parseInt(key[c % (key.length)], 36), text[c], mode);
    };
    return newText;
};

encodeButton.onclick = (e) => {
    if (keyInput.value == '') keyInput.value = generateKey();
    output.textContent = crypt(textInput.value, keyInput.value, 1);
};

decodeButton.onclick = (e) => {
    if (keyInput.value == '') alert(`Provide a key!`) // double equals is intentional, alerts are fine dont worry about it
    output.textContent = crypt(textInput.value, keyInput.value, -1);
};