import {render, screen, cleanup } from '@testing-library/react';
import Carousel from '../Carousel';
import { MemoryRouter as Router } from 'react-router-dom';

//Testing for 3 carousel slides rendering on Homepage
test('should render carousel components', () => {
    render(<Router><Carousel/></Router>);
    const carouselElement = screen.getAllByTestId('carousel-1');
    expect(carouselElement.length).toBe(3);
})

