import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    // this return will execute when component unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p>Time: {date.toLocaleTimeString()}</p>
    </div>
  );
};

export default MyComponent;
