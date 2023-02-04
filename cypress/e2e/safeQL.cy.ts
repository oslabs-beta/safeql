describe('visit query homepage', () => {
  it('via direct URI passes', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Schema')
    cy.contains('SchemaParser').click() // Click on first el containing 'Welcome'
    cy.contains('Sandbox').should('not.exist')


  })
  it('click schemaParser page passes', () => {
    // cy.visit('http://localhost:3000/')
    // cy.get('li').click() // Click on button
    // cy.focused().click() // Click on el with focus

  })
})

// describe('visit schemaparser page', () => {
//   it('via direct URI passes', () => {
//     cy.visit('http://localhost:3000/schemaParser')
//     cy.contains('Schema')
//     cy.contains('Sandbox').should('not.exist')
//   })
//   it('via click from homepage passes', () => {
//     cy.visit('http://localhost:3000/')
//   })
// })