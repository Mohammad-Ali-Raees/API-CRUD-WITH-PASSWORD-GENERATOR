import React, { useState } from 'react'
import { MyCustomHook } from './MyCustomHook';
import { CustomHook2 } from './CustomHook2';

const CustomReact = () => {

    // With functions values / add any key and initial values
    let [storedValue, setStoredValue] = MyCustomHook("ITEMS", []); // We can define USESTATE get / set values with different variable names

    // Without functions values / already add constant values in function
    let [localStorageValue, SetLocalStorageValue] = CustomHook2(); // We can define USESTATE get / set values with different variable names

    const [GetValue, SetValue] = useState({
        Title: "",
        Body: ""
    })

    const HandleEvent = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        SetValue({ ...GetValue, [name]: value });
    }

    const SubmitForm = () => {
        let FormData = {
            Title: GetValue.Title,
            Body: GetValue.Body
        }
        setStoredValue([...storedValue, FormData]); // We can store in local storage like this
        SetLocalStorageValue([...localStorageValue, FormData])
        SetValue({ Title: "", Body: "" })

    }

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-6 border p-4 mt-4'>

                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input type="text" onChange={HandleEvent} value={GetValue.Title} className="form-control" name='Title' />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Body</label>
                        <textarea className="form-control" onChange={HandleEvent} value={GetValue.Body} name='Body' rows={2} />
                    </div>
                    <div className='d-block'>
                        <button className='btn btn-info d-block p-2' onClick={SubmitForm}>SUBMIT</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CustomReact