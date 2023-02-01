import React from "react"


// props with function components
// props always use in child components 

const Profile = (props)=>{
    return(
        <>
        <div style={{backgroundColor:'skyblue',margin:10,textAlign:"left", borderRadius:"12px", padding:"10px"}}>
            <h2> {props.text} </h2>
            <p><strong>Email :</strong> {props.email} <br /><strong>Address :</strong> {props.other.address}<br /> <strong>Mobile :</strong> {props.other.Mobile}</p>
        </div>
        </>
    )
}
export {Profile}