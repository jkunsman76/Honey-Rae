import React, { useEffect, useState } from "react"



// define var to hold state define var to hold the function to modify the state
// if data is needed from the api with a function as the first argument and an empty array as the second argument


export const CustomerList = () => {
    // state variable vvv
    const [customers, setCustomers] = useState([]) // <<<< the argument here is setting the initial state. 
//! [customers] holds the state    [setCustomers] is a function that modifies the state  
    const [totalCustomerMessage, updateMessage] = useState([])
//! [totalCustomerMessage] holds the state [updateMessage] is the function
    useEffect(
    // takes a function as the first arugument and an empty array as second argument.
        () => {
            // fetch call to api
            fetch("http://localhost:8088/customers")
                .then(res => res.json())
                .then(
                    (customersArray) => {
// instead of directly modifing state, invoke the function that the useState function gave to modify the html 
                        setCustomers(customersArray)
                     }
                )
        },
        []
// this ^^^ empty array [] is listening for the component to load (initail page load), then it will run the function on line 15
    )

    useEffect(  //useEffect for displaying the customer message that tells UI how many customers there are
        () => {
            if (customers.length === 1){
                updateMessage('You have 1 customer')
            } else {
                updateMessage(`You have ${customers.length} customers`)
            }
        },
        [customers]
    )

    return (
        //invoke totalCustomerMessage to display the # of customers in the database
        <>
        <div>{totalCustomerMessage}</div> 
        {
            customers.slice(0, 5).map( //slice cuts the customer array so it is only showing 5 customers instead of all of them in the UI
                (customerObj) => {
                    // need key attribute
                    return <p key={`customer--${customerObj.id}`}>{customerObj.name}</p>
                 }
            )
        }
        </>
    )
}