import React, { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);
  return (
    <div>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={() => setCounter((prev) => prev + 1)}>+1</button>
      <button onClick={() => setCounter((prev) => prev - 1)}>-1</button>
      <button onClick={() => setCounter(value)}> reset</button>
    </div>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
