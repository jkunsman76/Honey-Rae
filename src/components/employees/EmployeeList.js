import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    const history = useHistory()
    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then(
                    (employeeArray) => {
                        setEmployees(employeeArray)
                    }
                )
        },
        []
    )


    return (
        <>
            <div>
                <button onClick={() => history.push("/employees/create")}>New Employee</button>
            </div>
            {
                employees.map(
                    (employeeObj) => {

                        return <p key={`employee--${employeeObj.id}`}>{employeeObj.name}, Specializes in: {employeeObj.specialty}</p>
                    }
                )
            }
        </>
    )
}