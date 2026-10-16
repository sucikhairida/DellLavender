// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DellLavender title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DellLavender/i);
    expect(titleElement).toBeInTheDocument();
});
