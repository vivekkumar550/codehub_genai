const Counter = ({ a, handleIncrement, handleDecrement, handleReset }) => {
  return (
    <div className="counter">
      <p>{a}</p>
      {a < 0 ? <p className="a">Negative Value</p> : null}

      <div>
        <button onClick={handleIncrement} className="increment">
          Increment
        </button>
        <button onClick={handleDecrement} className="decrement">
          Decrement
        </button>
        <button onClick={handleReset} className="reset">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
