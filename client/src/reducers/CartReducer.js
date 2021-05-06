export default (state=[], action) => {
    switch(action.type) {
        case 'FETCH_CART':
            return action.payload
        case 'ADD_CART':
            return  {...state , [action.payload.userId]:action.payload};
        default:
            return state
    }
}