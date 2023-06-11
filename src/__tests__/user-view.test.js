import React from 'react';
import { render, screen } from '@testing-library/react';
import UserView from '../Component/user-view';

describe('UserView', () => {
    const user = {
        name: 'Ahmad Nabeel',
        email: 'ahmad@gmail.com',
        address: '151-B, mateen avenue',
    };

    it('renders the user information in the accordion', () => {
        render(<UserView user={user} />);

        const nameElement = screen.getByText('Ahmad Nabeel');
        expect(nameElement).toBeInTheDocument();

        const emailElement = screen.getByText('Email: ahmad@gmail.com');
        expect(emailElement).toBeInTheDocument();

        const addressElement = screen.getByText('Address: 151-B, mateen avenue');
        expect(addressElement).toBeInTheDocument();
    });
});
