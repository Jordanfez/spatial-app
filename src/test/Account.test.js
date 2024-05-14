import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import Account from '../pages/freelance/Account';

describe('Account component', () => {
    it('renders without crashing', () => {
        render(<Account />);
    });

    it('shows error messages when submitting empty form', async () => {
        render(<Account />);

        const createAccountButton = screen.getByRole('button', { name: /se créer/i });
        fireEvent.click(createAccountButton);

        await waitFor(() => {
            expect(screen.getByText(/le nom est requis/i)).toBeInTheDocument();
            expect(screen.getByText(/adresse e-mail invalide/i)).toBeInTheDocument();
            expect(screen.getByText(/l'email est requis/i)).toBeInTheDocument();
            expect(screen.getByText(/le mot de passe est requis/i)).toBeInTheDocument();
        });
    });

    it('shows password error message when passwords do not match', async () => {
        render(<Account />);

        const passwordInput = screen.getByLabelText('Mot de passe');
        const confirmPasswordInput = screen.getByPlaceholderText('Confirmer le mot de passe*');
        const createAccountButton = screen.getByRole('button', { name: /se créer/i });

        fireEvent.change(passwordInput, { target: { value: 'password123' } });
        fireEvent.change(confirmPasswordInput, { target: { value: 'password321' } });
        fireEvent.click(createAccountButton);

        await waitFor(() => {
            expect(screen.getByText(/les mots de passe ne correspondent pas/i)).toBeInTheDocument();
        });
    });

    it('submits form when all fields are valid', async () => {
        render(<Account />);

        const usernameInput = screen.getByLabelText('Nom');
        const emailInput = screen.getByLabelText('Email');
        const passwordInput = screen.getByLabelText('Mot de passe');
        const confirmPasswordInput = screen.getByPlaceholderText('Confirmer le mot de passe*');
        const createAccountButton = screen.getByRole('button', { name: /se créer/i });

        fireEvent.change(usernameInput, { target: { value: 'John Doe' } });
        fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'Password123!' } });
        fireEvent.change(confirmPasswordInput, { target: { value: 'Password123!' } });

        fireEvent.click(createAccountButton);

        // You may want to add assertions here to check if the account creation process is successful
    });
});
