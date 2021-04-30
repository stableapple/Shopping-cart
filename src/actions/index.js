import json from '../api/json';

export const fetchProducts = () => async dispatch => {
    const response= await json.get('/products')
    console.log(response)
    dispatch({type: 'FETCH_PRODUCTS', payload:response.data})
    
}

export const fetchCart = () => async dispatch => {
    const response= await json.get('/carts/5')
    console.log(response)
    dispatch({type: 'FETCH_CART', payload:response.data})
}

export const addToCart = (id) => async dispatch => {
    const response= await json.post('/carts/5')
    console.log(response)
    dispatch({type: 'ADD_CART', payload:response.data})
}
