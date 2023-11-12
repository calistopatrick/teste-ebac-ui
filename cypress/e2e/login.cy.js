/// reference types="cypress" />

beforeEach(() => {
  cy.visit('https://pmp.medsenior.com.br/')
});

afterEach(() => {
  cy.screenshot()
});
context('Funcionalidade Login', () => {
  it('Deve fazer login com sucesso', () => {
    
    cy.get('#login').type('thiago.maia')
    cy.get('#senha').type('123.med')
    cy.get('#form-login > .btn').click()

    cy.get('.logo-element').should('contain','MS')
  })
  it('Deve exibir mensagem de erro ao inserir login e/ou senha inválidos', () => {
    cy.get('#login').type('thiago.maia')
    cy.get('#senha').type('123.me')
    cy.get('#form-login > .btn').click()
    cy.get('#form-login > :nth-child(2)').should('contain','Por favor entre com seus dados de acesso')
  })
})