function capitalizeFirstLetterOfEachWord(sentence) {
    return sentence.replace(/\b\w/g, function(match) {
        return match.toUpperCase();
    });
}
const sentence = "syed umer shah";
console.log(capitalizeFirstLetterOfEachWord(sentence));