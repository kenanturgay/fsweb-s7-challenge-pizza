import React from 'react';
import "./body.css"
import Card1 from './Card1';
import Card2 from "./Card2";
import Card3 from './Card3';
import Card4 from './Card4';
import Card5 from './Card5';
import Card6 from './Card6';

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
        <Card3/>
      </div>
      <div className="card">
        <Card4/>
      </div>
      <div className="card" style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-between', marginBottom:"300px"}}>
        <Card5/>
        <Card6/>
  
      </div>
    </div>
  );
}

export default Body;

