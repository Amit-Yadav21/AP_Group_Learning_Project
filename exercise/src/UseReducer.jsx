import React from "react";
import { useReducer } from "react";

// const initialState = 1;
// const reducer = (state, action) => {
//     // console.log(state, action);

//     // if(action.type === "INCREMENT"){
//     //     return state +1
//     // }
//     // if(action.type === "DICREMENT"){
//     //     return state -1
//     // }

//     switch (action) {
//         case "INCREMENT":
//             return state + 1
//         case "DICREMENT":
//             return state -1
//             case "RESET":
//                 return 0
//         default:
//             return state
//     }
// }
// const UseReducer = () => {
//     const [count, dispatch] = useReducer(reducer, initialState);

//     return (
//         <>
//             <div>
//                 <p>{count}</p>
//                 <div>
//                     {/* <button onClick={() => dispatch({ type: "INCREMENT" })}>Inc</button>
//                     <button onClick={() => dispatch({ type: "DICREMENT" })}>Dec</button> */}

//                     <button onClick={() => dispatch("INCREMENT")}>Inc</button>
//                     <button onClick={() => dispatch("DICREMENT")}>Dec</button>
//                     <button onClick={() => dispatch("RESET")}>Reset</button>

//                 </div>
//             </div>
//         </>
//     )
// }
// export { UseReducer }

// --------------------------------------

const iState ={
    name:"yadav",
    wish:['eat','code','sleep']
}

const reducer = (state , action) =>{
    switch (action.type) {
        case 'change_name':
            return {
                ...state,
                name:action.payload
            }
    
        default:
            return state
    }
}

const UseReducer =() =>{
    const [data , dispatch] =useReducer(reducer, iState);

    return(
        <>
        <div>
            <h1>coder never quit</h1>
            <h2>my name is {data.name}</h2>
            <h3>i wish to {data.wish[0]}</h3>
            <button onClick={()=>dispatch({type:"change_name",payload:"amit"})}>change</button>
        </div>
        </>
    )
}
export {UseReducer}


// Notes :-

// it is a hooks which is used for state management
// it is an alternate to useState
// useState is built using useReducer
// useState uses useReducer internally

// useState is a basic hooks for managing simple state transformation,
// and useReducer is an additional hooks for managing more complex logic

// you could use useReducer for everything you can do with useSate
// useReducer :- it is take two arguments- 1) reducer 2) initialsState
// reducer function take two parameter - 1) state 2) action
// useReducer return two  elements of an array - 1) state 2) dispatch