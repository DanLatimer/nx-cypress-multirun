describe('my-feature-2', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.findByText('Welcome nx-multi-feature 👋');
  });
});
