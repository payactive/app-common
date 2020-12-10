import { render } from '@testing-library/react';
import * as React from 'react';
import App from './App';

test('renders App', () => {

    render(
        <App handleChange={e => console.log(e.target)} />
    );

});