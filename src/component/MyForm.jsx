import React, { useState } from "react";

const defaultData = {
    firstName: "",
    lastName: "",
    gender: "",
    birthday: undefined,
    age: undefined,
    country: undefined,
    accept: false,
    note: "",
};

export default function MyForm() {
    const [data, setData] = useState(defaultData);

    const onValueChange = (event) => {
        setData({
            [event.target.name]: event.target.value
        });
    };

    return (
        <div className="container">
            <h2>Sign Up</h2>

            <form id="form">
                <div className="formGroup">
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" name="firstName" id="firstName" value={data.firstName} onChange={onValueChange}/>
                </div>

                <div className="formGroup">
                    <label>Last Name: <input type="text" value={data.lastName} onChange={onValueChange} /></label>
                </div>

                <div className="formGroup">
                    <span>Gender: </span>
                    <label>
                        <input type="radio" value="male" name="gender" checked={data.gender == 'male'} readOnly/>
                            Male
                        </label>

                    <label>
                        <input type="radio" value="female" name="gender" checked={data.gender == 'female'} readOnly/>
                        Female
                    </label>
                </div>

                <div className="formGroup">
                    <label>Birthday: 
                        <input type="date" value={data.birthday} onChange={onValueChange}/>
                    </label>
                </div>

                <div className="formGroup">
                    <label>Age: <input type="number" min="0" value={data.age} onChange={onValueChange}/></label>
                </div>

                <div className="formGroup">
                    <label>Country: 
                        <select value={data.country} onChange={onValueChange}>
                            <option value="Canada">Canada</option>
                            <option value="US">US</option>
                        </select>
                    </label>
                </div>

                <div className="formGroup">
                    <label><input type="checkbox" defaultChecked={data.accept} />Accept</label> n
                </div>

                <div className="formGroup">
                    <label>Note: <textarea value={data.note} onChange={onValueChange}/></label>
                </div>

                <button type="reset">Reset</button>
                <button type="submit">Submit</button>
            </form>

            <pre>{JSON.stringify(data, null, 2)}</pre>

        </div>
    );
}