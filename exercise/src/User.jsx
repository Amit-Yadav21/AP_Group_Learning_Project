import React,{ useState, useEffect } from "react";
import './App.css';

const User = () => {
    const [data, setData] = useState(10);
    const [count, setCount] = useState(100);


    useEffect(() => {
        alert('count is - ' +count)
    }, [count])
    // use useEffect only work count .

    return (
        <>
            <div className="cdbtn">
                <h1>Count props : {count}</h1>
                <h1>Data props : {data}</h1>
                <button  onClick={() => setCount(count + 1)}>Update Count</button>
                <button  onClick={() => setData(data + 1)}>Update Data</button>

            </div>
        </>
    )
}

export { User }