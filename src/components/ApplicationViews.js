import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalCard } from "./animal/AnimalCard"
import { customerCard } from "./Customer"
import { locationCard } from "./Location"
import { EmployeeCard } from "./Employee.js"
import { AnimalProvider } from "./animal/AnimalProvider";
import { AnimalList } from "./animal/AnimalList";
import { LocationProvider } from "./location/LocationDataProvider";
import { }

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
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
        
            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/employees">
                <EmployeeCard />
            </Route>
        </>
    )
}