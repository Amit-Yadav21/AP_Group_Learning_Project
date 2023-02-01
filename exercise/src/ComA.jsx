import React from "react";
import { ComB } from "./ComB";
import { createContext } from "react";


// -------------------------------------- data passing without props

const BioData = createContext();
const father = createContext();

const ComA = () => {
    return (
        
        <BioData.Provider value={"amit kumar yadav"}>
            < father.Provider value={"happy"}>
                <ComB />
            </father.Provider>
        </BioData.Provider >
        
    )
}

export { ComA }
export { BioData,father }