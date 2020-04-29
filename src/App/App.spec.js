import React from 'react'
import { mount } from 'cypress-react-unit-test'
import App from "./App";
describe('App component', () => {
    it('should mount App component', () => {
        mount(<App />);

        cy.contains('This is ammach project').should('be.visible');
    })

    it('should open a new tab when click on learn react', () => {
        mount(<App />);

        cy.findByText('Learn React').click();
    })
});