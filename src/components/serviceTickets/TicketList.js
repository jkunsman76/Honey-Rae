import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";

export const TicketList = () => {
    const [tickets, updateTickets] = useState([])
    const history = useHistory()
    useEffect(
        () => {
            console.log("fetching data")
            fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
                .then(res => res.json())
                .then(
                    (ticketData) => {
                        updateTickets(ticketData)
                     }
                )
        },
        []
    )
console.log(tickets)
    return (
        <>
        <div>
        <button onClick={() => history.push("/tickets/create")}>Create Ticket</button>
        </div>

        {
            tickets.map(
                (ticket) => {
                    
                    return <p className= {`${ticket.emergency ? 'Emergency': 'Ticket'}`}> 
                    {ticket.emergency ? "🚑" : ""} <Link to={`/tickets/${ticket.id}`}>{ticket.description}</Link>
 submitted by {ticket.customer.name} and worked on by {ticket.employee.name}
                    </p>
                
                 }
            )
        }
        </>
    )
}
