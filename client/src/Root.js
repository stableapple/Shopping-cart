import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware,compose } from 'redux'
import reducers from './reducers'
import reduxThunk from 'redux-thunk'

export default props => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose
    return(
        <Provider store ={createStore(reducers,
            composeEnhancers(applyMiddleware(reduxThunk)))}>
            {props.children}
        </Provider>
    )
}