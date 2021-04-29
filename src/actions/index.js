import json from '../api/json';

export const fetchProducts = () => async dispatch => {
    const response= await json.get('/products')
    dispatch({type: 'FETCH_PRODUCTS', payload:response.data})
    
}

export const fetchCart = () => async dispatch => {
    const response= await json.post('/carts')
    dispatch({type: 'FETCH_CARTS', payload:response.data})
    
}