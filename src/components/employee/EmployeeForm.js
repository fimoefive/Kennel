import React, { useContext, useEffect, useRef } from 'react';
import { EmployeeContext } from './EmployeeProvider';
import { LocationContext } from '../location/LocationProvider';
import './Employee.css';
import { useHistory, useParams } from 'react-router-dom';

export const EmployeeForm = () => {

    const { addEmployee, getEmployees, getEmployeeById, updateEmployee } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    const [employee, setEmployee] = useState({})
    const [ isLoading, setIsLoading ] = useState(true)

    const history = useHistory()
    const {employeeId} = useParams()

    //when field changes, update state. This causes a re-render and updates the view.
    //Controlled component
    const handleControlledInputChange = (event) => {
        //When changing a state object or array, 
        //always create a copy make changes, and then set state.
        const newEmployee = { ...employee }
        //animal is an object with properties. 
        //set the property to the new value
        newEmployee[event.target.name] = event.target.value
        //update state
        setEmployee(newEmployee)
    }

    useEffect(() => {
        getLocations()
        .then(response => {
            if(employeeId){
                getEmployeeById(employeeId)
                .then(employee => {
                    setEmployee(employee)
                    setIsLoading(false)
                })
            } else {
                setIsLoading(false)
            }
        })
    }, [])

const constructNewEmployee = () => {

    const locationId = parseInt(location.current.value)

    if (parseInt(employee.locationId === 0)) {
        window.alert("Please select a location")
    } else { 
        setIsLoading(true)
        if(employeeId){
            updateEmpolyee({
                id:employee.id,
                name: employee.name,
                locationId: parseInt(employee.locationId)  
            })
    // if (locationId === 0) {
    //     window.alert("Please select a location")
    // }
    // else if(employeeId){
    //     getEmployeeById(employeeId)
    //     updateEmployee({
    //         id: employee.id,
    //         name: employee.name,
    //         locationId: parseInt(employee.locationId)
    //     })
        // .then(() => history.push(`/employees/detail/${employeeId}`))    
    } else {
        addEmployee({
            name: employee.name,
            locationId: parseInt(employee.locationId)
        })
        .then(() => history.push("/employees"))
    }
}
}


return (
    <form className="employeeForm">
    <h2 className="employeeForm__title">{employeeId ? `Edit ${employee.name}`: 'New Employee'}</h2>
    <fieldset>
        <div className="form-group">
            <label htmlFor="employeeName">Employee name: </label>
            <input type="text" id="employeeName" name="name" required autoFocus className="form-control" 
            placeholder="Employee name" 
            onChange={handleControlledInputChange}
            defaultValue={employee.name}/>
        </div>
    </fieldset>
    <fieldset>
        <div className="form-group">
            <label htmlFor="location">Assign to location: </label>
            <select value={employee.locationId} name="location" id="employeeLocation" className="form-control"  
            onChange={handleControlledInputChange}>
                <option value="0">Select a location</option>
                {locations.map(l => (
                    <option key={l.id} value={l.id}>
                        {l.name}
                    </option>
                ))}
            </select>
        </div>
    </fieldset>
    <button type="submit"
        className="btn btn-primary"
        disabled={isLoading}
        onClick={evt => {
            evt.preventDefault() // Prevent browser from submitting the form
            constructNewEmployee()
        }}>
        {employeeId ? "Save Employee": "Add Employee"}
    </button>
</form>
)
}