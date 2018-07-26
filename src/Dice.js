import React from 'react';
import './Dice.css';
const Dice =(props)=>{
  if(props.loader === true)
  {

        return(

<div className="C">
          <div className="dice">

            <div className="face first-face">
              <div className="dot"></div>
            </div>

            <div className="face second-face">
              <div className="dot"></div>
              <div className="dot"></div>
            </div>

            <div className="face third-face">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>

            <div className="face fourth-face">
              <div className="column1">
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
              <div className="column1">
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>

            <div className="face fifth-face">
              <div className="column1">
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
              <div className="column1">
                <div className="dot"></div>
              </div>
              <div className="column1">
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>

            <div className="face sixth-face">
              <div className="column1">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
              <div className="column1">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>

          </div>


          // <p className="tag">Wait, please...</p>
</div>
        );
    }
    else{
        return(
            <span></span>
        );
    }
};

export default Dice;
