/// <reference types="Cypress" />

context('Navigation', () => {
	beforeEach(() => {});

	it('Visit news page and take snapshot', () => {
		cy.takePercySnapshot('news');
	});
});
