import React from 'react';
import "./body.css"
import Card1 from './Card1';
import Card2 from "./Card2";

const Body = () => {
  return (
    <div className="card-container">
      <div className="card">
        <Card1/>
      </div>
      <div className="card">
        <Card2/>
      </div>
      <div className="card">
        <h2>Card 3</h2>
        <p>This is the content of Card 3.</p>
      </div>
    </div>
  );
}

export default Body;

