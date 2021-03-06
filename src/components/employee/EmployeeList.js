
import React, { useContext, useEffect } from 'react'
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./EmployeeCard"
import "./Employee.css"

export const EmployeeList = () => {
    const { employees, getEmployees } = useContext(EmployeeContext)

    useEffect(() => {

        console.log("EmployeeList: useEffect - getEmployeess")
        getEmployees()

    }, [])
    
    return (	
		<div className="employees">
		    {console.log("EmployeeList: Render")}
        {
			employees.map(employee => {
				return <EmployeeCard key={employee.id} location={employee.location.name} employee={employee.name} />
			})
        }
        </div>
    )

}