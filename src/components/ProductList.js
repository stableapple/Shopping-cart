import React from 'react';
import {connect} from 'react-redux'
import { fetchProducts } from '../actions/index';
import './ProductList.css'

class ProductList extends React.Component{

componentDidMount(){
    this.props.fetchProducts().then((whatever)=>{console.log('resolved')});
    console.log(this.props.fetchProducts())
}
    render(){
        return(
            this.props.products.map(product => {
                return(
                    <div>
                        <div className="cointainer">
                            <div className="row">
                                <div className="col-md-6">
                                <div className="card">
                                    <img src={product.image} alt="Denim Jeans"  />
                                    <h1>Tailored Jeans</h1>
                                    <p className="price">$19.99</p>
                                    <p>Some text about the jeans..</p>
                                    <p><button>Add to Cart</button></p>

                                </div>
                                </div>
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