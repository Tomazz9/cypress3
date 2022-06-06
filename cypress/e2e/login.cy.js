/// <reference types=“Cypress” />
describe (‘login test’, () => {
    it(‘visit gallery app and click login button’, () => {
        cy.visit(‘/’);
        cy.url().should(‘contains’, ‘gallery-app’);
        cy.get(‘.nav-link’).eq(1).click();
        // cy.get(‘a[href=“/login”]’).click();
        cy.url().should(‘contains’, ‘/login’);
    })