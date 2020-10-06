import React from "react"
import "./Employee.css"

export const EmployeeCard = () => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="customer__address">{employee.location}</div>
    </section>
)