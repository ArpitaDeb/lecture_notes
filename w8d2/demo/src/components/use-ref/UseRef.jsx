import React from 'react';

const UseRef = () => {

  const clickHandler = () => {
    // Implement me
  };

  return (
    <div>
      <h1>Use Ref</h1>
      <div>
        <label htmlFor="input-field">Input Field:</label>
        <input id="input-field" type="text" />
      </div>
      <div>
        <button type="button" onClick={clickHandler}>Click Me!</button>
      </div>

      {/* <div>
        <p>{counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Increment!</button>
        <button onClick={showAlert}>Show Alert</button>
      </div> */}
    </div>
  );
};

export default UseRef;
