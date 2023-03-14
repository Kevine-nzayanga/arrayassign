// Find the last element of the following arrays.
const arr1 = [3,7,34,90,12];
const arr2 = [true, "green", "where",12,56];
let arr1last= arr1[arr1.length -1];
console.log(arr1last);
let arr2last= arr2[arr2.length -1];
console.log(arr2last);

// Write a JS program that will join the following array elements into a string
const myPets = ["Cow", "Bird", "Snake", "Dog"];
console.log(myPets.join(" "));

// Write a JS script to sort the following array items
var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
let sorting=arr3.sort((a,b)=> a-b);
console.log(sorting)

// Write a program to remove duplicates from the following array.
// Console the array without duplicates, and console another array that only contains the duplicates
var arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
const newarr =[...new Set(arr)];
console.log(newarr);

// console.log(newarr);

// Write a JS script to search for the following word in the array.
// If the word is present, console it else console "the search word was not found"
let arr5 = ["the", "way", "x", 4];
let x='we'
if (arr5.includes(x) ){
    console.log(x +''+"was found")
}
else{
    console.log("the search was not found")
}

// Write a JS script to sort the following string
let word = "sevink"
function ReverseString(str){
    return str.split('').reverse().join('')
}
 console.log( ReverseString(word));    

    

    
