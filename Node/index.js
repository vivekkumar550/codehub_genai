const fs = require("fs");
const http = require("http");
// // blocking code
// // synchronous code

// //1 Read file ina synchronous way
// // const data = fs.readFileSync("file.txt", "utf-8");
// // console.log(data);

// const data = fs.readFileSync("./file.txt", "utf-8");

// console.log("data file read from is", data);

// //2 Write file in a synchronous way

// fs.writeFileSync(
//   "./file2.txt",
//   "This is file 2 created using writeFileSync",
//   "utf-8"
// );

// // Non blocking code
// // Asynchronous way
// // 1 Read file
// // 3 Arguments
// // 1. path of the file,2. encoding type, 3. callback functionn(error, data)

// fs.readFile("./file.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("Error while reading file", err);
//     console.log(data);
//     fs.readFile("./file2.txt", "utf-8", (err1, data1) => {
//       if (err) {
//         console.log("Error while reading file2", err1);
//       } else {
//         console.log("file2.txt data is", data1);
//       }
//     });
//   }
// });

// console.log("Something written");

// fs.writeFileSync

// // http status code
// // 1xx: 100 - 199: Informational
// // 2xx: 200 - 299: Success
// // 3xx: 300 - 399: Redirection
// // 4xx: 400 - 499: Client Error
// // 5xx: 500 - 599: Server Error

// 1. server creation
// callback fu
const server = http.createServer((req, res) => {
  res.end("My first server created using Node.js");
});
// 2. server start

server.listen(9000, "127.0.0.1", () => {
  console.log("Server started on port no. 9000");
});

