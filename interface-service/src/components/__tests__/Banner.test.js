import {render, screen, cleanup } from '@testing-library/react';
import Banner from '../Banner';
import { MemoryRouter as Router } from 'react-router-dom';


test('should render banner component', () => {
    render(<Banner/>);
    const bannerElement = screen.getByTestId('banner-1');
    expect(bannerElement).toBeInTheDocument();
    expect(bannerElement).toHaveTextContent('FREE SHIPPING ON ORDERS OVER £40!')
})
