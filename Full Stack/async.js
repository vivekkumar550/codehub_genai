// setTimeout(() => {
//   console.log("Hello from settime out");
// }, 1000);

// console.log("Hellow word");

// setTimeout(() => {
//   console.log("Funciton1");
//   setTimeout(() => {
//     console.log("Function2");

//     setTimeout(() => {
//       console.log("Function3");
//       setTimeout(() => {
//         console.log("Function4");
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 2000);

// let fn = (para1, para2) => {
//   let num1 = para1;
//   let num2 = para2;
//   console.log(num1 + num2);
// };
// fn(10, 20);

// State
// Pending
// Fulfilled
// Rejected

let myResulttPromise = new Promise((res, re) => {
  let marks = 45;

  if (marks > 70) {
    res("Now my father will give me a terat");
  } else {
    re("Now I will get slap");
  }
});

//.then and .catch
//Error handling
// Chaining process

myResulttPromise
  .then((msg) => {
    console.log("Solve cases", msg);
  })
  .catch((err) => {
    console.log("Reject cases", err);
  });

// Async and await
// No inbuild error handling
// for resolve cased putput will come insie try
// error cased will be handeled by catch

// const promoiseHandler = async () => {
//   try {
//     const response = await myResulttPromise;
//     console.log(response);
//     console.log("Hello inside async");
//   } catch (err) {
//     console.log(err);
//   } finally {
//     console.log("It will run in all cases");
//   }
// };

// promoiseHandler();

// Fetch and api

const apiHandler = async () => {
  try {
    const respose = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(respose);
    const data = await respose.json();
    console.log(data);
    const table = document.querySelector("table");
    const tablebody = document.querySelector("#a");
    table.classList.remove("hidden");
    data.forEach((asd) => {
      let tr = document.createElement("tr");
      tr.innerHTML = `<td>${asd.name}</td>
      <td>${asd.username}</td>`;
      tablebody.appendChild(tr);
    });
  } catch (err) {
    console.log(err);
  }
};

apiHandler();

  