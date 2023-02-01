import React from "react";
import { useState } from "react";

const UseStateObject =() =>{

    const [myObject, setObject] = useState({
        myname:'Amit Yadav', myage:24, degree:'B.com'
    });

    const changeObject = () =>{
        setObject({...myObject, myage:22, myname:' amit kumar yadav'})
        // ...myObject it's meean - Object ka sara data milega aur keval age update hoga .
    }

    return (
        <>
            <div>
                <h1>Name:{myObject.myname} & Age:{myObject.myage} & Degree:{myObject.degree}</h1>
                <button onClick={changeObject}>UPDATE</button>
            </div>
        </>
    )
}
export {UseStateObject}