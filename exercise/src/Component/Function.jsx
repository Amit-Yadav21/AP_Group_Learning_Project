import React from "react"
import { Address } from "../Address"
import { Education } from "../Education"
import { Profile } from "../Profile"
import { UpdateName } from "../UpdateName"
import { UseState } from "../UseState"
import {UseEffect} from "../UseEffect"
import { User } from "../User" 
import {CssStyle} from "../CssStyle"
import { UseStateArray } from "../UseStateArray"
import { IntervalHookCounter } from "../IntervalHookCounter"
import { UseStateObject } from "../UseStateObject"
import { Uncontrolled } from "../UseRef"
import { UseReducer } from "../UseReducer"
import { UseContext } from "../UseCotext"


const PersonDetail = () => {
    const ad = "Dharamshala"
    const ya = "yadav" 
    const edu = "B.com"
    
    return(
        <>
        {/* <h1>My Name is Amit {ya}</h1>  */}
        {/* <Address ad = {ad}/> */}
        {/* <Education edu = {edu}/> */}
        {/* <Profile text="my name is Akash" email="akash@gmail.com" other={{address:"jaupur",Mobile:"9651025253"}}/> */}
        {/* <UpdateName /> */}
        {/* <UseState text = 'Here use useState in function components ' /> */}
        {/* <UseEffect /> */}
        {/* <User /> */}
        {/* <CssStyle /> */}
        <UseStateArray />
        {/* <IntervalHookCounter /> */}
        {/* <UseStateObject/> */}
        {/* <Uncontrolled /> */}
        {/* <UseReducer /> */}
        {/* <UseContext /> */}
        </>
    )
}

export {PersonDetail}