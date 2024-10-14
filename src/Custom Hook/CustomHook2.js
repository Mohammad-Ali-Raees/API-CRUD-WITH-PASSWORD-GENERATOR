import { useEffect,useState } from "react"

export const CustomHook2 = () => {

    const [localStorageValue, SetLocalStorageValue] = useState(()=>{
        let Items = JSON.parse(localStorage.getItem("MyTodoValues"))
        return Items ? Items : []
    })


    useEffect(() => {
        localStorage.setItem("MyTodoValues", JSON.stringify(localStorageValue))
    }, [localStorageValue])

    return [localStorageValue, SetLocalStorageValue];
}

