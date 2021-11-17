import React, { useEffect, useState } from "react"


export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])
    const [employeeSpecialtiy,setSpecialty ] = useState("")
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
    useEffect(() => {
        const specialtyArray = employees.map(employee => employee.specialty)
        setSpecialty(specialtyArray.join(", "))

    }, [employees])

    return (
        <>
            <div>
                Specialties: {employeeSpecialtiy}
            </div>
        {
            employees.map(
                (employeeObj) => {
                    
                    return <p key={`employee--${employeeObj.id}`}>{employeeObj.name}</p>
                 }
            )
        }
        </>
    )
}