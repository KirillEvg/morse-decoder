const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const arr = expr.split(/(.{10})/);
    
    let result = "";
    let newArr = [];

    for(let k in arr){
        if(arr [k] != "") {
            newArr.push(arr[k]);
        }
        }
    
    for(let j in newArr){
            newArr[j] = newArr[j]
            .replace(/11/g, "-")
            .replace(/\*/g, " ")
            .replace(/10/g, ".")
            .replace(/^0+/, "");

        if(MORSE_TABLE[newArr[j]]){
            result += MORSE_TABLE[newArr[j]];
          } 
        else {
            result += " ";
          }
        }   
}
