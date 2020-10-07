import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './Components/Layout/Navbar'
import Dashboard from './Components/Dashboard/Dashboard.js'
import ShopDetails from './Components/Shop/ShopDetails'
import Login from './Components/Auth/Login'
import Signup from './Components/Auth/Signup';
import PreviousOrders from './Components/Dashboard/PreviousOrders';
import Cart from './Components/Shop/Cart'
import Account from './Components/Auth/AccounSettings' 
import MCart from './Components/Shop/MainCart';
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/'component={Dashboard} />
            <Route path='/project/:id' component={ShopDetails} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/account' component={Account} />
            <Route path='/Porders' component={PreviousOrders} />
            <Route path='/cart' component={Cart} />
            <Route path='/MCart' component={MCart} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;