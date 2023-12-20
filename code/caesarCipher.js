const caesarCipher = (sentence, shift) => {
    if (shift === 0) return sentence;
    // No shift, no change
    // Only change lower case letters
    return sentence.replace(/[a-z]/g, (char) =>
      String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97)
      //Shift them using UNICODE
    );
};
module.exports = caesarCipher;