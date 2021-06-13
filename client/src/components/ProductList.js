import React,{useState} from 'react';
import {connect} from 'react-redux';
import { fetchProducts,fetchCart, addToCart} from '../actions/index';
import './ProductList.css'

class ProductList extends React.Component{

componentDidMount(){
    this.props.fetchCart().then((whatever)=>{console.log('resolved')});
    this.props.fetchProducts().then((whatever)=>{console.log('resolved')});
    console.log(this.props.carts)
    
}


handleClick = (id)=> {
    this.props.addToCart(id)
    console.log(this.props.carts)
    this.isItemExist(id)
    
}
isItemExist=(id)=> {
    const add=this.props.carts.findIndex(item => item.id ===id)
    if(add!== -1){
        return true
    }
    else{
        return false
    }
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
                                        <button  key={product.id} onClick={()=> this.handleClick(product.id)} >Add to Cart</button>

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