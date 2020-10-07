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


export const ApplicationViews = () => {
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
            </Route>
        </AnimalProvider> 

        <AnimalProvider>
        <Route path="/animals/detail">
            </Route>
        </AnimalProvider> 
        
        <AnimalProvider>
    <LocationProvider>
        <CustomerProvider>
            <Route exact path="/animals/create">
                <AnimalForm />
            </Route>
        </CustomerProvider>
    </LocationProvider>
</AnimalProvider>

        <AnimalProvider>
    <LocationProvider>
        <CustomerProvider>
            <Route exact path="/location/LocationDataprovider">
                <AnimalForm />
            </Route>
        </CustomerProvider>
    </LocationProvider>
</AnimalProvider>
        
            {/* Render the animal list when http://localhost:3000/animals */}
            <h2>Animals</h2>
        <AnimalProvider>
            <Route path="/employees">
                <EmployeeCard />
            </Route>
            <AnimalList />
        </AnimalProvider>
        </>
    )
}