import React from 'react';
import {connect} from 'react-redux'
import { fetchProducts,addToCart} from '../actions/index';
import './ProductList.css'

class ProductList extends React.Component{

componentDidMount(){
    this.props.fetchProducts().then((whatever)=>{console.log('resolved')});
    
}

handleClick = (id)=> {
    console.log(id)
    this.props.addToCart(id)
}
    render(){
        return(
            this.props.products.map(product => {
                return(
                    <div>
                            
                                <div class="column">
                                    
                                    <div className="card">
                                        <img src={product.image} alt="Denim Jeans"  />
                                        <h1>{product.title}</h1>
                                        <p className="price">{product.price}</p>
                                        <p>{product.id}</p>
                                        <button  class="kuchh" onClick={()=> this.handleClick(product.id)} >Add to Cart</button>

                                    </div>
                                </div>
                            </div>
                            
                        
                            
                       
                    
                )
            })
        )
    }
}
const mapStatetoProps=(state)=> {
    return { products: state.products}
}
export default connect(mapStatetoProps,{fetchProducts,addToCart})(ProductList);