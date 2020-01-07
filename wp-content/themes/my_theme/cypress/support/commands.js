Cypress.Commands.add('switchToEnglish', () => {
	// click on the language switcher for english
	cy.get('.wpml-ls-item-en').click();
});

Cypress.Commands.add('switchToFrench', () => {
	// click on the language switcher for english
	cy.get('.wpml-ls-item-fr').click();
});

Cypress.Commands.add('checkHomepageServicesLink', servicesIndex => {
	cy.get('[data-cy=services-link-' + servicesIndex + ']')
		.click({ force: true })
		.url()
		.should('contain', 'services/#' + servicesIndex)
		.pause();

	cy.go(-1);
});
