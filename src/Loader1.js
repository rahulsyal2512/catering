import React from 'react';
import './Loader1.css';

const Loader1 =(props)=>{
    if(props.loader === true)
    {
        return(
<div className="C">
          <div className="containers">
            <div className="dash uno"></div>
            <div className="dash dos"></div>
            <div className="dash tres"></div>
            <div className="dash cuatro"></div>
          </div>
</div>
        );
    }
    else{
        return(
            <span></span>
        );
    }
};

export default Loader1;
