/// <reference types="cypress" />
const user_data = require('../fixtures/user_valid.json')

Cypress.Commands.add('accessRegisterPage', () => {

//acessando tela de cadastro
        cy.visit('/')

        cy.get('.header-logo')
 
        cy.get('.fa-lock')
            .click()

        cy.get('#user')
            .should('be.visible')

})