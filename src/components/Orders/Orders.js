import React, {useEffect, useState} from 'react'
import {driversAPI, ordersAPI} from "../../api/api";

import {Link} from "react-router-dom";

export const Orders = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        ordersAPI.getOrders().then(res => setOrders(res))
    }, [])
    return (
        <div>
            <div className='button-user'>
                <Link to={'/add-order'} className='btn btn-dark'>+</Link>
            </div>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Client</th>
                    <th scope="col">Client mobile</th>
                    <th scope="col">Address from</th>
                    <th scope="col">Address to</th>
                    <th scope="col">Driver</th>
                    <th scope="col">Avto id</th>
                    <th scope="col">Client id</th>
                    <th scope="col">Employee id</th>
                </tr>
                </thead>
                <tbody>
                {orders.map((order, idx) => {
                    return (
                        <tr>
                            <th scope="row">{idx + 1}</th>
                            <td>{order.adress_from}</td>
                            <td>{order.adress_to}</td>
                            <td>{order.client_mobile}</td>
                            <td>{order.driver_id}</td>
                            <td>{order.avto_id}</td>
                            <td>{order.client_id}</td>
                            <td>{order.sotrudnik_id}</td>
                            <td>
                                <div style={{width: 145, display: 'flex', justifyContent: 'space-between'}}>
                                    <Link to={`/drivers/${order.id}`}><div className="btn btn-dark">edit</div></Link>
                                    <button className="btn btn-dark" onClick={() => ordersAPI.deleteOrder(order.id)}>delete</button>
                                </div>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}