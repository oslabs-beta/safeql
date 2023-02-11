import Header from '../../components/Header';

describe('<Header>', () => {
  it('mounts', () => {
    cy.mount(<Header />);
    cy.get('[alt="SafeQL Logo"]').should('be.visible');
  });
});
