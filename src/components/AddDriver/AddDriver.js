import React, {useEffect, useState} from 'react'
import {driversAPI} from "../../api/api";
import {useParams} from "react-router-dom";
import {useHistory} from 'react-router-dom'


const initial = {
    firstname: '',
    secondname: '',
    age: '',
    hire_date: '',
    leave_date: '',
    mobile: '',
    ocenka: '',
    mark: '',
    klass: '',
    number: ''
}


export const AddDriver = (props) => {
    const [driver, setDriver] = useState(initial)
    const history = useHistory()
    const {firstname, secondname, age, hire_date, leave_date, mobile, ocenka, number, klass, mark} = driver

    const onChangeHandler = (e) => {
        setDriver(prevState => {
            return {...prevState, [e.target.name]: e.target.value}
        })
    }

    const onCl = (e) => {
        e.preventDefault()

        const newDriver = {
            firstname, secondname, age, hire_date, leave_date, mobile, ocenka, number, klass, mark
        }

        driversAPI.addDriver(newDriver).then(res => res.data)
        history.push('/drivers')


    }
    return (
        <div>
            <div>
                <h1>Driver Add!</h1>
                <form>
                    <div>
                        <input hidden="hidden"/>
                        <div>
                            <label htmlFor="userName">
                                firstname:
                            </label>
                            <p><input onChange={onChangeHandler} value={driver.firstname}
                                      className="form-control-sm align-items-center" id="userName" name="firstname"
                                      type="text"/></p>
                        </div>
                        <div>
                            <label htmlFor="firstName">
                                secondname:
                            </label>
                            <p><input onChange={onChangeHandler} value={driver.secondname} className="form-control-sm"
                                      id="firstName" name="secondname" type="text"/>
                            </p>
                        </div>
                        <div>
                            <label htmlFor="secondName">
                                age:
                            </label>
                            <p><input onChange={onChangeHandler} value={driver.age} className="form-control-sm"
                                      id="secondName" name="age" type="number"/>
                            </p>
                        </div>
                        <div>
                            <label htmlFor="secondName">
                                Hire date:
                            </label>
                            <p><input onChange={onChangeHandler} value={driver.hire_date} className="form-control-sm"
                                      id="secondName" name="hire_date" type="date"/>
                            </p>
                        </div>
                        <div>
                            <label htmlFor="secondName">
                                Leave date:
                            </label>
                            <p><input onChange={onChangeHandler} value={driver.leave_date} className="form-control-sm"
                                      id="secondName" name="leave_date" type="date"/>
                            </p>
                        </div>
                        <div>
                            <label htmlFor="secondName">
                                Mobile:
                            </label>
                            <p><input onChange={onChangeHandler} value={driver.mobile} className="form-control-sm"
                                      id="secondName" name="mobile" type="number"/>
                            </p>
                        </div>
                        <div>
                            <label htmlFor="secondName">
                                Assessment:
                            </label>
                            <p><input onChange={onChangeHandler} value={driver.ocenka} className="form-control-sm"
                                      id="secondName" name="ocenka" type="number"/>
                            </p>
                        </div>
                        <div>
                            <label htmlFor="secondName">
                                Car:
                            </label>
                            <p><input onChange={onChangeHandler} value={driver.mark} className="form-control-sm"
                                      id="secondName" name="mark" type="text"/>
                            </p>
                        </div>
                        <div>
                            <label htmlFor="secondName">
                                Class:
                            </label>
                            <p><input onChange={onChangeHandler} value={driver.klass} className="form-control-sm"
                                      id="secondName" name="klass" type="text"/>
                            </p>
                        </div>
                        <div>
                            <label htmlFor="secondName">
                                Number:
                            </label>
                            <p><input onChange={onChangeHandler} value={driver.number} className="form-control-sm"
                                      id="secondName" name="number" type="text"/>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-1">
                            <button onClick={onCl} className="btn btn-dark" type="submit">
                                Update
                            </button>
                        </div>
                    </div>
                </form>
                <p></p>
            </div>

        </div>
    )
}