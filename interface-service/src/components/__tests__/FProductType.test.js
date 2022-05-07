import {render, screen, cleanup } from '@testing-library/react';
import FProductType from '../FProductType';
import { MemoryRouter as Router } from 'react-router-dom';

test('should render producttype1 component', () => {
    render(<Router><FProductType/></Router>);
    const ftypeElement = screen.getByTestId('fproducttype-1');
    expect(ftypeElement).toBeInTheDocument();
    expect(ftypeElement).toHaveTextContent('Browse Shirts')
})

test('should render producttype2 component', () => {
    render(<Router><FProductType/></Router>);
    const ftypeElement = screen.getByTestId('fproducttype-2');
    expect(ftypeElement).toBeInTheDocument();
    expect(ftypeElement).toHaveTextContent('Browse Trousers')
})

test('should render producttype3 component', () => {
    render(<Router><FProductType/></Router>);
    const ftypeElement = screen.getByTestId('fproducttype-3');
    expect(ftypeElement).toBeInTheDocument();
    expect(ftypeElement).toHaveTextContent('Browse Dresses')
})