import GrandSon from "./GrandSon";

let Son = ({aa}) => {
  return (
    <div className="container">
      <h2>Son Component</h2>
      {aa}
      <GrandSon Mywill={aa}></GrandSon>
    </div>
  );
};

export default Son;
