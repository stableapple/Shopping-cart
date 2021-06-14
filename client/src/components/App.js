import React, { Component } from 'react';
import {Router, Link, Switch, Route} from 'react-router-dom';
import Navbar from './Navbar';
import ProductList from './ProductList';
import CartList from './CartList';
import history from '../history'
import './App.css'

class App extends React.Component{
    render() {
        return(
                <Router history={history}>
                    <Navbar />
                    <Switch>
                   
                    <Route path="/cart" exact component={CartList}></Route>
                    </Switch>
                    <div className="main">
                        <ProductList />
                    </div>
                    <div className="sidebar">
                        <CartList />
                    </div>
                </Router>
          
        )
            
        
    }
}
export default App;