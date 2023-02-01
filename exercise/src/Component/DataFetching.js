import React, { useEffect, useState } from "react";
import axios from 'axios'

const DataFetching = () => {

    const [users, setUser] = useState([]);

    const getdata = async () => {
        const response = await axios.get('http://api.navgurukul.org/courses')
        // console.log(response.data);
// ------------------------------------------------
    // data sort by accecding order (id objects in Array ...) .
        // const reData =  response.data.sort(function(a, b) {
        //     return a.id - b.id;
        // });

        const reData = response.data.sort((a, b) => a.id - b.id);
        // console.log(reData);
// ------------------------------------------------
    // find only id all ...
        // const ids = reData.map( (item) => item.id); 
        // console.log(ids);

    // find...
        // reData - find All data 
        // reData[id_no.] - find pertikular id data
        // reData[id_no.].id/name/logo/type/days_to_complete/... - find
        // console.log();

    // find all keys/values perticuler id ...
        // const d= Object.keys(reData[0])
        // console.log(d);
// ...............................


        setUser(reData)
    }

    useEffect(() => {
        getdata();
    }, [])

    return (
        <>
            <h2>Navgurukul org. All Courses Here...</h2>
            <div className="container-fluid mt-1">
                <div className="row text-center">

                    {
                        users.map((curElem) => {
                            return (
                                <div className="col-10 col-md-3 mt-4">
                                    <div className="card p-2">
                                        <div className="d-flex align-items-center">
                                            <div className="image"> <img src={curElem.logo} className="rounded" width={'120'}></img> </div>
                                            <div className="ml-3 w-100">
                                                <h4 className="mb-0 mt-0 textleft">{curElem.name}</h4><span className="textleft">{curElem.short_description}</span>
                                                <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                    <div className="d-flex flex-column"><span className="articles">id</span><span className="number1">{curElem.id}</span></div>
                                                    <div className="d-flex flex-column"><span className="followers">days_to_complete</span><span className="number2">{curElem.days_to_complete}</span></div>
                                                    <div className="d-flex flex-column"><span className="rating">lang_available</span><span className="number3">{curElem.lang_available}</span></div>
                                                    <div className="d-flex flex-column"><span className="rating">type</span><span className="number3">{curElem.type}</span></div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

            </div>
        </>
    )
}
export { DataFetching }