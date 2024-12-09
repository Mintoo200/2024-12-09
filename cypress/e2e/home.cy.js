describe('Homepage', () => {
    it("test", () => {
        cy.visit('https://beta.gouv.fr/');
        cy.get('h1').should('be.visible');
        cy.findByRole('heading', { level: 1 }).should('be.visible');

        cy.findByRole('searchbox', { name: 'Recherche' })
            .type('foo')
        cy.findByRole('button', { name: 'Rechercher' })
            .click()

        cy.findByRole('heading', { level: 1 }).should('contain', 'Résultats')
        cy.findByText('Aucun résultat pour « foo »').should('be.visible')
    })
});
