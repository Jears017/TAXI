import axios from "axios";

const instance = axios.create({
    baseURL: '',
})

export const driversAPI = {
    getDrivers() {
        return instance.get('/drivers').then(res => res.data)
    },
    getDriver(id) {
        return instance.get(`/drivers/${id}`).then(res => res.data)
    },
    addDriver(driver) {
        return instance.post(`/drivers`, {...driver}).then(res => res.data)
    },
    updateDriver(driver, id) {
        return instance.put(`/drivers/${id}`, {...driver}).then(res => res.data)
    },
    deleteDriver(id) {
        return instance.delete(`/drivers/${id}`).then(res => res.data)
    },
    getDriverWithCar() {
        return instance.get(`/selectdriver`).then(res => res.data)
    }
}

export const ordersAPI = {
    getOrders() {
        return instance.get('/orders').then(res => res.data)
    },
    getOrder(id) {
        return instance.get(`/orders/${id}`).then(res => res.data)
    },
    addOrder(order) {
        return instance.post(`/orders`, {...order}).then(res => res.data)
    },
    updateOrder(order, id) {
        return instance.put(`/orders/${id}`, {...order}).then(res => res.data)
    },
    deleteOrder(id) {
        return instance.delete(`/orders/${id}`).then(res => res.data)
    }
}

export const carsAPI = {
    getCars() {
        return instance.get('/').then(res => res.data)
    }
}

