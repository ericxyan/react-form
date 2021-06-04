import React, { useRef } from "react";

export default function MyForm() {

    return (
        <div className="container">
            <h2>Sign Up</h2>

            <form id="form">
                <div className="formGroup">
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" name="firstName" id="firstName" />
                </div>

                <div className="formGroup">
                    <label>Last Name: <input type="text" /></label>
                </div>

                <div className="formGroup">
                    <span>Gender: </span>
                    <label>
                        <input type="radio" value="male" name="gender" />
                            Male
                        </label>

                    <label>
                        <input type="radio" value="female" name="gender" />
                        Female
                    </label>
                </div>

                <div className="formGroup">
                    <label>Birthday: 
                        <input type="date" />
                    </label>
                </div>

                <div className="formGroup">
                    <label>Age: <input type="number" min="0"/></label>
                </div>

                <div className="formGroup">
                    <label>Country: 
                        <select >
                            <option value="Canada">Canada</option>
                            <option value="US">US</option>
                        </select>
                    </label>
                </div>

                <div className="formGroup">
                    <label><input type="checkbox" />Accept</label> n
                </div>

                <div className="formGroup">
                    <label>Note: <textarea /></label>
                </div>

                <button type="reset">Reset</button>
                <button type="submit">Submit</button>
            </form>

        </div>
    );
}