import React, { useState } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  const handleClick = () => {
    setCount(prevState => prevState + 1);
  };

  const tick = () => {
    setDate(new Date());
  };

  return (
    <div>
      <p>Time: {date.toLocaleTimeString()}</p>
      <button type="button" onClick={handleClick}>
        Click
      </button>
    </div>
  );
};
