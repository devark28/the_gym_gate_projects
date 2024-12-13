/*
Create a function called capitalizeVowels that takes a string and returns the string with all the vowels at odd indexes capitalized
console.log(capitalizeVowels("hello world")) // "hEllo wOrld"

console.log(capitalizeVowels("javascript is an awesome language")) // "jAvAscrIpt Is an AwEsOmE langUage"

console.log(capitalizeVowels("programming can be fun and exciting")) // "progrAmming cAn bE fun And Exciting"

console.log(capitalizeVowels("quick brown fox jumps over the lazy dog")) // "qUick brown fOx jUmps over thE lazy dOg"

console.log(capitalizeVowels("test with no changes")) // "tEst with nO chAnges"
 */

function capitalizeVowels(sentence){
    return [...sentence].map((char, index) => {
        return ((index % 2 !== 0) && ['a', 'e', 'i', 'u', 'o'].includes(char)) ? char.toUpperCase() : char
    }).join('')
}

console.log(capitalizeVowels("hello world")) // "hEllo wOrld"

console.log(capitalizeVowels("javascript is an awesome language")) // "jAvAscrIpt Is an AwEsOmE langUage"

console.log(capitalizeVowels("programming can be fun and exciting")) // "progrAmming cAn bE fun And Exciting"

console.log(capitalizeVowels("quick brown fox jumps over the lazy dog")) // "qUick brown fOx jUmps over thE lazy dOg"

console.log(capitalizeVowels("test with no changes")) // "tEst with nO chAnges"