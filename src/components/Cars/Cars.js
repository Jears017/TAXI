import React, {useEffect, useState} from 'react'
import {driversAPI} from "../../api/api";

import {Link} from "react-router-dom";

export const Cars = () => {
    const [cars, setCars] = useState([])
    useEffect(() => {
        driversAPI.getDrivers().then(res => setCars(res))
    }, [])
    console.log(cars)
    return (
        <div>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Mark</th>
                    <th scope="col">Number of car</th>
                    <th scope="col">Class of car</th>
                </tr>
                </thead>
                <tbody>
                {cars.map((car, idx) => {
                    return (
                        <tr>
                            <th scope="row">{idx + 1}</th>
                            <td>{car.mark}</td>
                            <td>{car.number}</td>
                            <td>{car.klass}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}