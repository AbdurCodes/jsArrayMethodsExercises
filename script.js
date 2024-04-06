// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”

// my solution
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

// solution by https://javascript.info/array-methods
// function camelize(str) {
//     return str
//       .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
//       .map(
//         // capitalizes first letters of all array items except the first one
//         // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
//         (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//       )
//       .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
//   }