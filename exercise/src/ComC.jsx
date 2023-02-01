import React, { useContext } from "react";
import { BioData } from "./ComA";
import { father } from "./ComA";


// const ComC = ({name}) =>{
//         return(
//             <div>
//                 <h1>hello ComC {name}</h1>
//             </div>
//         )
//     }
// export {ComC}
// --------------------------------

const ComC = ({}) =>{

const name =useContext(BioData)
const fname = useContext(father)

    return(
        <div>
            <h1>hello ComC {name}</h1>
            <h2>my father name is - {fname}</h2>
        </div>
    )
}

export {ComC}