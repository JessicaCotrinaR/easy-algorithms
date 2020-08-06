
// -------------------------------- 1 ---------------------------------

// let results = {"Java": 10, "Ruby": 80, "Python": 65} 
// let val = Object.values(results).sort();
// console.log(val);
// let key = Object.keys(results).sort();
// console.log(key)

// // function myLanguages(results) {

// //     let values = Object.values(results);
// //     let key = Object.keys(results);

// //     let all = [];
// //     for (let i = 0; i < values.length; i++){
// //         if (values[i] > 60){
// //             all.push(key[i]);
// //         }
// //     }
// //     return all;
// // }


// // console.log(myLanguages(results));


// -------------------------------- 2 ---------------------------------
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// let name = 'Sam Harris'

// function abbrevName(name){
//     let str = "";
//     let nameS = name.split();
//     for (let i =0; i < name.length; i++){
//         let char = name[i]
//         if (char === char.toUpperCase() && char !== ' '){
//             str+= char + '.';            
//         } 
//     }
//     return str.substring(0,str.length-1);
// }

// console.log(abbrevName(name));



// function abbrevName(name){
//     let str = "";
//     let nameS = name.split(' ');
//     //console.log(nameS);
//     str = nameS[0][0] + '.' + nameS[1][0]
//     return str;
//     //     let char = name[i]
//     //     if (char === char.toUpperCase() && char !== ' '){
//     //         str+= char + '.';            
//     //     } 
//     // }
//     // return str.substring(0,str.length-1);
// }

// console.log(abbrevName(name));

// -------------------------------- 3 ---------------------------------

// let arr = [1, 2, 3, 4, 5]
// function reverse(arr) {
//     //code me
//     let temp = 0
//     let j = arr.length - 1;
//     for (let i = 0; i < arr.length/2; i++){
//         temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         j--;
     
//     } 
//     return arr;
//  }

// -------------------------------- 4 ---------------------------------

// let input = [1,2,3,4] 
// function twosDifference(input){
//     let one = [];
//     let two = [];
//     for (let i = 0; i < input.length; i++){
//       let element = input[i]
//         if (element % 2 === 0) {
//             two.push(element)
//             two.sort();
//         }
//         else
//           one.push(element) 
//           one.sort()
//     } 
    
//     return [one,two];
//  }


// -------------------------------- 5 ---------------------------------

// function twosDifference(input){
//     // let one = [];
//     // let two = [];
//     input.sort()
//     for (let i = 0; i < input.length; i++){
//       let element = input[i]
//       temp = 0;
//       if (element )
//     } 
    
//     return [one,two];
//  }


 //console.log(twosDifference(input));

// -------------------------------- 6 ---------------------------------

//  for(let i = numS.length - 1 ; i >= 0; i--){
// let number = 10004;
//let s = String(number)

//  function simplify(number){
//     //You can do this!
//       let s = ''
//       let zero = "";
//       let v = '';
//       numS = String(number) 
//       if (numS.length < 2) return s
//       for(let i = 0 ; i < numS.length - 1; i++){
//         zero += "0"
//         s = numS[0] + "*"+ 1 + zero 
        
//         if (numS[i+1] !== '0'){
//         v += "+" + s
           
//         }
//         // let t += s
//       }
      
      
//       return v 
//     }
// console.log(simplify(number));

// -------------------------------- 7 ---------------------------------

// let num = 3890;

// function myFunc(num) {

//   let str = String(num);

//   if (str === undefined || str.length === 0) {
//     return "";
//   }

//   let result = str[str.length - 1] !== "0" ? str[str.length - 1] : "";
//   let zeroes = "0";
//   for (let i = str.length - 2; i >= 0; i--) {
//     let plusNum = zeroes + "1";
//     if (str[i] !== "0") {
//       // Edge case when the first number is 0
//       if (result !== "") {
//         result += "+";
//       }
//       result += plusNum;
//       result += "*";
//       result += str[i];
//     }
//     zeroes += "0";
//     
//   }

//   return result.split("").reverse().join("");

// }

// -------------------------------- 8 ---------------------------------

// let number = 3500
// function simplify(number) {
//     let str = String(number);
//     let n = str.length - 1;
//     let result = [];
//     for (let i = 0; i <= n; i++) {
//       if (str[i] == 0) continue;
//       if (i === n) result.push(str[i]);
    
//       else result.push(str[i]+ "*" + 10 ** (n-i)); //** exponenciacion x ** y produces the same result as Math.pow(x,y) 2 ** 3 = 8/
//     }
//     console.log(result)
//     return result.join("+"); 
//   }
// console.log(simplify(number));

// let n = 25;
// //console.log(Math.floor(n));
// function halvingSum(n) {
//     let sum = 0;
//     while (n > 0){
//         sum+= n
//         n = Math.floor(n/2);
//     }

//     return sum;
// }
// console.log(halvingSum(n))


// -------------------------------- 9 ---------------------------------

// let integer = 24
// function divisors(integer) {
//     divs = [];
//     let count = 0;
//     if(integer > 1){
//       for(i=2; i<= integer/2; i++){
//         if(integer % i === 0){
//             let r = Number(integer/i)
//             divs.push(r);
//             count++
//         } 
//       }
//       if (count === 0) return integer + ' is prime'
//     }
//     // divs.push(25)
//     // console.log(divs)
//     divs.sort((a,b) => a-b);
//     // console.log(divs)
//     return  divs;
// }

// console.log(divisors(integer))

// -------------------------------- 10 ---------------------------------

// let array = [1, null, function(){}, 2.5, 'string', 10, undefined, {}, []];
// let multiplier = 2;
// function multiplyAndFilter(array, multiplier){
//     // your code
//     let arr = []
//     for (let i = 0; i < array.length; i++){
//      let el = array[i]
//     //console.log(typeof(el));
//      if (typeof(el) === 'number'){
//         let v = multiplier * el;
//         arr.push(v)
//      }
//     }
//     return arr;
//   }

// console.log(multiplyAndFilter(array, multiplier));


// let n = 5312708

// console.log(typeof(n))


// -------------------------------- 11 ---------------------------------

// function asteriscIt(n) {
//     if (typeof(n) === 'object') sn = n.join('');
//     else  sn = String(n)

//     let str = sn[0];
//     let j = 0;

//     for (let i = 1; i < sn.length; i++){  
//       if (sn[j] % 2 === 0 && sn[i] % 2 === 0){
//         if (j !== sn.length - 1){
//             str += '*'
//             str += sn[i];
//           }
//       } else {
//           str += sn[i]
//       }
//       j++;
//     }
//     return str;
// };

//   console.log(asteriscIt(n));

// -------------------------------- 12 ---------------------------------

// let arr = [2,1, 3, 4]
// function getMinMax(arr){
//     //..
//     let narr = []
//     let j = 0
//     if (arr.length === 1) return arr.concat(arr);
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[j] > arr[i] || arr[i] === arr[j]){
//         narr.push(arr[i])
//         //narr.push(arr[j])
//       } else {
//         narr.push(arr[j])
//         narr.push(arr[i])
//       }
//       j++
//     }
    
//     return narr;
//   };

// console.log(getMinMax(arr));


// -------------------------------- 13 ---------------------------------

// let arr = [1];
// function getMinMax(arr){
//     let narr = [];
//     let max = arr[0];
//     let min = arr[0];
//     if (arr.length === 1) return arr.concat(arr);

//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > max){
//         max = arr[i]
//       }if (arr[i] < min){
//           min = arr[i]
//       }
//     }
//     narr.push(min);
//     narr.push(max);
    
//     return narr;
//   };

//   console.log(getMinMax(arr));

// let string = "new score: two three"
//let ss = string.split(" ");
// console.log('jdkshffg',ss)

// -------------------------------- 14 ---------------------------------

// function scoreboard(string) {
//     // code here! The score is four nil"
//     let ss = string.split(' ');
//     let arr = [];
    
//     let obj = { 'nil' : 0, 
//                 'one': 1, 
//                 'two': 2, 
//                 'three' :3, 
//                 'four' : 4, 
//                 'five': 5, 
//                 'six': 6, 
//                 'seven': 7, 
//                 'eight':8,
//                 'nine':9}

//     arr.push(obj[ss[ss.length-2]])
//     arr.push(obj[ss[ss.length-1]])

//     return arr;
    
//   }
// let string = 'The score is four nil'
// console.log(scoreboard(string)) 
// let arr = [1,2,3,4,5]
// //[ 1,  2,  4, 6, 10, 18, 20]
// function inAscOrder(arr) {
//     //let asc = arr.sort((a, b) => a - b);
//     let nwarr = [];
//     let desc = [];
//     let count = 0;
//     for (let i =0; i < arr.length; i++){
//         nwarr.push(arr[i]);
//     }
//     let asc = arr.sort((a, b) => a - b);
//     for (let j = 0; j < arr.length; j++){
//         if (nwarr[j] === asc[j]){
//             count ++
//         } else{
//             count--;
//         }
//     }
    
//     if (count === arr.length) return true;
//     else return false;
    
//    }
// console.log(inAscOrder(arr));

// -------------------------------- 15 ---------------------------------

// function calculate(num1, operation, num2) {
//     //TODO: make a basic calculator. 
//     let result = 0;
//     // if (num2 === 0 && operation === '*'){
//     //     return null
//     // }
//     if (num2 === 0 && operation === '/' ){
//         return null
//     }
//     if (operation === '+'){
//      result = num1+ num2
//     }
//     else if (operation === '-'){
//      result = num1 - num2
//      return result;
//     }
//     else if (operation === '*'){
//      result = num1 * num2
//      return result;
//     }
//     else if (operation === '/'){
//      result = num1 / num2;
//      return result;
//     }
  
//      else{
//      return null;
//     }
    
//    }

// console.log(calculate(3, '*', 0))

// -------------------------------- 16 ---------------------------------

// function digital_root(n) {
//     let s = String(n);
//     let sum = 0;
//     if (s.length === 1){
//         return sum+= n;
//     }
//     for (let i =0; i < s.length; i++){
//      sum += Number(digital_root(s[i]))
//     }
//     let y = String (sum)
//     let z = 0;
//     if (y.length > 1) {
//        for (let j =0; j < y.length; j++){
//              z += Number(digital_root(y[j]))
//         }
//      }
    
//     return z;
//    }
// console.log(digital_root(493193));

// -------------------------------- 17 ---------------------------------

// let array = [13,11,10,3,2,1,4,5,6,9,7,8]
// function findNumber(array) {
//     let n = array.length + 1
//     let exp = n*(n+1)/2;
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//          sum+= array[i]
//     }
//     return exp - sum;
// }

// -------------------------------- 18 ---------------------------------

// console.log(findNumber(array));
// input = [1, 4, 7, 10] 
// function twosDifference(input){
//     let one = [];
//     let two = [];
//     for (let i = 0; i < input.length; i++){
//       let element = input[i]
//         if (element % 2 === 0) {
//             two.push(element)
//             two.sort();
//         }twosDifference
//         else
//           one.push(element) 
//           one.sort()
//     } 
    
//     return [one,two];
//  }

//  console.log(twosDifference(input));

// -------------------------------- 19 ---------------------------------

// let arr = [12, 10, 8, 12, 7, 6, 4, 12,10];
// function highestRank(arr){
//     //Your Code logic should written here
//       let obj = {}
//       let maxc = 0;
//       let result;
//       for (let i = 0; i < arr.length; i++){
//             if (obj[arr[i]] === undefined){
//                 obj[arr[i]] = 1;
//             } else {
//                 obj[arr[i]] = obj[arr[i]] + 1
                
//             }
//             if (obj[arr[i]] > maxc){
//                 maxc = obj[arr[i]] 
//                 result = arr[i];
//             }
//       }
//       return result;
      
// }

// console.log(highestRank(arr));


// -------------------------------- 20 ---------------------------------

// const orderedCount = text => { // O(n)
//     const result = [];
//     const letters = {};
//     for (let i = 0, l = text.length; i < l; i++) {
//       const char = text[i];
//       const index = letters[char];
//       console.log(index)

//       if (index === undefined) {
//         letters[char] = i;
//         result.push([char, 1]);
//       } else {
//         result[index][1]++;
//       }
//     }
    
//     return result;
//   }

// -------------------------------- 21 ---------------------------------

// var orderedCount = function (text) {
//     // Implement me!
//     let arr = []
//     let obj = {};
//       for (let i =0; i < text.length; i++){
//         let element = text[i];
//         let index = obj[element]
//         if ( index  === undefined){
//           obj[element] = i;
//           arr.push([element, 1]);
//         } else {
//           arr[index][1]++;
//         }
//       }
//       return arr;
//   }

// -------------------------------- 22 ---------------------------------

// var number=function(array){
//     let obj = {}
//     let arr = [];
//     for (let i = array.length-1; i >= 0; i--){
//       let element = array[i]
//       //if (obj[element] === undefined){
//         arr.push(element);
//       //}
//     }
    
//     return arr;
//   }

// // var number=function(array){
 
// //     if (array.length === 0) return [];
// //     for (let i = 0; i < array.length; i++){
// //       array[i] = i + 1 + ': ' + array[i];
// //     }
// //     return array;
    
// // }

// // console.log(number([' ', ' ', ' ']))

// -------------------------------- 24 ---------------------------------
// let students = [student1 = {
//     'name' : 'jessi',
//     'fives' : 3,
//     'tens': 2,
//     'twenties' : 1 },


//     student2 = {
//         'name' : 'jessi',
//         'fives' : 3,
//         'tens': 2,
//         'twenties' : 1 }
//     ]



// function mostMoney(students) {
//     // your code here
//     let money = Object.values(students);
//     let st = Object.keys(students);
//     console.log(st);
//     let temp = 0;
//     let student;
//     for (let i = 0; i < money.length; i++){
//       if (temp < money[i]){
//           temp = money[i]
//           student = st[i]
          
//        }
//     }
//     return student;
// }
// console.log(mostMoney(students));

// -------------------------------- 25 ---------------------------------

//  function getSum( a,b ){
//     //Good luck!
//     if (a === b) return a;
//     let sum =0;
//     if (a > b){
//         for (let i = b; i <= a; i++){
//             sum = sum +i;
//            } 
//     }    
//     for (let i = a; i <= b; i++){
//      sum = sum +i;
//     }
//     return sum;
    
//  }
//  console.log(getSum( 489, -154));

// -------------------------------- 26 ---------------------------------

// let s = 'hola';
// var splitInParts = function(s, partLength){
//     // Good Luck!
//     let sp = s.split('');
//     console.log(sp)
//     let arr = [];
//     for (let i = 0; i < sp.length; i++){
//         let char = sp[i];
//         if (i % partLength === 0 && i!== 0){
//             arr.push(' ');
//         }
//         arr.push(char); 
        
//     }
//     return arr.join('');
//   }
// console.log(splitInParts(s, 1));

// -------------------------------- 27 ---------------------------------

// let str = 'hola'
// function reverse_and_combine_text(str){

//     // ENJOY! :)  
//     let s = str.split();
//     console.log(s);
//     let nws = '';
//     for (let i = str.length -1; i >= 0; i--){
//       let char = str[i]
//       if (char === ' '){
//           console.log('djsfh')
//       } else{
//         nws = nws+ char;
//       }
      
//     }
//     return nws;
// }

// console.log(reverse_and_combine_text(str));

// -------------------------------- 28 ---------------------------------

// function rowSumOddNumbers(n) {
// 	// TODO
//   let sum = 0;
//   for (let i = 1; i <= n; i++){
//     if (i % 2 !== 0){
//       sum += i;
//     }
//   }
//   return sum;
// }

// -------------------------------- 29 ---------------------------------

// function reverse_and_combine_text(str) {
//     let s = str.split;
//     console.log('kk',s)
//     while (s.length !== 1) {
//       s = s.map(v => v.split``.reverse().join``);
//       let temp = [];
//       for (let i = 0; i < s.length; i++) {
//         if (s.length % 2 !== 0 && i === s.length - 1) {
//           temp.push(s[i]);
//           break;
//         }
//         if (i % 2 === 0) temp.push(s[i] + s[i + 1]);
//       }
//       s = temp;
//     }
//     return s[0];
//   }

// console.log(reverse_and_combine_text('ana bca'));

// -------------------------------- 30 ---------------------------------
// let password = 'ana!'
// function validPass(password){
//     if (password.length < 4 || password.length > 19) return "INVALID"
//     let alpha = "abcdefghijklmnopqrstuvwxyz"
//     let numeric = "0123456789"
//     let alphaCount = 0
//     let numericCount = 0
//     password = password.toLowerCase()
//     for (let i = 0; i < password.length; i++) {
//       let char = password[i]
//       if (!(alpha.includes(char)) && !(numeric.includes(char))) return "INVALID" 
//       if (alpha.includes(char)) alphaCount++
//       if (numeric.includes(char)) numericCount++
//     }
//     if (alphaCount > 0 && numericCount > 0) return "VALID"
//     else return "INVALID"
//   }

// console.log(validPass(password));

// -------------------------------- 31 ---------------------------------
// let s = '1 beer'
// function hydrate(s) {
//     // your code here
//     let count = 0;
//     for(let i =0; i < s.length; i++){
//       if (Number(s[i] > 0)){
//        count++
//       }
//     }
//     if (count > 1){
//         return count + ' glasses of water'
//     } else {
//         return count + ' glass of water'
//     }
//   }
// console.log(hydrate(s));

// -------------------------------- 32 ---------------------------------
// function solve(n) {
//     let notes = [500, 200, 100, 50, 20, 10];
//     var counter = 0;
//       for (let i = 0; i < notes.length; i++) {
//         while (n >= notes[i]) {
//           counter++;
//           n -= notes[i];
//         }
//       }
//       if (n == 0) {
//         return counter;
//       } else {
//         return -1;
//       }
// }

// console.log(solve(350));

// -------------------------------- 33 ---------------------------------

// function encode(string) {
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     let num = ['1', '2', '3', '4', '5'];
//     let stringArr = string.split("");
//     for (let i = 0; i < stringArr.length; i++) {
//       if (vowels.includes(stringArr[i])){
//         stringArr[i] = num[vowels.indexOf(stringArr[i])];
//       }
//     }
//     return stringArr.join("");
//    }

// -------------------------------- 34 ---------------------------------
//    function decode(string) {
//     let stringArr = string.split("");
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     let num = ['1', '2', '3', '4', '5'];
//     for (let i = 0; i < stringArr.length; i++) {
//       if (num.includes(stringArr[i])){
//         stringArr[i] = vowels[stringArr[i] - 1];
//       }
//     }
//     return stringArr.join("");
//   }


// console.log(encode('hello'));
// console.log(decode('h2ll4'));

// -------------------------------- 35 ---------------------------------

// multiplicationTable = function(size) {
//     // insert code here
//     let result = []
//     for (let i = 0; i < size; i++){
//       result[i] =[]
//       for (let j = 0; j < size; j++){
//        result[i][j] = (i+1)*(j+1)
//       }
//     }
//     return result;
//   }
// console.log(multiplicationTable(2))

// -------------------------------- 36 ---------------------------------

// function change(string){
//     // ..
//     let str = '';
//     let abc = "abcdefghijklmnopqrstuvwxyz"
//     //         abcdefghijklmnopqrstuvwxyz
//     let s = string.toLowerCase();

//     for (let i = 0; i < abc.length; i++){
//         if (s.indexOf(abc.charAt(i)) === -1){
//             str+='0'
//         } else{
//         str+='1'
//         }
//     }
//     console.log(str.length);
//     return str;
//   }

//   console.log(change('a **&  bZ'));
//   1100000000000000000000001
  
// -------------------------------- 37 ---------------------------------

//let numbers = [5, 8, 12, 19, 22]
// function sumTwoSmallestNumbers(numbers) {  
//     //Code here
//     let sum = 0;
//     let firstMin = numbers[0];
//     let secondMin = numbers[0];
//     for (let i = 0; i < numbers.length; i++){
//       if (numbers[i] < firstMin){
//         firstMin = numbers[i]
//       } 
//     }
//     console.log(firstMin)
//     sum+= firstMin;
//     for (let i = 0; i < numbers.length; i++){
//         if (numbers[i] === firstMin) continue;
//         if (numbers[i] < secondMin){
//             secondMin = numbers[i]
//         } 
//       }
//       console.log(secondMin)
//       sum+= secondMin;
//     return sum;
//   }

// console.log(sumTwoSmallestNumbers(numbers))

// -------------------------------- 38 ---------------------------------

// let numbers = [5, 8, 12, 19, 22]
// //let numbers = [15, 28, 4, 2, 43]
// function sumTwoSmallestNumbers(numbers) {  
//     //Code here
//     let num = numbers.sort((a,b) => a-b);;
//     let firstMin = num[0];
//     let secondMin = num[1];
//     for (let i = 1; i < num.length; i++){
//       if (num[i] < firstMin){
//         secondMin = firstMin
//         firstMin = num[i]
//         continue;
//       } 
//       if ((num[i] < secondMin) && (num[i] > secondMin)){
//           secondMin = num[i];
//       }
//     }
//     return firstMin + secondMin;
//   }

//   console.log(sumTwoSmallestNumbers(numbers))

// -------------------------------- 39 ---------------------------------

// var sing = function () {
//     // return the lyrics as a string ...
//     let lyrics = []
//     //if (num > 99) return ['Go to the store and buy some more, 99 bottles of beer on the wall.'];
//     for (let i = 99; i >= 3; i--){
//         lyrics.push(i + ' bottles of beer on the wall, ' + i + ' bottles of beer.');
//         lyrics.push('Take one down and pass it around, ' + (i - 1) + ' bottles of beer on the wall.');
//     }
//     return lyrics.concat([
//         '2 bottles of beer on the wall, 2 bottles of beer.',
//         'Take one down and pass it around, 1 bottle of beer on the wall.',
//         '1 bottle of beer on the wall, 1 bottle of beer.',
//         'Take one down and pass it around, no more bottles of beer on the wall.',
//         'No more bottles of beer on the wall, no more bottles of beer.',
//         'Go to the store and buy some more, 99 bottles of beer on the wall.'
//       ]);;
// };

// console.log(sing())

// -------------------------------- 40 ---------------------------------

// let str = '38287603419203970642350722018970'
// function divisibleByThree(str){
//     let total =0;
//      for (let i = 0; i < str.length; i++){
//       total += Number(str[i]) 
//      }
//      console.log('dsj',total)
//      if (total % 3 === 0) return true;
//      else return false;
// }

// console.log(divisibleByThree(str))

// let s = 'testing'

// -------------------------------- 41 ---------------------------------
// function getMiddle(s)
// {
//   //Code goes here!
//   let wr = (s.length % 2 === 0;
//   console.log(wr)
//   if (wr % 2 !== 0) return 
//   let st = '';
//   for (let i = 1; i <= wr ; i++){
//     st += s[i]
//   }
//   return st;
// }

// console.log(getMiddle(s))
// let s = ['h', 'o', 'l']
// let s = 'hola angel'
// var reverseString = function(s) {
//     let temp = 0
//     let j = s.length - 1;
//     for (let i = 0; i < s.length/2; i++){
//         temp = s[i];
//         s[i] = s[j];
//         s[j] = temp;
//         j--;
     
//     } 
//     return s;
//     // return s.splice('').reverse().join('')
//   };

// console.log(reverseString(s));

// -------------------------------- 42 ---------------------------------

// let s = 'hola bye'
// var reverseString = function(s){
//   return s.split('').reverse().join('');
// }
// console.log(reverseString(s));

// str = 'manaameo'
// function norepeat(str){
//   let charCount = {}
//   let x = [];
//   let j = 0
//   for (let i =0; i < str.length; i++){
//     let char = str[i]
//     if (charCount[char]){
//       charCount[char]++;
//     } else {
//       charCount[char] = 1
//     }
//   }
//   for (let j in charCount){
//     if (charCount[j] === 1){
//       x.push(j)
//     }
//   }
//   return x.join('');
// }

// console.log(norepeat(str));


// let arr = [6,4,3,2,1,7]
// let sum = 6

// -------------------------------- 43 ---------------------------------
// function sumFinder(arr, sum){
//   var differ = {}, 
//       len = arr.length,
//       substract;
  
//   for(var i =0; i<len; i++){
//      substract = sum - arr[i];
//     console.log(substract)
//      if(differ[substract])
//        return true;       
//      else
//        differ[arr[i]] = true;
//   }
  
//   return false;
// }

// console.log(sumFinder(arr, sum))

// -------------------------------- 44 ---------------------------------
// arr = [1,9,3,4,5,6]

// function topSum(arr){
  
//   var biggest = arr[0], 
//       second = arr[1], 
//       len = arr.length, 
//       i = 2;

//   if (len<2) return null;
  
//   if (biggest<second){
//     biggest = arr[1];
//     second = arr[0];
//   } 
  
//   for(; i<len; i++){

//    if(arr[i] > biggest){
//       second = biggest;
//       biggest = arr[i];
//     }
//    else if (arr[i]>second){
//       second = arr[i];
//    }
    
//  }
//  return biggest + second;
// }

// -------------------------------- 45 ---------------------------------
// function topSum(arr){
// let b = arr.sort();
// let sum = b[b.length-1] + b[b.length-2]
// return sum;
// }
// console.log(topSum(arr))


// function countZero(n){
//   let count = 0;
//   while( n > 0){
//     count += Math.floor(n/10)
//     n = n/10
//   }
//   return count;
// }

// console.log(countZero(50));

// -------------------------------- 46 ---------------------------------
// function subStringFinder(str, substr) {

//     let i = 0; // index for going through str
//     let j = 0; 
//     while (i < str.length) {
//       substrIndx = i; 
//       while (j < substr.length) {
//         if (str[i] == substr[j]) {
//           j++;
//           i++;
//         } else {
//           j = 0;
//           i = substrIndx + 1;
//           substrIndx = -1;
//           break;
//         }
//       }
//       if (j == substr.length) {
//         break;
//       }
//     }
//     
//     return substrIndx;
//   }


// console.log(subStringFinder('abbcdabbbbbck', 'bbbck'))

// -------------------------------- 47 ---------------------------------

// function howManyTimes(annualPrice, individualPrice) {
//   // code here
//   let x = Math.round(annualPrice / individualPrice)
//   return x
// }

// console.log(howManyTimes(40, 15));

// -------------------------------- 48 ---------------------------------
// let paragraph = 'hello. my name is inigo montoya. you killed my father. prepare to die.'
// function fix(paragraph){
//   let str = '';
//   for (let i = 0; i < paragraph.length; i++){
//     if ( i === 0) str += paragraph[i].toUpperCase();
//     else if (paragraph[i] === '.' && paragraph[i+1] === ' '){
//         str += paragraph[i]
//         str += paragraph[i+1] 
//         str += paragraph[i+2].toUpperCase(); 
//         i+= 2
//     }
//     else{
//         str += paragraph[i]
//     }
//   }
//   return str;
// }

// console.log(fix(paragraph))

// -------------------------------- 49 ---------------------------------
// let s = 'abcdef'
// function capitalize(s){
//   let s1 = '';
//   let s2 = '';
//     for (let i = 0; i < s.length; i++){
//     let el = s[i]
//       if ( i % 2 === 0){
//         s1+=el.toUpperCase();
//       } 
//       else {
//         s1+=el
//       }
//     }
//     for (let i = 0; i < s.length; i++){
//       let el = s[i]
//         if ( i % 2 !== 0){
//           s2+=el.toUpperCase();
//         } 
//         else {
//           s2+=el
//         }
//       }
//     return [s1, s2];
//   };

// console.log(capitalize(s))
// -------------------------------- 50 ---------------------------------

// n = 417
// function reverseBits (n) {
//   // your code here
//    if(n===0){
//         return 0;
//     }
//     let arr=[];
//     while(n>0){
//         arr.push(n%2);
//         n=Math.floor(n/2);
//     }
//     let str=arr.join('');
//     return Number(str,2);
// }

// console.log(reverseBits(n));

// -------------------------------- 51 ---------------------------------
// function solve(n){
//   let i = 1
//   while (i < n) {
//     if ((Math.sqrt(((i*i) + n)) % 1) === 0) {
//       return i * i
//     }
//     i++
//   }
//   return -1
// }

// console.log(solve (5));

// -------------------------------- 52 ---------------------------------
// var orderedCount = function (text) {
  
//     let obj = {};
//     for (let i =0; i < text.length; i++){
//       let element = text[i];
//       if (obj[element] === undefined){
//         obj[element] = 1;
//       } else {
//         obj[element] = obj[element] + 1
//       }
//     }
//     return Object.entries(obj);
//   }

// console.log(orderedCount('121'));

// -------------------------------- 53 ---------------------------------
// let sentence = " A fun little challenge! "
// function reverser(sentence) {
//     sentence = sentence.split(' ')
//     console.log(sentence)
//     let str = [];
//     let le = 0
//     for (let i = sentence.length - 1 ; i >= 0; i--){
//         let element = sentence[i]
//         for (let j = element.length -1 ; j >= 0; j--){

//             str.push (element[j])
//         }
        
//     }
//     return str.join('');
//   }
// console.log(reverser(sentence))


// -------------------------------- 54 ---------------------------------

// function firstRepeatingLetter(str){
// 	for (var i = 0; i < str.length; i++){
// 		var count = 0;
		
// 		for (var j = i+1; j < str.length; j++){
			
// 			if (str[i] === str[j]) {
// 				return str[j];
// 			}
// 		}	

// 	}
	
// }

// console.log(firstRepeatingLetter("David & Nimit"))