import React from 'react'
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {EditOrder} from "./components/EditOrder/EditOrder";
import {AddOrder} from "./components/AddOrder/AddOrder";
import {Route, Routes} from "react-router-dom";
import {Orders} from "./components/Orders/Orders";
import {Drivers} from "./components/Drivers/Drivers";
import {AddDriver} from "./components/AddDriver/AddDriver";
import {Cars} from "./components/Cars/Cars";
import {Clients} from "./components/Clients/Clients";
import {Main} from "./components/Main/Main";

export const App = () => {
    return (
        <div className='App'>
            <Navbar/>

                <Route exact path={'/orders'} component={Orders}/>
                <Route exact path={'/'} component={Main}/>
                <Route exact path={'/edit-order'} component={EditOrder}/>
                <Route exact path={'/add-order'} component={AddOrder}/>
                <Route exact path={'/drivers'} component={Drivers}/>
                <Route exact path={'/add-driver'} component={AddDriver}/>
                <Route exact path={'/cars'} component={Cars}/>
                <Route exact path={'/clients'} component={Clients}/>
        </div>
    );
}

export default App;
