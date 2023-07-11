//Code 1: Remove Duplicate characters from array of element and find the count of an elements using set object
let ar1 = [1,12,23,3,4,4,4,54,5,5,5,55,5,]

let unique = [...new  Set(ar2)]

console.log(unique);

// [
//     1, 12, 23,  3,
//     4, 54,  5, 55
//   ]



//Code 2: Remove Duplicate characters from array of element using filter
 myArray = [1,2,3,4,5,'a','a','a',2]     
const values   = myArray.filter((value,index, arr) =>  arr.indexOf(value)===index)
          console.log(values);

//   [ 1, 2, 3, 4, 5, 'a' ]



//Code 3:String reverse without reversing of individual words (Array of elements can be reverse with reverse() method but for string it is won't possible so required to split and then
let res = 'i love india'
function krunal(){
    let ans = res.split('').reverse().join('').split(' ').reverse()
    return ans

}
console.log(krunal());

//[ 'i', 'evol', 'aidni' ]

// Code 1: Remove Duplicate characters from String


function krunal() {
    const string = 'hiikrunalkem6e'

  const  result = string.split('').filter((value,index,arr) => { return arr.indexOf(value)===index}).join('')
  return result;

}
krunal()

// Code 4:String reverse without using inbult function

function reversestring (){
const  value = 'krunal local dog'
 let result = ' '
 for(let i=value.length-1; i>0; i--){
      result = result+value[i]

 }
  return result
}
console.log(reversestring())
//god lacol lanur

//Code 5:Anagram

function Anagram() {
    let word1 = 'army'
    let word2 = 'army'

   let str1 = word1.toUpperCase().split('').reverse().join('')
    let str2 = word2.toUpperCase().split('').reverse().join('')

    if(str1==str2){
        console.log('both are matched');
    }
    else{
        console.log('not correct');
    }

}
Anagram()

//both are matched

//Code 6: Swapping of 2 numbers with third variable

let a = 2;
let b = 3;
let c;
c = a;
a = b;
b = c;

console.log(a, b);

//3 2

//Code 7: To check the string or number is palindrome or not( ex: 121,madam,anna) using reverse method

let str = 'amnma'

let reverse = str.split('').reverse().join('')
//console.log(reverse)  
if(reverse===str){
    console.log('this string are palindrome');
}
else{
    console.log('this string are not plaindrome');
}

//this string are palindrome