function capitalize(word) {
    var first = word.slice(0,1);
    const second = word.slice(1);
    first= first.toUpperCase();
    word = first.concat(second);
    return word;
}
module.exports = capitalize;