// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”

function camelize(str) {
    let rawWordsArray = str.split('-');
    let rawWordFinal = rawWordsArray.map((rawWord, index) => {
        if (index == 0) {
            return rawWord;
        }
        let rawWordFirstLetter = rawWord[0].toUpperCase();
        let rawWordRestLetters = rawWord.slice(1);
        let rawWordFinal = rawWordFirstLetter + rawWordRestLetters;
        return rawWordFinal;
    })
    return rawWordFinal.join('');
}

console.log(camelize('my-short-string'));
console.log(camelize('background-color'));
console.log(camelize('list-style-image'));
console.log(camelize('-webkit-transition'));