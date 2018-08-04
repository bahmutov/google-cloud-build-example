/// <reference types="cypress" />
describe('tiny blog', () => {
  it('loads', () => {
    cy.visit('localhost:5000')
    cy.contains('h1', 'Tiny Blog')
  })

  it('loads 2nd time', () => {
    cy.visit('localhost:5000')
    cy.contains('h1', 'Tiny Blog')
  })
})
