import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App component', () => {
    it('renders without crashing', () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );
    });

    it('renders the index route correctly', () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );

        // Vérifiez que le composant Index est rendu
        expect(screen.getByText('Index')).toBeInTheDocument();
    });

    it('renders the login route correctly', () => {
        render(
            <BrowserRouter initialEntries={['/login']}>
                <App />
            </BrowserRouter>
        );

        expect(screen.getByText('Login')).toBeInTheDocument();
    });

});
