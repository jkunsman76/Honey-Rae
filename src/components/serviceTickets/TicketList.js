import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export const TicketList = () => {
    const [tickets, updateTickets] = useState([])
    const history = useHistory()
    useEffect(
        () => {
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

    return (
        <>
        <div>
        <button onClick={() => history.push("/tickets/create")}>Create Ticket</button>
        </div>

        {
            tickets.map(
                (ticket) => {
                    
                    return <p key={`ticket--${ticket.id}`}> 
                    {ticket.description} submitted by {ticket.customer.name} and worked on by {ticket.employee.name}</p>
                 }
            )
        }
        </>
    )
}
