// Q No. 1

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







// Q No. 2

// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
// The function should not modify the array. It should return the new array.


function filterRange(arr, a, b){
    // let newArray = arr.filter(value => value >= a && value <= b);
    let newArray = arr.filter(value => a <= value && b >= value);
    return newArray;
}

let arr = [5, 3, 4, 2, 5, 6, 8, 1];

console.log(filterRange(arr, 1, 4));
console.log(arr);









// Q No. 3

// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
// The function should only modify the array. It should not return anything.



// solution 1: my effort + gemini magic
function filterRangeInPlace(arr, a, b){
    let indexToWrite = 0;
    for (let i=0; i<arr.length; i++){
        if (arr[i] >= a && arr[i] <= b) {
            arr[indexToWrite] = arr[i];
            indexToWrite++;
        }
    }
    arr.length = indexToWrite;
    return arr;
}

let arr123 = [5, 3, 8, 1];
console.log(filterRangeInPlace(arr123, 1, 4));
console.log(arr123);



// solution 2: as solved by https://javascript.info/array-methods
function filter_Range_In_Place(arr, a, b) {
    for (let i=0; i<arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}

let arr1234 = [5, 3, 8, 1];
console.log(filter_Range_In_Place(arr1234, 1, 4));
console.log(arr1234);







// Q No. 4
// Sort in decreasing order

let arrXYZ = [5, 2, 1, -10, 8];

console.log("array before sorting: ", arrXYZ);

let decreasingSort = arrXYZ.sort((a,b) => {
    return b-a;
});
console.log("After decreasing sort: ", decreasingSort);


let ascendingSort = arrXYZ.sort((a,b) => {
    return a-b;
});
console.log("After increasing sort: ", ascendingSort);







// Q No. 5
// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
// Create a function copySorted(arr) that returns such a copy.

let arrToSort = ["HTML", "JavaScript", "CSS"];

// solution:
// sorts the array but modifies the original array
// function copySorted(arr) {
//     return arr.sort();
// }

// sorts the array keeping the original array intact
// my solution
function copySorted(arr) {
    return arr.toSorted();
}
// solution from https://javascript.info/array-methods
// function copySorted(arr) {
//     return arr.slice().sort();
//   }

console.log(copySorted(arrToSort));
console.log(arrToSort);








// Q No. 6
// Map to names
// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// my solution
// let names = users.map(user => user.name);
// console.log(names);







// Q No. 7
// Map to objects
// You have an array of user objects, each one has name, surname and id.
// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// to return array of objects we need to wrap our curly braces in parenthesis, ({})
// let usersMapped = users.map(user => ({
//     'fullName' : `${user.name} ${user.surname}`,
//     'id' : user.id
// }))

// console.log(usersMapped);
// console.log(users);






// Q No. 8
// Sort users by age
// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

function sortByAge(users){
    return users.sort((a, b) => a.age - b.age);
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let people = [ pete, john, mary ];

console.log(sortByAge(people));
console.log(people[0]);
console.log(people[1]);
console.log(people[2]);
console.log(people[0].name);
console.log(people[1].name);
console.log(people[2].name);