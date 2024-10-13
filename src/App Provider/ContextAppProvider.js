import React, { createContext, useContext, useEffect, useState } from 'react'
let MyContextProvider = createContext();
const ContextAppProvider = (props) => {

let[GetApiData,SetApiData] = useState([])

    let CallApi = async()=>{
       let ApiData = await fetch('https://fakestoreapi.com/products');
       let ApiResponse = await ApiData.json();
       SetApiData(ApiResponse)
     //  console.log(ApiResponse);
    }

    useEffect(() => {
        CallApi();
    }, [])
    

    return (

        <MyContextProvider.Provider value={{GetApiData}} >
            {props.children}
        </MyContextProvider.Provider>

    )
}

let MyCustomHook = ()=>{
    return useContext(MyContextProvider);
}

export  {ContextAppProvider,MyContextProvider,MyCustomHook};