import React from 'react';
import {connect} from 'react-redux'
import { fetchProducts,fetchCart } from '../actions/index';

class CartList extends React.Component{

componentDidMount(){
    this.props.fetchCart().then((whatever)=>{console.log('resolved')});
    this.props.fetchProducts().then((whatever)=>{console.log('resolved')});
    
}

    render(){
        return(
            this.props.products.map(product => {
                return(
                this.props.carts.products.map(cart => {
                    if(product.id == cart.productId){
                           return (
                           <div>
                               {product.title}
                           </div>
                           )
                        
                    }
                })
                )
                
            })
            )
        
}
}
const mapStatetoProps=(state)=> {
    return { carts: state.carts, products:state.products}
}
export default connect(mapStatetoProps,{fetchCart, fetchProducts})(CartList);