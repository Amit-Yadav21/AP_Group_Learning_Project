import { useState } from "react";
// import React from "react";

// const UpdateName = () => {
//     const [data, setData] = useState("anil")
//     const updateData = () => {
//         setData("Roshan Lale")
//     }

//     return (
//         <>
//         <div style={{backgroundColor:'skyblue',margin:15,textAlign:"center"}}>
//         <h1>{data}</h1>
//         <button onClick={updateData}>Update data</button>

//         {/* without creating update function  */}
//         {/* <button onClick={()=>{setData("sidgu")}}>Update data</button> */}

//         </div>
//         </>
//     )
// }
// export { UpdateName }

// ---------------------------------------------- when i'm click update button update value agin and again .

const UpdateName = () => {
    const [data, setData] = useState("anil")
    const updateData = () => {
        let val= data;
        if(val==='anil'){
            setData("Roshan Lale")
        }
        else{
            setData("anil")
        }
    }

    return (
        <>
        <div style={{backgroundColor:'skyblue',textAlign:"center"}}>
        <h1>{data}</h1>
        <button onClick={updateData}>Update</button>
        </div>
        </>
    )
}
export { UpdateName }

