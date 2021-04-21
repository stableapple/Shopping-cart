import json from '../api/json';

export const fetchProducts = () => async dispatch => {
    const response= await json.get('/products')
    dispatch({type: 'FETCH_PRODUCTS', payload:response.data})
    
}