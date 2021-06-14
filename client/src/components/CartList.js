import React from 'react';
import {connect} from 'react-redux'
import { fetchProducts, fetchCart} from '../actions/index';
import Fade from 'react-reveal/Fade';

class CartList extends React.Component{

componentDidMount(){
    this.props.fetchCart().then((whatever)=>{console.log('resolved')});
    this.props.fetchProducts().then((whatever)=>{console.log('resolved')});
    
}

    render(){
        return(
            <div className="cart">
            <Fade left cascade>
                <ul className="cart-items">
            {this.props.products.map(product => {
                return(
                this.props.carts.map(cart => {
                    if(product.id == cart.id){
                           return (
                           <li key={product.id}>
                                        <div>{product.title}</div>
                                        <p className="price">{product.price}</p>
                                        <p>Some text about the jeans..</p>
                                        <button  class="kuchh">Buy</button>
                           </li>
                           )
                        
                    }
                })
                )
                
            })
        }
        </ul>
        </Fade>
            </div>
            )
        
}
}
const mapStatetoProps=(state)=> {
    return { carts: state.carts, products:state.products}
}
export default connect(mapStatetoProps,{fetchCart, fetchProducts})(CartList);
