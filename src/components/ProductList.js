import React from 'react';
import {connect} from 'react-redux'
import { fetchProducts } from '../actions/index'

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
                        {product.id}
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