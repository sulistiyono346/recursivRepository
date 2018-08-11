/*

===================================
Recursive Mastery : Number Iterator
===================================


[INSTRUCTION]
Diberikan sebuah function bernama numberIterator yang merupakan sebuah function yang menerima satu parameter num berupa number.
Buatlah dengan metode rekursif iterasi angka tersebut dari 0.

[EXAMPLE]
input: 5
output: 012345

input: 7
output: 01234567

[CONSTRAINTS]
Wajib menggunakan metode rekursif
Dilarang menggunakan sintaks for / while dan regex
*/

function numberIterator(number, first) {
    first = first ? first : number//By default the first is the number
    if (number==0) {
        return ""+first
    }

    var temp = "" + first - number
    return temp+numberIterator(number-1,first)
}

console.log(numberIterator(5)); // '012345'
// console.log(numberIterator(7)); // '01234567'
// console.log(numberIterator(3)); // '0123'
// console.log(numberIterator(1)); // '01'
// console.log(numberIterator(0)); // '0'


// function numberIterator1(num) {
//   function helper(cur, acc) {
//     return cur > num ? acc : helper(cur+1, acc + cur);
//   }
//   return helper(0, '');
// }
//
// function numberIterator2(num) {
//   return Array.from(Array(num+1).keys()).join('');
// }
//
// function numberIterator3(num) {
//   let str = '', cur = -1;
//   while(++cur <= num) str += cur;
//   return str;
// }
//
//
// console.log(numberIterator1(5)); // '012345'
// console.log(numberIterator2(5)); // '012345'
// console.log(numberIterator3(5)); // '012345'
// console.log(numberIterator1(7)); // '01234567'
// console.log(numberIterator2(7)); // '01234567'
// console.log(numberIterator3(7)); // '01234567'
