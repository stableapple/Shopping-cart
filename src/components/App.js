import React, { Component } from 'react';
import {Router, Link, Switch, Route} from 'react-router-dom';
import Navbar from './Navbar';
import ProductList from './ProductList';
import CartList from './CartList';
import history from '../history'

class App extends React.Component{
    render() {
        return(
            <div className="ui cointainer">
                <Router history={history}>
                    <Navbar />
                    <Switch>
                    <Route path="/" exact component={ProductList}></Route>
                    <Route path="/cart" exact component={CartList}></Route>
                    </Switch>
                </Router>
            </div>
        )
            
        
    }
}
export default App;