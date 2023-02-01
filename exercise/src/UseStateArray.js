import React, { useState } from "react";

const UseStateArray = () => {
    // const student = ['amit', 'kuamr', 'yadav'];
    const myBioData = [
        { id: 0, name: 'Amit', age: 24 },
        { id: 1, name: 'Kumar', age: 22 },
        { id: 2, name: 'Yadav', age: 20 },
        { id: 3, name: 'yoga', age: 21 }

    ]

    const [myArray, setArray] = useState(myBioData)
    // const clearArray = () => {
    //     setArray([]);
    // }

    const removeElem = (id) => {
        // console.log(id);


        const myNewArray = myArray.filter((curElem) => {
            return curElem.id != id;
        })

        setArray(myNewArray)
    }

    return (
        <>
            <h1>All Array item here...</h1>
            {/* {
                student.map((data) => <h2>{data}</h2>)
            } */}

            {
                myArray.map((curElm) => {
                    return (

                        <h1 className="h1style" key={curElm.id}>Name: {curElm.name} & Age: {curElm.age}
                            <button className="btnInner" onClick={() => removeElem(curElm.id)}><sup>Re</sup>move</button>
                        </h1>
                    )
                })
            }

        </>
    )
}
export { UseStateArray }