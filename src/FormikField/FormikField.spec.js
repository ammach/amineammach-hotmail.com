import React from 'react'
import { mount } from 'cypress-react-unit-test'
import {FormikField} from "./FormikField";

describe('FormikField component', () => {

    const errorCases = [
        {
            email: 'emailNotValid',
            username: 'user',
            errors: ['Invalid email address']
        },
        {
            email: 'email@email.fr',
            username: 'admin',
            errors: ['Nice try!']
        },
        {
            email: 'emailNotValid',
            username: 'admin',
            errors: ['Invalid email address', 'Nice try!']
        }
    ];

    errorCases.forEach(errorCase => {
        it(`should show error\n${errorCase.email} - ${errorCase.username} ==> ${errorCase.errors}`, () => {
            mount(<FormikField />);

            cy.findByPlaceholderText('email').type(errorCase.email);
            cy.findByPlaceholderText('username').type(errorCase.username);
            cy.findByText('Submit').click();

            errorCase.errors.forEach(error => cy.findByText(error).should('exist'));
        });
    });

});