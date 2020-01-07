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

Cypress.Commands.add('takePercySnapshot', pageName => {
	cy.visit('/' + pageName)
		.url()
		.should('contain', '/' + pageName);

	// Take a snapshot for visual diffing
	cy.percySnapshot(pageName + ' (en)', { widths: [576, 768, 992, 1200] });
});
