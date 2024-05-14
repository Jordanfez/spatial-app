import '@testing-library/jest-dom/extend-expect'; // Pour les matchers supplémentaires
import { fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';

import Login from '../pages/freelance/Login';

describe('Login component', () => {
    it('renders without crashing', () => {
        render(<Login />);
    });

    it('displays email and password fields', () => {
        const { getByLabelText } = render(<Login />);
        expect(getByLabelText('Email')).toBeInTheDocument();
        expect(getByLabelText('Mot de passe')).toBeInTheDocument(); // Vérifiez que le label français est utilisé
    });

    it('handles input change correctly', () => {
        const { getByLabelText } = render(<Login />);
        const emailInput = getByLabelText('Email');
        const passwordInput = getByLabelText('Mot de passe');

        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password123' } });

        expect(emailInput).toHaveValue('test@example.com');
        expect(passwordInput).toHaveValue('password123');
    });

    it('submits form with correct data', async () => {
        const { getByLabelText, getByText } = render(<Login />);
        const emailInput = getByLabelText('Email');
        const passwordInput = getByLabelText('Mot de passe');
        const submitButton = getByText('Se Connecter');

        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password123' } });
        fireEvent.click(submitButton);

        await waitFor(() => {
            // Vérifiez que la soumission du formulaire déclenche le traitement
            expect(submitButton).toBeDisabled();
        });

        // Attendre que la requête soit terminée et que l'alerte soit affichée
        // Utilisez `waitFor` pour attendre que l'alerte soit affichée après la soumission réussie du formulaire
        await waitFor(() => {
            expect(getByText('Félicitation Votre connexion a été établie')).toBeInTheDocument();
        });
    });
});
