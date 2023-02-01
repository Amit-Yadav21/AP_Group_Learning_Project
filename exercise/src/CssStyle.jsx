import React from "react";
import './style.css' // here use External css 
import style from './custom.module.css' // here use Module css 
import './App.css'; // here use External css 

const CssStyle = () =>{
    return(
        <div className="border">
            <h1 className="primary"> style type 1 in React js</h1>
            <h1 style={{color:"red", backgroundColor:"white"}}> style type 2 in React js</h1>
            <h1 className={style.success}> style type 3 in React js</h1>

        </div>
    )
}

export {CssStyle}