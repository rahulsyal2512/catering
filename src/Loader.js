import React,{Component} from 'react';
import './Loader.css';

const Loader =(props)=>{
    if(props.loader == true)
    {
        return(
            <div className="bg11">
            <div className="spinner"></div>
            </div>
        );
    }else{
        return(
            <span></span>
        );
    }  
};

export default Loader;