import { useState, useEffect } from "react";

export const MyCustomHook = (key, initialValue) => {
    // Initialize state with value from localStorage or default value
    
    const [LocalStorageValue, SetLocalStorageValue] = useState(() => { //* set USESTATE with event fire
        try {
            const ITEM = JSON.parse(localStorage.getItem(key)); // get local storage key item
            return ITEM ? ITEM : initialValue //* if key available return key other wise set empty value

        } catch (error) {
            console.error("Error reading localStorage", error);
            return initialValue;
        }
    });

    // Update localStorage whenever the state changes
    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(LocalStorageValue));
        } catch (error) {
            console.error("Error setting localStorage", error);
        }
    }, [key, LocalStorageValue]);

    return [LocalStorageValue, SetLocalStorageValue];
};
