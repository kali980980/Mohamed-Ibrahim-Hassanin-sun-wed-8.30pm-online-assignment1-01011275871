//part1

//Q1 solution


let arr = ["123"];
let num = Number(arr[0]) + 7;
console.log("num: ", num);

//Q2 solution

function checkValue(x){
    if(!x){
        return "invalid value";
    }else{
        return "valid value";
    }
}

console.log(checkValue(0)); //"invalid value
// "
console.log(checkValue("5")); //"valid value
// "

//Q3 solution
for(let i = 0; i < 10; i++){
    if(i % 2!=0){
        console.log(i);
    }
    continue;
}

//q4 solution

const x = [1,2,3,4,5];

const evenValues = x.filter((item) => item % 2 === 0);
console.log("evenValues: ", evenValues);

//q5 solution

const r = [1,2,3];
const t = [4,5,6];

const array = [...r, ...t];
console.log("array: ", array);

//q6 solution

let day = 1 ;
switch(day){
    case 1:
        console.log("sunday");
        break;     
    case 2:
        console.log("monday");
        break;
    case 3:
        console.log("tuesday");
        break;  
    case 4:
        console.log("wednesday");
        break;  
    case 5:
        console.log("thursday");
        break;
    case 6:
        console.log("friday");
        break;
    case 7:
        console.log("saturday");
        break;
    default:
        console.log("invalid day");
}   

console.log("day: ", day);

//q7 solution

let u =["a","ab","abc"];

let length = u.map((item) => item.length);
console.log("length: ", length);

//q8 solution

function checkDiviableble(num){
    if(num % 3 === 0 && num % 5 === 0){
        return "divisible by both 3 and 5";
    }else if(num % 3 === 0){
        return "divisible by 3";
    }else if(num % 5 === 0){
        return "divisible by 5";
    }else{
        return "not divisible by either 3 or 5";
    }
}

console.log(checkDiviableble(15));  
console.log(checkDiviableble(9));
console.log(checkDiviableble(10));
console.log(checkDiviableble(7));

//q9 solution

const p =(p)=> `The square of ${p} is ${p*p}`;
console.log(p(5
));

//q10 solution

// let person = {
//     name: "mohamed",
//     age : 25,
// };
// console.log("person: ", person);

const person = {
    name: "mohamed",
    age : 25,
};
let {name, age} = person;
console.log("name: ", name);
console.log("age: ", age);

//q11 solution

let sum = (...numbers) => {
     let total = 0;
     for(let num of numbers){
         total += num;
     }  
        return total;
};

console.log(sum(1,2,3,4,5));

//q12 solution

let success = (message) => `Success: ${message}`;
let error = (message) => `Error: ${message}`;
console.log(success("Data loaded successfully"));
console.log(error("Failed to load data"));

//q13 solution function to find the largest number in an array
function findLargest(arr){
    if(arr.length === 0){
        return null;
    }   
    let largest = arr[0];
    for(let num of arr){
        if(num > largest){
            largest = num;
        }
    }
    return largest;
}

console.log(findLargest([1,3,7,2,4])); // 7

// q14 solution

function getInfo(obj){
    let {name, age} = obj;
    return `Name: ${name}, Age: ${age}`;
}

console.log(getInfo({name: "Ali", age: 30})); // Name: Ali, Age: 30

//q15 solution function split a string into an array of words'
function splitString(str){
    return str.split(" ");
}   
console.log(splitString("The quick brown fox")); // ["The", "quick", "brown", "fox"]

// 1. Difference between forEach and for...of
// forEach: Array method, runs a callback on each element, cannot use break/continue.
// for...of: Loop for iterables (arrays, strings, sets, maps), supports break/continue.
// Use forEach when you want to process all elements without stopping.
// Use for...of when you need control over the loop flow.

// 2. Hoisting and Temporal Dead Zone (TDZ)
// Hoisting: JS moves variable/function declarations to the top of scope before execution.
// Example:
console.log(a); // undefined
var a = 5;

// TDZ: The period before let/const are initialized. Accessing them throws ReferenceError.
// Example:
console.log(b); // ReferenceError
let b = 10;

// 3. Difference between == and ===
// == : Loose equality, does type coercion. Example: 5 == "5" → true.
// === : Strict equality, checks type and value. Example: 5 === "5" → false.
// Best practice: use === to avoid unexpected type conversions.

// 4. try-catch and async importance
// try-catch: try executes code, catch handles errors.
// Example:
try {
  JSON.parse("invalid JSON");
} catch (error) {
  console.log("Error caught:", error.message);
}

// In async/await, try-catch prevents unhandled promise rejections.
// Example:
async function fetchData() {
  try {
    let response = await fetch("invalid-url");
  } catch (error) {
    console.log("Fetch failed:", error.message);
  }
}

// 5. Type Conversion vs Coercion
// Type Conversion (explicit): You manually change type.
Number("123"); // 123
String(456);   // "456"

// Type Coercion (implicit): JS automatically converts types during operations.
"5" + 1;   // "51" (string coercion)
"5" - 1;   // 4   (number coercion)
