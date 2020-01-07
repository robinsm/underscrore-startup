/// <reference types="Cypress" />

context('Navigation', () => {
	beforeEach(() => {});

	it('Visit about page and take snapshot', () => {
		cy.takePercySnapshot('about');
	});
});
