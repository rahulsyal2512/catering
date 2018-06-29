import React,{Component} from 'react';
import './addsalesgroup.css';

const Loader =(props)=>{
    if(props.loader == true)
    {
        return(
            <div className="container">
                <div className="row">
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

export default Loader;