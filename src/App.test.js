// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders YugabyteCloud title', () => {
    render(<App />);
    const titleElement = screen.getByText(/YugabyteCloud/i);
    expect(titleElement).toBeInTheDocument();
});
