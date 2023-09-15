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

// code : 8 

let ress = 'i love india'
function krunal(){
    let ans = ress.split(' ').reverse().join(' ').split('').reverse().join('').split(' ')
    return ans

}
console.log(krunal());

// [ 'i', 'evol', 'aidni' ] split() allwaYS giving value on array from

//Code 9: To find longest word from a string using (for of) /*for(var i=0; i>=num; i++) means iterate by indexing*/  /*for (var word of words) means iterate by an elements not
// by indexing*/
function krunal() {
  const name = "supriya good girl or not";
  const names = name.split(" ");
  let bucket = "";
  for (let i = 0; i < names.length; i++) {
    if (names[i].length > bucket.length) {
       bucket = names[i];
    }
  }
  return bucket;
}
console.log(krunal())

//supriya

//Code 10: To find longest word from a string using functions

function longestword(){
    let word = "supriya good girl or not"
let opreation = word.split(' ').sort((a, b) => b.length - a.length)
console.log(opreation[0]);
console.log(opreation);
}
longestword()

//supriya
//[ 'supriya', 'good', 'girl', 'not', 'or' ]

//Code 11: To find longest common string from array of strings
function longestcommaonstring(){
let arr1 = ['go', 'google', 'gooes']

var arr = arr1.sort()
//console.log(sorting);
let i=0
while (arr[0].length>0 & arr[0][i]===arr[arr.length-1][i]) {
    i++;

}
console.log(arr[0].slice(0, i));

}
longestcommaonstring()

//go

//Code 12: To find longest common string from array of strings
function longestcommaonstring() {
    let arr1 = ['go', 'google', 'gooes']
    let arr = arr1.sort()
     let result = ''
    for(let i=0; i<arr1[0].length; i++){
        if(arr[0][i]===arr[arr.length-1][i]){
                 result += arr[0][i]
        }

    }
      return result

}
console.log(longestcommaonstring());

//go

//code 13: To find vowels and its count in a given string

function vowels() {
  let arr = ["a", "e", "i", "o", "u"];

  let name = "krunal".split("");
  let result = " ";
  
  
  for (let i = 0; i <name.length; i++) {
    if (arr.includes(name[i])) {
                result +=name[i]
                     
        }
  }
   return result
  //console.log(result.length);
}
console.log(vowels())

//2
// ua

//math and min understand 
const findbig = [1,2,3,4,54,5]
console.log(Math.max[findbig])
//undefined
console.log(Math.max(1,2,3,4,5,5))
//5

let a = [1,2,3,4,4]
console.log(Math.min(a));
//NaN
let a =  [1,2,3,4,4]
console.log(Math.min(...a))

// vowel count in js using number out put 

function vowel() {
  let a = "krunall".split("");
  let vowel = ["a", "e", "i", "o", "u"];
  let ab = ''
  for (let i = 0; i < a.length; i++) {
    if (vowel.includes(a[i])) {
        ab++
           
    }
  }
  return ab
}

console.log(vowel())

//2

//find charactaer for string 
function findCharacter(str, target) {
  let i = 0
  if(str.charAt(i)===target){
      console.log('available in str');
 }

 console.log('not avilable ');
}
findCharacter('krunal', 'e')

//not avilable 

//get sum of zero

function getSumPairZero(array){
  for(let i=0; i<array.length; i++){

      for(let j=1; i<array.length;  j++ ){


          if(array[i]+array[j]==0){
              console.log([array[i], array[j]]); 
          }
      }

  }


}
console.log(getSumPairZero([-5,-4,-3,-2,-1,0,1,2,3,4,5]));

//[ -5, 5 ]

//find two largest pair in number 

function findingTwolargest(arr){
  let a  =  arr.sort((a, b) => b - a )
    
  console.log(a[0], a[1]);
}
findingTwolargest([9,7,8,4,5,6,1,2,3])

//9 8

//To find the largest pair of the 2 elements using indexing with sorted elements
function findingTwolargest(arr){
  console.log((arr[arr.length-1]+ arr[arr.length-2]));
  
 }
findingTwolargest([1,2,3])

//5

//fibonaci series code 

function fib(n){
  let  a = [0, 1]

  for(let i=0; i<n; i++){
      a.push(a[i]+a[i+1])

  }
  return a 

}
console.log(fib(5))

//[
  0, 1, 1, 2,
  3, 5, 8
//]

//Find the missing no. in an array
function missing(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    const value = arr[i] + 1;
    if (arr[i+1] !== value) {
      console.log('Missing element:', value);
    }
  }
}

missing([1, 2,3 ,5, 6,  8, 9]);

// Missing element: 4
//Missing element: 7


//Sorting of an string/character

function sorting(sr){
  console.log(sr.sort())

}
sorting(['a','b','t','h','j','f','x'])

//[
//'a', 'b', 'f',
//  'h', 'j', 't',
//  'x'
//]

//finding first duplicate element from an array

function findDuplicate(arr){

  for(let i=0; i<arr.length; i++){
if(arr[i] === arr[i+1]){

console.log(arr[i]);
break
}
}


}
findDuplicate([1,2,2,4,4,5,6,7,8])

//2

// another way to dupliocate find 
function firstDuplicate() {
  let arr = [1, 2, 2, 5, 5];
  let data = {};
  for (var item of arr) {
    if (data[item]) {
      return item;
    } else {
      data[item] = item;
      console.log(data[item]);
    }
  }

}
console.log(firstDuplicate());

//out-put 
1
2
2

//Uppercase of each first letter of a words using map function


function uppercase(){
  let arr = "india is my favcontry"
  word = arr.toLocaleLowerCase().split(' ');
  for(let i=0; i<word.length; i++){
     word[i] = word[i][0].toUpperCase()+word[i].slice(1)
  }
  console.log(word.join(" "))
  
  
  }
  uppercase()
  //India Is My Favcontry

  //using map try Uppercase of each first letter of a words using map function


  function uppercase() { 
    let a = "india is my favcontry"

   let orignalarray =  a.toLowerCase().split(' ').map((ele)=> {
        return  ele[0].toUpperCase() + ele.slice(1)

    })
      return orignalarray.join(' ')
 

}
console.log(uppercase())

//India Is My Favcontry


function endingWith(str, target){
  return str.endsWith(target)

}
console.log(endingWith('krunal', 'l'))

//true
 
function endingWith (str, target){

  return str.substr(-target.length)==target
}

console.log(endingWith('krunal', 'l'));

//true


////Print string n times using inbuilt function

function printString(str, target){
 
  return  str.repeat( target )
}
console.log(printString('sachin', 3));

// sachinsachinsachin

//Code 42: Print string n times in custom way

function Printstring(str, target){
  if(target<1) return 'unknown value'
  let  final = ' '
  for(let i=0; i <target; i++){
                   
        final =  final+str+","
  }
 return final

}
console.log(Printstring( 'sachin' , 4))

//sachin,sachin,sachin,sachin,

//Code 43:Print string n times in custom way

function printstring( str , num) {
  if(num<1) return ""
 if(num==1) return str
  return  str + printstring(str, num-1)


}
console.log(printstring('krunal', 4))

//krunalkrunalkrunalkrunal



const truniCate = (str, num) => {
  if(num<=3){
    return str.slice(0, num)
  }
     return str.slice(0, num-3)+'...'
  }
  console.log(truniCate( 'krunal', 4))
  
  //k...



  //code : 47 
  function dimenstionalArray(arr, size ){

    var groups = [] 
   while(arr.length>0){
     groups.push(arr.slice(0, size))
     arr = arr.slice(size)
    
   
   }
   return groups
   
   
   }
   console.log(dimenstionalArray([1,2,3,4,5], 2))

   //[ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]


   // To find only truthy values using filter

function trulyValue(value) {
  return value.filter((data) => {
    return data;
  });
}
console.log(trulyValue(["priya", 0, "", false, null, undefined, "ate", 9]));

// //[ 'priya', 'ate', 9 ]

// /Checking all letters of second words should present in first word, in the same order using include function

function allLetters(value) {
  let first = value[0];
  let second = value[1];

  for (let letter of second) {
    if (first.includes(letter)) {
      return true;
    }
  }
  return false;
}

console.log(allLetters(["hello", "hey"]))

// //true

function allLetters(value) {
  let first = value[0].toLowerCase();

  let second = value[1].toLowerCase();

  for (let value of second) {
    if (first.indexOf(value) === -1) {
    }
    return false;
  }
}
console.log(allLetters(["hello", "dwsdf"]));

// false

//Code 53: Unique values only from 2 arrays

function diffrentVAlue(arr1, arr2) {
  let result = [];
  for (let value1 of arr1) {
    if (arr2.indexOf(value1) == -1) {
      result.push(value1);
    }
  }

  for (let value2 of arr2) {
    if (arr1.indexOf(value2) == -1) {
      result.push(value2);
    }
  }
  return result;
}
console.log(diffrentVAlue([1, 2, 3, 4], [2, 3, 4, 5]));

// //[1, 5]


function diffrentVAlue(arr1, arr2) {
  const mixing = arr1.concat(arr2);

  const filterapply = mixing.filter((num) => {
    if (arr1.indexOf(num) == -1 || arr2.indexOf(num) == -1) {
      return num;
    }
  });
  return filterapply
}

console.log(diffrentVAlue([1, 2, 3, 4], [2, 3, 4, 5]));

//[1, 5]

// code 56: Sum of all numbers from start to end given number

function findMaxAndMin(start, end) {
  let sum = 0;

  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}
console.log(findMaxAndMin(1, 4));

// 10


// code 57: Remove or Delete elements from an array using various ways

let a = [5, 4, 3, 2, 1];

a.length = 1;
console.log(a);

//5

// second way 
let a = [5, 4, 3, 2, 1];
a.shift();

console.log(a);

// [4, 3, 2, 1];

// delete element as an out-put

let a = [5, 4, 3, 2, 1];
console.log(a.shift(2));

//5

//delte element using splice method
const a = ["krunal", "sachin", "mayank", "kush"];


a.splice(0, 2);

console.log(a);

//[ 'mayank', 'kush' ]


 //Explicitly Remove Array Elements Using the Delete Operator

const a = ["krunal", "sachin", "mayank", "kush"];

  delete a[2]

console.log(a);
 
//[ 'krunal', 'sachin', <1 empty item>, 'kush' ]


//Using the Array filter Method to Remove Items By Value

const a = [1, 2, 3, 4, 5, 6];

const b = a.filter((num) => num > 4);

console.log(b);

//[ 5, 6 ]

//remove number  like these also,
let a = [1, 2, 3, 4, 5, 6];

for (let i = 0; i <= a.length; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

//0
// 1
// 2
// 3
// 4
// 6

//another way using way 
let a = [1, 2, 3, 4, 5, 6];

for (let i = 0; i <= a.length; i++) {
  if (a[i] === 5) {
    a.splice(i, 1);
  }
}

console.log(a);

//[ 1, 2, 3, 4, 6 ]


//now explain Currying function with using code understanding

function sum(a) {
  
  return function sum(b){
    return  function sum(c){
      return  function sum(d){
        return a+b+c+d
      }
    }
  }
}

console.log( sum(1)(2)(2)(3));

//8
const sum = (a) => (b) => (c) => (d) => a + b + c + d;

console.log(sum(1)(1)(1)(1));

//4

// Code 60: Find SUM, PRODUCT AND AVERAGE of the numbers //accumulation means collection

let arr = [1, 2, 3, 4, 5]

let sum = arr.reduce((acuum, cur) => {
  return acuum + cur
})

console.log(sum);

//15


//num of numbers using short-hand loop
function numOfNumbers(...numbers) {
  let itr = 0;

  for (let num of numbers) {
    itr += num;
  }

  return itr;
}
console.log(numOfNumbers(1, 2, 4));
//7

//use both map and filter and both use succsefully

console.time("MyTimer");

const numbers = [1, 2, 3, 4, 5, 6, 7];

const total = numbers.filter((num) => num > 4).map((num) => num * num);

console.log(total);

console.timeEnd("MyTimer");

//[25, 36, 49];









  

