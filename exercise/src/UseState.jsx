import { useState } from "react";
import './App.css';

// const UseState = (props) => {
//     const [data, setData] = useState(0)
//     const updateData = () => {
//         setData(data+1)
//     }

//     return (
//         <>
//         <div style={{backgroundColor:'skyblue',margin:15,textAlign:"center"}}>
//         <h1>{props.text}<br />{data}</h1>
//         <button onClick={updateData}>Clict here to Update</button>

//         {/* without creating update function  */}
//         {/* <button onClick={()=>{setData("sidgu")}}>Update data</button> */}

//         </div>
//         </>
//     )
// }
// export { UseState }


// ----------------------------------------------- update value in button
// const UseState = (props) => {
//     const [data, setData] = useState(0)

//     return (
//         <>
//         <div style={{backgroundColor:'skyblue',margin:15,textAlign:"center"}}>
//         <h1>{props.text}</h1>
//         <button onClick={() =>setData(data +1)}>Clict here to Update : <strong>{data}</strong></button>

//         {/* without creating update function  */}
//         {/* <button onClick={()=>{setData("sidgu")}}>Update data</button> */}

//         </div>
//         </>
//     )
// }
// export { UseState }

// ---------------------------------------------------- usesate use with reset, increment , decrement button .

// const UseState = (props) => {
//     const initiaalCount =0
//     const [data, setCount] = useState(initiaalCount)

//     return (
//         <>
//         <div style={{backgroundColor:'skyblue',margin:15,textAlign:"center"}}>
//         <h1>{props.text}</h1>
//         Data : {data} 
//         <button onClick={() =>setCount(initiaalCount)}> Reset</button>
//         <button onClick={() =>setCount(data +1)}> Increment</button>
//         <button onClick={() =>setCount(data -1)}> Decrement</button>


//         {/* without creating update function  */}
//         {/* <button onClick={()=>{setData("sidgu")}}>Update data</button> */}

//         </div>
//         </>
//     )
// }
// export { UseState }

// ------------------------------------------------------

// const UseState = (props) => {
//     const [name, setName] = useState({firstname : '',lastnsme : ''})
//     return (
//         <>
//         <form>
//         <div style={{backgroundColor:'skyblue',margin:15,textAlign:"center"}}>
//         <h1>{props.text}</h1>

//         <input type="text" placeholder="type your first name" value={name.firstname} onChange={ e =>setName({ ...name, firstname:e.target.value})}/>
//         <h2>your first name is - {name.firstname}</h2>

//         <input type="text" placeholder="type your last name" value={name.lastnsme} onChange={ e =>setName({ ...name, lastnsme:e.target.value})}/>
//         <h2>your last name is - {name.lastnsme}</h2>

//         <h3>show output in JSON format here :- {JSON.stringify(name)}</h3>
//         </div>
//         </form>
//         </>
//     )
// }
// export { UseState }

// ------------------------------------------ useState with Array ? 

const UseState = (props) => {

    const myBioData =[
        {id:0, myName:"amit", age:20},
        {id:1, myName:"kumar", age:24},
        {id:1, myName:"yadav", age:22}
    ]

    const [myArray, setmyArray] = useState(myBioData)
    // const clearArray = () =>{
    //     setmyArray([])
    // }
    return (
        <>
        {
            myArray.map((curElm) => <h1 className="h1style" key={curElm.id}>Name: {curElm.myName} & Age: {curElm.age}</h1>)
        }
        {/* <button className="btn" onClick={clearArray}>Clear</button> */}
        </>
    )
}
export { UseState }