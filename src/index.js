const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let splitMorseLetters = [];
  for (let i = 0; i < expr.length; i += 10) {
    splitMorseLetters.push(expr.slice(i, i + 10));
  }
  let result = [];
  for (let item of splitMorseLetters) {
    let letterNum = "";
    let ind = item.indexOf(1);
    if (ind === -1) {
      result += " ";
      continue;
    } else {
      letterNum = item.slice(ind);
    }
    let letter = "";
    for (let i = 0; i < letterNum.length; i += 2) {
      letterNum[i] + letterNum[i + 1] === "10"
        ? (letter += ".")
        : (letter += "-");
    }
    result += MORSE_TABLE[letter];
  }

  return result;
}

module.exports = {
  decode,
};
