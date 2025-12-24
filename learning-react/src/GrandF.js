import Father from "./Father";

let GrandF = ({a}) => {
  return (
    <div className="container">
        {a}
      <h2>GrandFather Component</h2>
      <Father will={`now ${a} 1243235`}></Father>
    </div>
  );
};

export default GrandF;
