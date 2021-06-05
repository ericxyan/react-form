import React, { useEffect, useRef, useState } from "react";

const defaultData = {
    firstName: "",
    lastName: "",
    gender: "",
    birthday: "",
    age: "",
    country: "",
    accept: true,
    note: "",
};

const useStaticData = (defaultValue, setIsLoading) => {
    console.log('loading static data is running in every render...');

    const [staticData, setStaticData] = useState(defaultValue);

    useEffect(() => {
        new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('static data loaded only run once...');
                resolve({
                    countryOptions: ['US', 'Canada'],
                    genderOptions: ['male', 'female']
                });
            }, 1000);
        }).then(res => {
            setStaticData(res);
            setIsLoading(false);
        });
    }, []);

    return staticData;
}

export default function MyForm() {
    const formRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(defaultData);
    const staticData = useStaticData({
        countryOptions: [],
        genderOptions: []
    }, setIsLoading);

    const onValueChange = (event) => {
        const target = event.target;
        const value = target.type == 'checkbox' ? target.checked : target.value;

        setData(state => ({ ...state, [target.name]: value }));
    };

    const onReset = () => {
        setData(defaultData);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);

        new Promise((resolve, reject) => {
            setTimeout(resolve, 1000);
        })
        .then(() => setIsLoading(false));
    }

    const genderOptions = staticData.genderOptions.map(opt => (
        <label key={opt}>
            <input type="radio" value={opt} name="gender" checked={data.gender == opt} onChange={onValueChange} />
            {opt}
        </label>
    ));

    const countryOptions = staticData.countryOptions.map(opt => (
        <option value={opt} key={opt}>{opt}</option>
    ));

    return (
        <div className="container">
            <h2>Sign Up</h2>

            {isLoading ?
                (<p>Loading...</p>)
                :
                (<form id="form" ref={formRef}>
                    <div className="formGroup">
                        <label htmlFor="firstName">First Name: </label>
                        <input type="text" name="firstName" id="firstName" value={data.firstName} onChange={onValueChange} />
                    </div>

                    <div className="formGroup">
                        <label>Last Name: <input type="text" name="lastName" value={data.lastName} onChange={onValueChange} /></label>
                    </div>

                    <div className="formGroup">
                        <span>Gender: </span>
                        {genderOptions}
                    </div>

                    <div className="formGroup">
                        <label>Birthday:
                        <input type="date" name="birthday" value={data.birthday} onChange={onValueChange} />
                        </label>
                    </div>

                    <div className="formGroup">
                        <label>Age: <input type="number" min="0" name="age" value={data.age} onChange={onValueChange} /></label>
                    </div>

                    <div className="formGroup">
                        <label>Country:
                        <select value={data.country} name="country" onChange={onValueChange}>
                                <option value="" hidden={true}> </option>
                                {countryOptions}
                            </select>
                        </label>
                    </div>

                    <div className="formGroup">
                        <label><input type="checkbox" name="accept" checked={data.accept} onChange={onValueChange} />Accept</label>
                    </div>

                    <div className="formGroup">
                        <label>Note: <textarea value={data.note} name="note" onChange={onValueChange} /></label>
                    </div>

                    <button type="button" onClick={onReset}>Reset</button>
                    <button type="submit" onClick={onSubmit}>Submit</button>
                </form>)
            }

            <pre>{JSON.stringify(data, null, 2)}</pre>

        </div>
    );
}