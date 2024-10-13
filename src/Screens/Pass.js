import { specialChars } from '@testing-library/user-event';
import React, { useCallback, useEffect, useState } from 'react'

const Pass = () => {


    const [PasswordLength, SetPaswordLength] = useState(8)
    const [AddNumbers, SetAddNumbers] = useState(false)
    const [SpecialChar, SetSpecialChar] = useState(false)
    const [Password, SetPasword] = useState('');

    const handleEvent = useCallback(() => {
        let password = "";  //empty string
        let numbers = 12345678; // numbers
        let specialChar = "!@#$%^&*"; // special character 
        let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // letters


        if (AddNumbers) letters += numbers; // check of AddNumbers is true than add Numbers in password

        if (SpecialChar) letters += specialChar; // check if SpecialChar is true then add SpecialCharacter in password

        for (let i = 1; i <= PasswordLength; i++) {
            let element = Math.floor(Math.random() * letters.length); // loop to print 8 number values
            // console.log(letters[element])
            password += letters[element] // letters have all data then will get index number from loop like this letters[element]
            // password += letters.charAt(element)
        }
        return SetPasword(password) // then return password

    }, [AddNumbers, SpecialChar, PasswordLength, SetPasword])

    //Copy password to clipboard
    const CopyPassword = () => {
        const copyPassword = window.navigator.clipboard.writeText(Password)
        copyPassword.then(elem => { console.log(elem) })
        alert("Password Copy Successfully")


    }

    useEffect(() => {
        document.body.style.backgroundColor = "#001F3F"
        handleEvent()
        // console.log(PasswordLength)
        // console.log(AddNumbers);
        // console.log(SpecialChar);


    }, [AddNumbers, SpecialChar, PasswordLength])

    return (

        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-6 mt-5'>

                    <div className='border p-3' >
                        <div className="mb-3  ">
                            <label className="form-label text-light">Genrated Password</label>
                            <input type="text" className="form-control p-3 h5" readOnly value={Password} />
                            <button type="button" onClick={CopyPassword} className="btn btn-info float-end p-2" style={{ marginTop: "-58px", marginRight: "8px" }}>COPY</button>
                        </div>

                        <div className="d-inline p-2">
                            <input type="range" min={6} max={20} value={PasswordLength} className='cursor-pointer btn btn-success me-3 ms-0' onChange={(e) => { SetPaswordLength(Number(e.target.value)) }} />
                            <button className='btn btn-success me-3 ms-0' onClick={() => { SetAddNumbers(true) }}>NUMBERS</button>
                            <button className='btn btn-danger me-2 ms-2' onClick={() => { SetSpecialChar(true) }}>SPECIAL CHARACTER</button>

                        </div>


                    </div>




                </div>
            </div>
        </div>


    )
}

export default Pass