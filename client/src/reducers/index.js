import {combineReducers} from 'redux';
import productsReducer from './ProductsReducer';
import cartsReducer from './CartReducer';

export default combineReducers({
    products:productsReducer,
    carts: cartsReducer
})