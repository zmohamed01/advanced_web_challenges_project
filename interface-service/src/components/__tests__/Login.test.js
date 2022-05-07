import {render, screen, cleanup } from '@testing-library/react';
import Login from '../Login';
import { MemoryRouter as Router } from 'react-router-dom';

test('should render login component', () => {
    render(<Router><Login/></Router>);
    const loginElement = screen.getByTestId('login-1');
    expect(loginElement).toBeInTheDocument();
    expect(loginElement).toHaveTextContent('Log In');
})

test('should render signup component', () => {
    render(<Router><Login/></Router>);
    const loginElement = screen.getByTestId('signup-1');
    expect(loginElement).toBeInTheDocument();
    expect(loginElement).toHaveTextContent('Sign Up');
})
