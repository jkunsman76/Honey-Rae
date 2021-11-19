import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"



//! when one of these links is clicked, the URL will change  and end with the associated TO=/WhateverYouNameIt



export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">  
                <Link className="navbar__link" to="/employees">Employees</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/customers">Customers</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/tickets">Service Tickets</Link>
            </li>
        </ul>
    )
}
