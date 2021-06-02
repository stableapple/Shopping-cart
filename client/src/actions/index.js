import json from '../api/json';

export const fetchProducts = () => async dispatch => {
    const response= await json.get('/products')
    console.log(response)
    dispatch({type: 'FETCH_PRODUCTS', payload:response.data})
    
}

export const fetchCart = () => async dispatch => {
    const response = await json.get('/cart')
    dispatch({type: 'FETCH_CART', payload: response.data})
    console.log(response)
}

export const addToCart = (id) => async dispatch => {
    console.log(id)
    const response = await json.post('/cart', {id})
    console.log(response.data)
    dispatch({type:'ADD_CART', payload: response.data})
}

