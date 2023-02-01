import React, { useState, useRef } from "react";
import './App.css'
import { useEffect } from "react";

// const Uncontrolled =()=>{
//     const luckyname  = useRef(null)
//     const [show, setShow] = useState(false);

//     const submitForm =(e) =>{
//         e.preventDefault();
//     // jo bho input me type karenge vah console per output dega 
//         // console.log(luckyname.current.value);

//         const name =luckyname.current.value;
//         name === "" ? alert("pls fill the data") : setShow(true) 

//     }

//     return (
//         <div>
//             <form action="" className="form" onSubmit={submitForm}>
//                 <div>
//                     <label htmlFor="luckyname">enter your luckyname</label><br />
//                     <input type="text" id="luckyname" ref={luckyname} autoComplete='off'/>
//                     <br />
//                     <button className="subtn">Submit</button>
//                 </div>
//             </form><br />
//             <p> {show ? `your lucky name is ${luckyname.current.value}` : ""} </p>
//         </div>
//     )
// }
// export {Uncontrolled}

// ------------------------------------------

// const Uncontrolled = () => {
//     const [myData, setmyData] = useState("");

//     const count = useRef(0);

//     useEffect(() => {
//         count.current = count.current + 1
//     })

//     return (
//     <>
//         <input type="text" autoComplete='off' value={myData} onChange={(e)=>setmyData(e.target.value)}/>
//         <p>The number of time render {count.current}</p>
//     </>    
//     )
// }
// export { Uncontrolled }

// ---------------------------------------

// const Uncontrolled = () => {
//     const inputRef=useRef(null)
 
//     const handleinput =()=>{
//         inputRef.current.value='100'
//         // inputRef.current.focus();
//         // inputRef.current.style.color='red'
//         // inputRef.current.style.display='none'
//     }

//     return (
//     <>
//         <h1>useRef in React </h1>    
//         <input type="text" ref={inputRef}/><br />
//         <button onClick={handleinput}>Handle Input</button>
//     </>    
//     )
// }
// export { Uncontrolled }

// -------------------------------------------Reset button ?

const Uncontrolled = () => {
    const refElem =useRef('')
    const [name, setName] = useState('amit')
    const Reset =() =>{
        setName('')
    }
 
    const handleinput =()=>{
        // inputRef.current.value='100'
        // inputRef.current.focus();
        refElem.current.style.color='red'
        // refElem.current.style.display='none'
    }

    return (
    <>
        <h1>useRef in React </h1>    
        <input type="text" ref={refElem} value={name} onChange={(e)=>setName(e.target.value)} ></input><br />
        <button  onClick={handleinput}>Handle Input</button>
        <button onClick={Reset}>Reset</button>
    </>    
    )
}
export { Uncontrolled }


// Notes :-
// it create a multiple variable which will  not re-render the components .
// it can be used to access a DOM elements directly 
// useRef is ti store the elenebts useteg hooks remember two thinks
    // object
    // object v alue has current value to access 
// in react we can add a ref attribute to an element to access it directly in the DOM

// useRef always return onject 
// it can be used to store a mutable value that does not cause a re-render when updaed 
// the useref hooks allows you to persist (0,1,2,...) value betwen renders
// the useref hooks is a function that return a mutable Ref object whose .current property is initialized with the passed argument (initial value)
// useref  only return one item it return an object called current 
// when we initialize useref we set the initial value useref(0)
