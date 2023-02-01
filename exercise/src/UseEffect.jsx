import React, { useEffect, useState } from "react";

// const UseEffect = () =>{
//     const [count, setcount] = useState(0);

//     useEffect(() =>{
//         if(count>=1){
//             document.title = `React App (${count})`
//         }
//         else{
//             document.title = `React App`
//         }
        
//     },[count]);
//     // agar mai khali list leta tu to keval ek baar usEffect kam karega .
//     // agar list me [count] likhata hu to jab count ki value chenge hoga tab useEffect kam karega . 

//     return (
//         <>
//         <div>
//             {/* <h1>{count}</h1> */}
//             <button onClick={() => setcount (count+1)}>Cleck : {count}</button>
//         </div>
//         </>
//     )
// }

// export {UseEffect}

// -------------------------------------------- window's actual size ? 

const UseEffect = () =>{
    const [widthcount, setwidthcount] = useState(window.screen.width);

    const actualwidth = () =>{
        setwidthcount(window.innerWidth)
    }

    useEffect(() =>{
        console.log('add event');
        window.addEventListener("resize",actualwidth);

        return ()=>{
            console.log('remove event');
            window.removeEventListener("resize",actualwidth)
        }
    });

    return (
        <>
        <div>
            <p>The actual size of the window is -</p>
            <h1>{widthcount}</h1>
        </div>
        </>
    )
}

export {UseEffect}