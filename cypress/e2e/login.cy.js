/// <reference types="cypress" />

const user_data = require('../fixtures/user_valid.json')
const { faker } = require("@faker-js/faker")

describe('Cadastro de usuário', () => {

    beforeEach(() => {

        // Acessando tela de cadastro
        cy.accessRegisterPage()

    })

    it('A - Cadastro realizado com sucesso', () => {
        const name = faker.person.fullName ()
    
        cy.fillFullName(name)
        cy.fillEmail(user_data.email)
        cy.fillPassword(user_data.password)
        cy.saveRegister()
        cy.checkRegistroSucess(name)

    })

    it('B - Cadastro com campos vazios', () => {

       cy.saveRegister()
       cy.checkMessage('O campo nome deve ser prenchido')    
    })

    it('C - Cadastro com e-mail inválido', () => {

        cy.fillFullName()
        cy.fillInvalidEmail()
        cy.fillPassword()
        cy.saveRegister()
        cy.checkMessage('O campo e-mail deve ser prenchido corretamente')
    })

    it('D - Senha com menos de 6 caracteres', () => {

        cy.fillFullName()
        cy.fillEmail()
        cy.fillInvalidPassword()
        cy.saveRegister()
        cy.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
            
    })

})
