import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App'

import { createStore} from 'redux'
import { Provider } from 'react-redux'
import reducers from '../../reducers'

it('shows a navbar', ()=> {
    const div = document.createElement('div')
    console.log(div.innerHTML)
    ReactDOM.render(<App />, div);
    expect(div.innerHTML).toContain('Navbar')
    ReactDOM.unmountComponentAtNode(div)
})