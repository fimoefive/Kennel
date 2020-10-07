import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { AnimalCard } from "./animal/AnimalCard";
import { customerCard } from "./Customer";
import { locationCard } from "./Location";
import { EmployeeCard } from "./employee/Employee.js";
import { AnimalDetail } from "./animal/AnimalDetail";
import { AnimalProvider } from "./animal/AnimalProvider";
import { AnimalList } from "./animal/AnimalList";
import { LocationProvider } from "./location/LocationProvider";
import { AnimalForm } from "./animal/AnimalForm";
import { CustomerProvider } from "./customer/CustomerProvider";


export const ApplicationViews = (props) => {
    return (
        <>

            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <h2>Animals</h2>
    <AnimalProvider>

            <Route exact path="/animals">
                <AnimalList/>
            </Route>

        <LocationProvider>
            <CustomerProvider>
                <Route exact path="/animals/create">
                    <AnimalForm/>
                </Route>
            </CustomerProvider>
        </LocationProvider>

    </AnimalProvider> 
        {/* <AnimalProvider>
        <Route path="/animals/detail">
            </Route>
        </AnimalProvider> */}

{/* Render the location list when http://localhost:3000/locations */}
    <LocationProvider>
         <Route path="/locations">
            <LocationList />
        </Route>
    </LocationProvider>  

{/* Render the employee list when http://localhost:3000/employees */}
        <EmployeeProvider>
            <Route path="/employees">
                <EmployeeList />
            </Route>
        </EmployeeProvider>

{/* Render the customer list when http://localhost:3000/customers */}
        <CustomerProvider>
            <Route path="/customers">
                <CustomerList />
            </Route>
        </CustomerProvider>

        </>
    )
}
