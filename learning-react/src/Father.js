import Son from "./Son";

let Father = ({ will }) => {
  return (
    <div className="container">
      {will}
      <h2>Father Component</h2>
      <Son aa={`${will} now earning 20lpa`}></Son>
    </div>
  );
};

export default Father;
