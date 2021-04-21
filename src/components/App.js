import React, { Component } from 'react';
import Navbar from './Navbar';
import ProductList from './ProductList'

class App extends React.Component{
    render() {
        return(
            <div>
                <Navbar />
                <ProductList />
            </div>
        )
            
        
    }
}
export default App;