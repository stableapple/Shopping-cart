import React,{useState} from 'react';
import {connect} from 'react-redux';
import Modal from 'react-modal'
import { fetchProducts,fetchCart, addToCart} from '../actions/index';
import './ProductList.css'

class ProductList extends React.Component{

constructor(props) {
    super(props);
    this.state = {
        disable: false,
        product:null
    }
}

componentDidMount(){
    this.props.fetchCart().then((whatever)=>{console.log('resolved')});
    this.props.fetchProducts().then((whatever)=>{console.log('resolved')});
    
}
openModal = (product) => {
    this.setState({ product})
}

handleClick = (id)=> {
    console.log(id)
    this.props.addToCart(id)
    
    
}
    render(){
        return(
                    this.props.products.map(product  => {
                        
                            return(
                        
                            <div>
                            
                                <div class="column">
                                    
                                    <div className="card">

                                        <img src={product.image} alt="Denim Jeans"  />
                                        <h1>{product.title}</h1>
                                        <p className="price">{product.price}</p>
                                        <button  class="kuchh" onClick={()=> this.openModal(product)} >Add to Cart</button>

                                    </div>
                                </div>
                            </div>
                            
                        
                        )}
                        
                          
                    
                )
            
        )
    }
}
const mapStatetoProps=(state)=> {
    return {
         products: state.products,
         carts: state.carts
        }
}
export default connect(mapStatetoProps,{fetchProducts,fetchCart,addToCart})(ProductList);