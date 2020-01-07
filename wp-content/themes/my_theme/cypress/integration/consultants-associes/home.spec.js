/// <reference types="Cypress" />

context('Navigation', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('Visit homepage and take snapshot', () => {
		cy.takePercySnapshot('');
	});

	it('Verify all services links', () => {
		cy.checkHomepageServicesLink(1);
		cy.checkHomepageServicesLink(2);
		cy.checkHomepageServicesLink(3);
		cy.checkHomepageServicesLink(4);
		cy.checkHomepageServicesLink(5);
	});
});
