// let arr = [1, 3, 4, 5, 5, "string"];

// console.log(arr[3]);

// // How to access array values

// arr[0] = 45;

// console.log(arr);
// // INsert the element in the array at the last
// arr.push(223);
// console.log(arr);
// arr.push("war");
// console.log(arr);

// // Delete the elemnt from the element at the last using pop

// arr.pop();
// console.log(arr);

// // insert value at index 0

// arr.unshift("6548965389");
// console.log(arr);

// arr.unshift("67");

// console.log(arr);

// // Remove element form index 0 -- it will remove the value from

// arr.shift();
// console.log(arr);
// console.log(arr.length);

// /// ----OBJECTS (Key and value pait) -- value stored in key valu form

// let obj = {
//   s: "sid",
//   age: 24,
//   add: "address",
//   data: {
//     first: "Vivek",
//     Last: "kumar",
//   },
// };

// console.log(obj);

// // How to read particular data value

// console.log(obj.data.first);

// // How to insent the data

// obj.data.art = "rest";
// console.log(obj);


// // Update the data from objects 

// obj.age=70;

// console.log(obj);

// ---For loop  in js

// let arr1 = [5,6,7,8,67,89,9,0]

// for (let a=0; a<arr.length; a++){

//   arr[a] = a*arr[a];

//   console.log(a, arr[a]);
// }
// console.log(arr)

// -- Map-- to iterate through every element of array 
// return a new array 
// callback function with few arguments 1.value, 2. index 

let arr = [5,6,7,8,67,89,9,0]

let arr1=arr.map((val,index)=>{
return val*index;

});

console.log(arr,arr1);

// Filter --

let arr2= arr.filter((val,index)=>{

  return val %2==1;

});

console.log(arr2);



// Reduce - just give single value


let val2= arr.reduce((acc,val,index)=>{
 console.log(acc,val,index);

 return acc +val;
},199);

console.log(val2);

// If Else statement

let marks=60;

if (marks>80){

  console.log("I will get a prty");
  
} else if (marks>70){

  console.log("I will get a bike"); 


} else if (marks>60){
 console.log("I will get a purse");

}

else {
   console.log("Now I will get slap");
   
}
 




 


 

