function sortByLength(strings) {
    return strings.slice().sort((a, b) => a.length - b.length);
}

const strings = ["apple", "pear", "banana", "fig", "kiwi"];
const sortedStrings = sortByLength(strings);
console.log(sortedStrings);