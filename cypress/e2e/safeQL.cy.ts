describe('visit query homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Checking navigation', () => {
    cy.contains('Schema')
    cy.get(':nth-child(2) > a > .font-bold').click() // Click on first el containing 'Welcome'
    cy.contains('Sandbox').should('not.exist')
    //check url
    cy.location('pathname').should('eq', '/schemaParser')
    //click on homepage
    cy.get(':nth-child(1) > a > .font-bold').click()
    //check for homepage
    cy.location('pathname').should('eq', '/')
  })

  it('check query sending/response', () => {
    cy.get('.bg-blue-100').type('https://rickandmortyapi.com/graphql')
    cy.get('.cm-activeLine').type(`query { characters(page: 1) { info { count } } }`, { parseSpecialCharSequences: false })
    cy.get('.text-md').click()
    cy.get('.response > .cm-editor > .cm-scroller > .cm-content').should('have.text', '{  "data": {    "characters": {      "info": {        "count": 826      }    }  }}')
    cy.contains('Metric Analysis')
    cy.get('.ml-1 > .justify-evenly > :nth-child(2)').click()
    cy.contains('Security Analysis')
    cy.contains('Introspection: On')
  })
})

describe('visit schemaparser page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/schemaParser')
  });
  
  it('Inputting schema', () => {
    cy.get('.cm-activeLine').type('type Cohort { id: ID studentCount: Number region: String }', { parseSpecialCharSequences: false })
    cy.get('.text-md').click()
    cy.get('.border-solid').should('exist')

  })
})