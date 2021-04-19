import json from '../api/json';

export const fetchProducts = () => async dispatch => {
    const response= await json.fetch('/products')
    dispatch({type: 'FETCH_PRODUCTS', payload:response.data})
    console.log(response.data)
}