/// <reference types="Cypress" />

context('Navigation', () => {
	beforeEach(() => {});

	it('Visit services page and take snapshot', () => {
		cy.takePercySnapshot('services');
	});
});
