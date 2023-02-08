import Header from '../../components/Header'
// import '../../public/*';

describe('<Header>', () => {
  it('mounts', () => {
    cy.mount(<Header/>)
    cy.get('[alt="SafeQL Logo"]')
    .should('be.visible')
  })
})