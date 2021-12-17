import React, {useEffect, useState} from 'react'
import {driversAPI} from "../../api/api";

import {Link} from "react-router-dom";

export const Drivers = () => {
    const [drivers, setDrivers] = useState([])
    useEffect(() => {
        driversAPI.getDrivers().then(res => setDrivers(res))
    }, [])
    console.log(drivers)
    return (
        <div>
            <div className='button-user'>
                <Link to={'/add-driver'} className='btn btn-dark'>+</Link>
            </div>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First name</th>
                    <th scope="col">Last name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Hire date</th>
                    <th scope="col">Leave date</th>
                    <th scope="col">Mobile</th>
                    <th scope="col">Assessment</th>
                    <th scope="col">Car</th>
                    <th scope="col">Class</th>
                    <th scope="col">Number of car</th>
                </tr>
                </thead>
                <tbody>
                {drivers.map((driver, idx) => {
                    return (
                        <tr>
                            <th scope="row">{idx + 1}</th>
                            <td>{driver.firstname}</td>
                            <td>{driver.secondname}</td>
                            <td>{driver.age}</td>
                            <td>{driver.hire_date}</td>
                            <td>{driver.leave_date}</td>
                            <td>{driver.mobile}</td>
                            <td>{driver.ocenka}</td>
                            <td>{driver.mark}</td>
                            <td>{driver.klass}</td>
                            <td>{driver.number}</td>

                            <td>
                                <div style={{width: 145, display: 'flex', justifyContent: 'space-between'}}>
                                    <Link to={`/drivers/${driver.id}`}><div className="btn btn-primary">edit</div></Link>
                                    <button className="btn btn-primary" onClick={() => driversAPI.deleteDriver(driver.id)}>delete</button>
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