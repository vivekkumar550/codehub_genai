let Component1 = (props) => {
  console.log(props);
  return (
    <div>
      {props.as}
      <h2>{props.variable}</h2>
      <h2>This is Heading 2</h2>
      <h3>Component1</h3>
    </div>
  );
};

export default Component1;

// props - when we have to pass data from one component to another component
