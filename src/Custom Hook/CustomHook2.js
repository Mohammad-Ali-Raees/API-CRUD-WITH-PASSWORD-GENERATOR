import { useEffect,useState } from "react"

export const CustomHook2 = () => {

    const [localStorageValue, SetLocalStorageValue] = useState([])

    let Items = JSON.parse(localStorage.getItem("MyTodoValues"))
    if (!Items) {
        Items = []
        localStorage.setItem("MyTodoValues", JSON.stringify(Items))
    } else {
        Items = JSON.parse(localStorage.getItem("MyTodoValues"))
    }

    useEffect(() => {
        localStorage.setItem("MyTodoValues", JSON.stringify(localStorageValue))
    }, [Items, localStorageValue])

    return [localStorageValue, SetLocalStorageValue];
}

