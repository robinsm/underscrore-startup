/// <reference types="Cypress" />

context('Navigation', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('Visit root and take snapshot', () => {
		cy.visit('/')
			.url()
			.should('contain', '/');

		// Take a snapshot for visual diffing
		cy.percySnapshot('homepage (en)');
	});

	it('Verify all services links', () => {
		cy.checkHomepageServicesLink(1);
		cy.checkHomepageServicesLink(2);
		cy.checkHomepageServicesLink(3);
		cy.checkHomepageServicesLink(4);
		cy.checkHomepageServicesLink(5);
	});
});
