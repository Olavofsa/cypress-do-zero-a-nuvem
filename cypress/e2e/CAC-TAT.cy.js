/// <reference types="cypress"/>
describe('Central de Atendimento ao Cliente TAT', () => {
  
  beforeEach( () => {
    cy.visit('./src/index.html')
  })
  
  it('verifica o título da aplicação', () => {
    cy.title()
    .should('be.equal', 'Central de Atendimento ao Cliente TAT')
    
  })
  it('Enviar formulário com sucesso', () => {
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

    // Resultado esperado
    cy.contains('.success', 'Mensagem enviada com sucesso.')
    .should('be.visible')

  })
  it('Enviar formulário com email inválido', () => {
    cy.get('#firstName').type('Olavo')
    cy.get('#lastName').type('Tavares')
    cy.get('#email').type('teste@teste')
    cy.get('input[type="radio"][value="elogio"]').check()
    cy.get('#email-checkbox').check()
    cy.get('#open-text-area').type('Obrigado por estar me mandando muita Luz!\n',{delay:0})
    cy.contains('button[type="submit"]', 'Enviar').click()

    // Resultado esperado
    cy.contains('.error', 'Valide os campos obrigatórios!')
    .should('be.visible')

  })
  it('Enviar formulário com telefone dados inválidos', () => {
    cy.get('#phone').type('ABCDEF')
    // Resultado esperado
    .should('have.value','')
    

  }) 
  it('Enviar formulário com telefone em branco', () => {
    cy.get('#firstName').type('Olavo')
    cy.get('#lastName').type('Tavares')
    cy.get('#email').type('teste@teste')
    cy.get('#phone').type('1234567')
    cy.get('input[type="radio"][value="elogio"]').check()
    cy.get('#phone-checkbox').check()
    
    cy.get('#open-text-area').type('Obrigado por estar me mandando muita Luz!\n',{delay:0})
    cy.contains('button[type="submit"]', 'Enviar').click()

    // Resultado esperado
    cy.contains('.error', 'Valide os campos obrigatórios!')
    .should('be.visible')
  }) 
  it('Limpar campos sem enviar formulário', () => {
    cy.get('#firstName').type('Olavo')
    .should('have.value', 'Olavo')
    .clear()
    .should('have.value', '')

    cy.get('#lastName').type('Tavares')
    .should('have.value', 'Tavares')
    .clear()
    .should('have.value', '')

    cy.get('#email').type('teste@teste')
    .should('have.value', 'teste@teste')
    .clear()
    .should('have.value', '')
    

    cy.get('#phone').type('12345678')
    .should('have.value', '12345678')
    .clear()
    .should('have.value', '')

    cy.get('input[type="radio"][value="elogio"]').check()
    cy.get('#phone-checkbox').check()
    
    cy.get('#open-text-area').type('Obrigado por estar me mandando muita Luz!\n',{delay:0})
    .should('have.value', 'Obrigado por estar me mandando muita Luz!\n')
    .clear()
    .should('have.value', '')
    cy.contains('button[type="submit"]', 'Enviar').click()

    // Resultado esperado
    cy.contains('.error', 'Valide os campos obrigatórios!')
    .should('be.visible')
  }) 
  it('Limpar campos e validar o envio', () => {
    cy.get('#firstName')
    .clear()
    .should('have.value', '')

    cy.get('#lastName')
    .clear()
    .should('have.value', '')

    cy.get('#email')
    .clear()
    .should('have.value', '')

    cy.get('#phone')
    .clear()
    .should('have.value', '')

    cy.get('#open-text-area')
    .clear()
    .should('have.value', '')
    cy.contains('button[type="submit"]', 'Enviar').click()

    // Resultado esperado
    cy.contains('.error', 'Valide os campos obrigatórios!')
    .should('be.visible')
  }) 
  it('Enviar formulário com sucesso com comandos customizados', () => {
    
    cy.fillMandatoryFieldsAndSubmit()
    // O comando estádentro do Command Js

    // Resultado esperado
    cy.contains('.success', 'Mensagem enviada com sucesso.')
    .should('be.visible')

  })
  it('Enviar formulário com sucesso com comandos customizados 2', () => {
  const data ={
    firstName: 'Olavão',
    lastName: 'Tavares Júnior',
    email: 'testeNovo@teste.com',
    text: 'VLW! Obrigado por estar me mandando muita Luz!\n Linha 2\n Linha 3'

  }
    cy.fillMandatoryFieldsAndSubmit_2(data)
    // O comando estádentro do Command Js

    // Resultado esperado
    cy.contains('.success', 'Mensagem enviada com sucesso.')
    .should('be.visible')

  })
  it('Enviar formulário com sucesso com comandos customizados 3', () => {
      cy.fillMandatoryFieldsAndSubmit_3()
      // O comando estádentro do Command Js
  
      // Resultado esperado
      cy.contains('.success', 'Mensagem enviada com sucesso.')
      .should('be.visible')
  
    })
    it('Enviar formulário com sucesso usando campos de seleção', () => {
      cy.get('#firstName').type('Olavo')
      cy.get('#lastName').type('Tavares')
      cy.get('#email').type('teste@teste.com.br')
      cy.get('#product').select('Mentoria')
      cy.get('input[type="radio"][value="elogio"]').check()
      cy.get('#phone-checkbox').check()
      cy.get('#phone').type('1234567')
      cy.get('#open-text-area').type('Obrigado por estar me mandando muita Luz!\n',{delay:0})
   
      cy.contains('button[type="submit"]', 'Enviar').click()
  
      // Resultado esperado
      cy.contains('.success', 'Mensagem enviada com sucesso.')
      .should('be.visible')
  
    })
    it('Enviar formulário com sucesso usando campos Radio', () => {
      cy.get('#firstName').type('Olavo')
      cy.get('#lastName').type('Tavares')
      cy.get('#email').type('teste@teste.com.br')
      cy.get('#product').select('Mentoria')
      cy.get('input[type="radio"][value="feedback"]').check()
      cy.get('#phone-checkbox').check()
      cy.get('#phone').type('1234567')
      cy.get('#open-text-area').type('Obrigado por estar me mandando muita Luz!\n',{delay:0})
   
      cy.contains('button[type="submit"]', 'Enviar').click()
  
      // Resultado esperado
      cy.contains('.success', 'Mensagem enviada com sucesso.')
      .should('be.visible')
  
    })
    it('Marcar cada Radioe verificar se os campos foram marcados', () => {
      cy.get('#phone-checkbox').check()
      
      cy.get('input[type="radio"]')
      .each( tiposDeserviçoes => {
        cy.wrap(tiposDeserviçoes)
        .check()
        // Resultado esperado
        .should('be.checked')
      })
    })
    
    it('Marcar ambos checkboxes,depois desmarcar o último', () => {
      cy.get('input[type="checkbox"]')
      .check()
      .should('be.checked')
      .last().uncheck()
      .should('not.be.checked')

    })
it('Fazendo Upload de arquivo da pasta fixture', () => {
  cy.get('#file-upload')
  .selectFile('cypress/fixtures/example.json')
  .should( input => {
    //console.log(input);
    //console.log(input[0].files[0].name);
    expect(input[0].files[0].name).to.equal('example.json')

  })
})

it('Fazendo Upload de arquivo simulando um drag-and-drop', () => {
  cy.get('#file-upload')
  .selectFile('cypress/fixtures/example.json', {action: 'drag-drop'})
  .should( input => {
    //console.log(input);
    //console.log(input[0].files[0].name);
    expect(input[0].files[0].name).to.equal('example.json')

    })


  })

  it('Fazendo Upload de arquivo utilizando alias', () => {
    cy.fixture('example.json').as('sampleFile')
    cy.get('#file-upload')
    .selectFile('@sampleFile')
    .should( input => {
      //console.log(input);
      //console.log(input[0].files[0].name);
      expect(input[0].files[0].name).to.equal('example.json')
  
      })
    })
  it('Verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () =>{
      cy.contains('a', 'Política de Privacidade')
      .should('have.attr', 'href', 'privacy.html')
      .and('have.attr', 'target', '_blank')

  })
  it('Acessa a página da política de privacidade removendo o target e então clicando no link', () =>{
    cy.contains('a', 'Política de Privacidade')
    .invoke('removeAttr', 'target')
    .click()
    cy.contains('h1', 'CAC TAT - Política de Privacidade')
    .should('be.visible')

})
it('Testa a página da política de privacidade de forma independente', () =>{
  cy.contains('a', 'Política de Privacidade')
  //.invoke('removeAttr', 'target')
  //.click()
  //cy.contains('h1', 'CAC TAT - Política de Privacidade')
  //.should('be.visible')

})



})