import React, { useState } from "react"
import { useHistory } from "react-router-dom";

export const EmployeeForm = () => {
    const [employee, update] = useState({
        name:"",
        specialty:""
    });

const history = useHistory()

    const hireEmployee = (event) => {
        event.preventDefault()

        const newEmployee = {
                name: employee.name,
                specialty: employee.specialty,  //? why did i use this syntax?
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }

        return fetch("http://localhost:8088/employees",fetchOption)
        .then(() => {
            history.push("/employees")
        })

        
    }
//! not html.... is jsx vvvvvvv
    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="employeeForm-group">
                    <label HTMLFor="name">Name:</label>
                    <input
                        onChange={(event) => {
                            const copy = { ...employee }
                            copy.name = event.target.value
                            update(copy)
                        }}
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Your Name Here"
                    />
                </div>
                <div className="employeeForm-group">
                    <label HTMLFor="specialty">Specialty:</label>
                    <input
                        onChange={(event) => {
                            const copy = { ...employee }
                            copy.specialty = event.target.value
                            update(copy)
                        }}
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description of your Specialty"
                    />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={hireEmployee}>
                Hire Employee
            </button>
        </form>
    )
}
