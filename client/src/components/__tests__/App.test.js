import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App'
import Root from '../../Root'

let wrapped;

beforeEach(()=>{
    wrapped = mount(
    <Root>
        <App />;
    </Root>
    )
})
it('shows a navbar', ()=> {
    const div = document.createElement('div')
    console.log(div.innerHTML)
    
    expect(div.innerHTML).toContain('Navbar')
    ReactDOM.unmountComponentAtNode(div)
})