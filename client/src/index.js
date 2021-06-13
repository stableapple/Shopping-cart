import React from 'react'
import ReactDOM from 'react-dom';
import App from './components/App';
import Root from './Root'
import "bootswatch/dist/cosmo/bootstrap.min.css"


ReactDOM.render(
   <Root>
    <App />
    </Root>,
    document.querySelector('#root')

)