import React, { useState } from 'react';

export default function Card5() {
  const [count, setCount] = useState(1);

  const handleArttırma = () => {
    setCount(count + 1);
  };

  const handleAzaltma = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div style={{ width: '3cm', height: '1cm', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <button style={{ width: '1cm', height: '1cm', backgroundColor:"rgb(255, 217, 0)", border: 'none'}} onClick={handleAzaltma}>-</button>
      <span style={{width: '1cm', height: '1cm', border: '1px solid rgb(255, 217, 0)',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{count}</span>
      <button style={{ width: '1cm', height: '1cm', backgroundColor:"rgb(255, 217, 0)", border: 'none'}} onClick={handleArttırma}>+</button>
    </div>
  );
}

