import React, {useEffect, useState} from 'react'
import {driversAPI, ordersAPI} from "../../api/api";
import {Link, useParams} from "react-router-dom";
import {useHistory} from 'react-router-dom'


const initial = {
    name: '',
    mobile: '',
    adress_from: '',
    adress_to: '',
    driver_id: '',
    avto_id: '',
    client_id: '',
    sotrudnik_id: '',
}


export const AddOrder = (props) => {
    const [order, setOrder] = useState(initial)
    const [drivers, setDrivers] = useState([])
    useEffect(() => {
        driversAPI.getDriverWithCar().then(res => setDrivers(res))
    }, [])

    const {id} = useParams()
    let history = useHistory()


    const {
        name,
        mobile,
        adress_from,
        adress_to,
        client_mobile,
        driver_id,
        avto_id,
        client_id,
        sotrudnik_id,
    } = order

    const onChangeHandler = (e) => {
        setOrder(prevState => {
            return {...prevState, [e.target.name]: e.target.value}
        })
    }

    const onCl = (e) => {
        e.preventDefault()

        const newOrder = {
            name,
            mobile,
            adress_from,
            adress_to,
            client_mobile,
            driver_id,
            avto_id,
            client_id,
            sotrudnik_id,
        }

        ordersAPI.addOrder(newOrder).then(res => res.data)
        history.push('/orders')
        //console.log(newOrder)


    }
    return (
        <div>
            <div>
                <h1>Order edit!</h1>

                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Number of driver</th>
                        <th scope="col">Firstname</th>
                        <th scope="col">Lastname</th>
                        <th scope="col">Car</th>
                        <th scope="col">Number</th>
                        <th scope="col">Class</th>
                    </tr>
                    </thead>
                    <tbody>
                    {drivers.map((order, idx) => {
                        return (
                            <tr>
                                <th scope="row">{idx + 1}</th>
                                <td>{order.id}</td>
                                <td>{order.firstname}</td>
                                <td>{order.secondname}</td>
                                <td>{order.mark}</td>
                                <td>{order.number}</td>
                                <td>{order.klass}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
                <form>
                    <div>
                        <input hidden="hidden"/>
                        <div>
                            <label htmlFor="userName">
                                Client:
                            </label>
                            <p><input onChange={onChangeHandler} value={order.name}
                                      className="form-control-sm align-items-center" id="userName" name="name"
                                      type="text"/></p>
                        </div>
                        <div>
                            <label htmlFor="userName">
                                Mobile:
                            </label>
                            <p><input onChange={onChangeHandler} value={order.mobile}
                                      className="form-control-sm align-items-center" id="userName" name="mobile"
                                      type="text"/></p>
                        </div>
                        <div>
                            <label htmlFor="userName">
                                Driver:
                            </label>
                            <p><input onChange={onChangeHandler} value={order.driver_id}
                                      className="form-control-sm align-items-center" id="userName" name="driver_id"
                                      type="number"/></p>
                        </div>
                        <div>
                            <label htmlFor="userName">
                                Address from:
                            </label>
                            <p><input onChange={onChangeHandler} value={order.adress_from}
                                      className="form-control-sm align-items-center" id="userName" name="adress_from"
                                      type="text"/></p>
                        </div>
                        <div>
                            <label htmlFor="firstName">
                                Address to:
                            </label>
                            <p><input onChange={onChangeHandler} value={order.adress_to} className="form-control-sm"
                                      id="firstName" name="adress_to" type="text"/>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-1">
                            <button onClick={onCl} className="btn btn-dark" type="submit">
                                Add
                            </button>
                        </div>
                    </div>
                </form>
                <p></p>
            </div>
        </div>
    )
}

