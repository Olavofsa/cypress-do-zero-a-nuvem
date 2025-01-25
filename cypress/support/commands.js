// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// #########################################################
//AQUI COMEÇAMEU COMANDO CUSTOMIZADOS
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () =>{
    const longText = Cypress._.repeat('adfkadjakjjkajgfggkjfgklajgafklg\n', 5)
    cy.get('#firstName').type('Olavo')
    cy.get('#lastName').type('Tavares')
    cy.get('#email').type('teste@teste.com')
    cy.get('input[type="radio"][value="elogio"]').check()
    cy.get('#email-checkbox').check()
    cy.get('#open-text-area').type('Obrigado por estar me mandando muita Luz!\n',{delay:0})
    cy.get('#open-text-area').type(longText,{delay: 0})
    //cy.contains('button', 'Enviar').click()
    cy.contains('button[type="submit"]', 'Enviar').click()
})
Cypress.Commands.add('fillMandatoryFieldsAndSubmit_2', data =>{
    cy.get('#firstName').type(data.firstName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
   
    cy.get(':nth-child(3) > input').check()
    cy.get('#email-checkbox').check()
    cy.get('#open-text-area').type(data.text, {delay:0})
    //cy.contains('button', 'Enviar').click()
    cy.contains('button[type="submit"]', 'Enviar').click()
})
Cypress.Commands.add('fillMandatoryFieldsAndSubmit_3', (data = {
    firstName: 'Jon',
    lastName: 'Doe',
    email: 'jonDoer@teste.com',
    text: 'VLW! Obrigado por estar me mandando muita Luz!\n Linha 2\n Linha 3'

}) =>{
    cy.get('#firstName').type(data.firstName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
   
    cy.get(':nth-child(3) > input').check()
    cy.get('#email-checkbox').check()
    cy.get('#open-text-area').type(data.text, {delay:20})
    //cy.contains('button', 'Enviar').click()
    cy.contains('button', 'Enviar').click()
})
