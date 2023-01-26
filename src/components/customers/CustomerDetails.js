import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const CustomerDetails = () =>{
    const {customerId} = useParams()
    const [customer, updateCustomer] = useState([])

    useEffect(() =>{
        fetch(`http://localhost:8088/customers?_expand=user&id=${customerId}`)
            .then(res=> res.json())
            .then((data) =>{
                const singleCustomer=data[0]
                updateCustomer(singleCustomer)
            })
        },
        [customerId]
    )

    return<section className="customer">
        <header>{customer?.user?.fullName}</header>
        <div>Address: {customer?.address}</div>
        <div>Phone Number: {customer.phoneNumber}</div>
        <div>Email {customer?.user?.email}</div>
        <footer></footer>
    </section>
}