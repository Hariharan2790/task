import React, { useState } from "react";
import './CreateSquare.css';
import Square from './Square'


function CreateSquare() {
  const [square, setSquare] = useState([true, true, true, true]);

  return (
    <div className="createsquare">
      {square.map((val, index) => (
        <Square key={index} val={val} index={index} />
      ))}
    </div>
  );
}


export default CreateSquare;
