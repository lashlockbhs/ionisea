// Write your code here.
const encodeButton = document.getElementById('encode')
const decodeButton = document.getElementById('decode')
const textInput = document.getElementById('textInput')
const keyInput = document.getElementById('keyInput')

const possibleChars = '`1234567890-=~!@#$%^&*()_+qwertyuiop[]QWERTYUIOP{}|asdfghjkl;ASDFGHJKL:"zxcvbnm,./ZXCVBNM<>? '
// missing ' and \ hel[]

const generateKey = () =>{
    const characters = '0123456789abcdefghijklmnopqrstuvwxyz'
    let s = ''
    for(let i = 0; i <16; i++){
        s+=characters[Math.floor(Math.random()*characters.length)]
    }
    return s;
    //return Math.round((Math.random()+1)*2**100).toString(36)
}

const encode = (text, key) =>{
    let newText = '';
    for(let c = 0; c<text.length -1; c++){
        
    }
    return newText;
}

encodeButton.onclick = (e) =>{
    if (keyInput.value == '') keyInput.value = generateKey()
    encode(decodeButton.value)
}

decodeButton.onclick = (e) =>{
   if (keyInput.value == '') alert(`Provide a key!`)
}