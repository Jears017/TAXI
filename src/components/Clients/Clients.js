import React, {useEffect, useState} from 'react'
import {driversAPI} from "../../api/api";

import {Link} from "react-router-dom";

export const Clients = () => {
    const [clients, setClients] = useState([])
    useEffect(() => {
        driversAPI.getDrivers().then(res => setClients(res))
    }, [])
    console.log(clients)
    return (
        <div>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Client</th>
                    <th scope="col">Mobile</th>
                </tr>
                </thead>
                <tbody>
                {clients.map((client, idx) => {
                    return (
                        <tr>
                            <th scope="row">{idx + 1}</th>
                            <td>{client.name}</td>
                            <td>{client.mobile}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}