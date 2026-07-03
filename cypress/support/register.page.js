/// <reference types="cypress" />

const user_data = require('../fixtures/user_valid.json')

Cypress.Commands.add('saveRegister', () => {
    cy.get('#btnRegister')
        .click()
})

// Cadastro de nome completo
Cypress.Commands.add('fillFullName', () => {
    cy.get('#user')
        .type(user_data.name)
})

// Cadastro de e-mail
Cypress.Commands.add('fillEmail', () => {
    cy.get('#email')
        .should('be.visible')
        .type(user_data.email)
})

// Cadastro de senha
Cypress.Commands.add('fillPassword', () => {
    cy.get('#password')
        .should('be.visible')
        .type(user_data.password)
})

// Cadastro de e-mail inválido
Cypress.Commands.add('fillInvalidEmail', () => {
    cy.get('#email')
        .should('be.visible')
        .type('ingrid.teste')
})

// Cadastro de senha inválida
Cypress.Commands.add('fillInvalidPassword', () => {
    cy.get('#password')
        .should('be.visible')
        .type('123')
})


// msg de erro
Cypress.Commands.add('checkMessage', (message) => {
    cy.get('.errorLabel')
        .should('contain.text', message)
})





// msg de registro com sucesso
Cypress.Commands.add('checkRegistroSucess', (message) => {
        cy.get('#swal2-html-container')
          .should('contain.text', `Bem-vindo `)
})