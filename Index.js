// console.log(a); // undefined
// var a = 10;
// console.log(a);

// // ES 6 let and const

// //console.log(b);
// // temporal dead zone
// //reference error
// let b = 20;
// b = 30;
// console.log(b);

// const c = 2335;
// // c=225;  type error
// console.log(c);

// //hoisting
// x = 5;

// console.log(x);
// var x;

// // Block scope

// {
//   let a = 110;
//   console.log(a);
// }

// console.log(a);

// // Functions and its type

// // 1. Named function.

as(); // it is allowed in only named fucniton

function as() {
  console.log("Hello world");
  console.log("Hello world");
}
as();

// 2. fucntion expression

var a = function () {
  console.log("Fuction expression");
};

a();

//3. Arrow fucntion

var ass = () => {
  console.log("Arrow function");
};

ass();

//4. call back fucntion , IIFE Immidiately invoked fucntion expresstion.

(() => {
  console.log("IIFE");
  console.log("Callback");
})();



let addtwonum = (parameter1, parameter2) =>{
    let num1= parameter1;
    let num2=parameter2;
    console.log(num1+num2);
}

addtwonum (10,20);
addtwonum (67,89);