import "./App.css";
// import Button from "./Button";
// import Component1 from "./Component1";
// // import { Component2 } from "./Component2";
// import Component3, { Component2, Component4 } from "./Component2";
import GrandF from "./GrandF";
// import Father from "./Father";
// import Son from "./Son";
// import GrandSon from "./GrandSon";
function App() {
  let Mywill = "I will be successfull deveoper";
  // let message = "Hellow from JS";
  return (
    <div className="App">
      {/* <h2>Hello World!</h2>
      {message}
      <Button></Button>
      <Component1
        as={message}
        variable={"Hellow from React this is a string"}
      ></Component1>
      <Component2></Component2>
      <Component3></Component3>
      <Component4></Component4> */}
      <GrandF a={Mywill}></GrandF>
      
    </div>
  );
}

export default App;
