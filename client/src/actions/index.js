import json from '../api/json';

export const fetchProducts = () => async dispatch => {
    const response= await json.get('/products')
    console.log(response)
    dispatch({type: 'FETCH_PRODUCTS', payload:response.data})
    
}

export const fetchCart = () => async dispatch => {
    const response= await json.get('/carts/5')
    dispatch({type: 'FETCH_CART', payload:response.data})
}

export const addToCart = (id) => async dispatch => {
    const value={userId: 3, date: 2019-12-10, products:[{productId: 2, quantity: 3}]}
    const response= await json.patch('/carts/5', {...value})
    console.log(response)
    dispatch({type: 'ADD_CART', payload:response.data})
}
