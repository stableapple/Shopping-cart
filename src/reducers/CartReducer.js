export default (state=[], action) => {
    switch(action.type) {
        case 'FETCH_CART':
            return action.payload
        default:
            return state
    }
}