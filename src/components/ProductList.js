import React from 'react';
import {connect} from 'react-redux'
import { fetchProducts } from '../actions/index';
import './ProductList.css'

class ProductList extends React.Component{

componentDidMount(){
    this.props.fetchProducts().then((whatever)=>{console.log('resolved')});
    console.log(this.props.fetchProducts())
}
//handleClick = (id)=> {
    ///this.props.fetchCart(id)
//}
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
                                        <p>Some text about the jeans..</p>
                                        <button  class="kuchh">Add to Cart</button>

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
export default connect(mapStatetoProps,{fetchProducts})(ProductList);