import React, { useState, createContext } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const CustomerContext = createContext()

/*
 This component establishes what data can be used.
 */
export const CustomerProvider = (props) => {
    const [customer, setCustomers] = useState([]);

    const getCustomers = () => {
        return fetch("http://localhost:8088/customer")
            .then(res => res.json())
            .then(setCustomers)
    };

    const addCustomer = location => {
        return fetch("http://localhost:8088/customer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(location)
        })
            .then(getCustomers)
    }

    /*
        You return a context provider which has the
        `locations` state, the `addLocation` function,
        and the `getLocation` function as keys. This
        allows any child elements to access them.
    */
    return (
        <CustomerContext.Provider value={{
            customer, getCustomers, addCustomer
        }}>
            {props.children}
        </CustomerContext.Provider>
    )
}