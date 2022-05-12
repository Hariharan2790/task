import React, { useState } from 'react';
import CreateSquare from './CreateSquare'


const Square = ({ index }) => {
    const style = {
        0: {
            borderRight: "1px solid black",
            height:"calc(50% - 0.5px)",
            width:"calc(50% - 0.5px)",
            margin:"0px",
            padding:"0px",
        },
        1: {
          
          height:"calc(50% - 0.5px)",
          width:"calc(50% - 0.5px)",
          margin:"0px",
          padding:"0px",
        },
        2: {
          borderRight: "1px solid black",
          height:"calc(50% - 0.5px)",
          width:"calc(50% - 0.5px)",
          margin:"0px",
          padding:"0px",
          borderTop: "1px solid black",
        },
        3:{
          borderTop: "1px solid black",
          height:"calc(50% - 0.5px)",
          width:"calc(50% - 0.5px)",
          margin:"0px",
          padding:"0px",
        }
    }
    console.log(index);
  
    const [isClick, setIsClick] = useState(false);
  
    const handleClick = () => {
        setIsClick(true);
    }
    
  
    return(
        <div style={style[index]} onClick={handleClick}>
            {isClick ? <CreateSquare/>:""}
  
        </div>
    )
  };

  export default Square;