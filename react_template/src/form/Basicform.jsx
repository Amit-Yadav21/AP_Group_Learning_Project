import React from "react";
import { FaAngleDown } from "react-icons/fa";

const Form = () => {
    return (
        <form className="main">
            <h2>Register Form</h2>
            <div className="row1">
                <div>
                    <label htmlFor="">First Name :</label><br />
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Last Name :</label><br />
                    <input type="text" />
                </div>
            </div>
            <div className="row1">
                <div>
                    <label htmlFor="">Email :</label><br />
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">City :</label><br />
                    {/* <input type="text" placeholder="Select City" /> */}
                    <select name="" id="" className="op">
                        <option value="Select City">Select City</option>
                    </select>
                </div>
            </div>
            <div className="row2">
                <div>
                    <div>Gender :</div>
                    <div className="ratio-check">
                        <input type="radio" name="male" />
                        <label htmlFor=""> Male</label><br />
                        <input type="radio" name="male" />
                        <label htmlFor=""> Female</label><br />
                    </div>
                </div>
                <div>
                    <div>Hobbies :</div>
                    <div className="ratio-check">
                        <input type="checkbox" />
                        <label htmlFor="">Reading</label><br />
                        <input type="checkbox" />
                        <label htmlFor="">Developing</label><br />
                        <input type="checkbox" />
                        <label htmlFor="">Desiging</label><br />

                    </div>
                </div>
            </div>
            <div className="address">
                <label htmlFor="">Address :</label><br />
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            
            <button className="s-btn">Submit</button>
        </form>
    )
}
export { Form }