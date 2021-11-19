import React from "react"
import { Route } from "react-router-dom"
import { CustomerList} from "./customers/CustomerList"
import { EmployeeList} from "./employees/EmployeeList"
import { TicketList} from "./serviceTickets/TicketList"
import { TicketForm} from "./serviceTickets/TicketForm"
import { EmployeeForm} from "./employees/EmployeeForm"



// ApplicationViews works in tandem with NavBar
// Route is listneing for the click event in the NavBar, and when the
// URL's '/somthing' matches the PATH's '/something' it will render the component declared inside.
//! path="/customers" URL= http://localhost:3000/customers NAVBAR to="/customers" the page will render the  <CustomerList />




export const ApplicationViews = () => {
    return (
        <>  
        
            <Route exact path="/customers">
                <CustomerList />
            </Route>

            <Route exact path="/employees">
                <EmployeeList />
            </Route>

            <Route path="/employees/create">
                <EmployeeForm />
            </Route>

            <Route exact path="/tickets">
                <TicketList />
            </Route>

            <Route path="/tickets/create">
                <TicketForm />
            </Route>
        
        </>
    )
}