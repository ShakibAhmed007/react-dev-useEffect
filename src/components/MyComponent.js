import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    setInterval(tick, 1000);
  }, []);

  return (
    <div>
      <p>Time: {date.toLocaleTimeString()}</p>
    </div>
  );
};

export default MyComponent;
