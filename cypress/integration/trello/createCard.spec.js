describe('Trello API - Card Operations', () => {
    before(() => {
      cy.request('POST', '/boards/', {
        name: 'Test Board',
        key: Cypress.env('API_KEY'),
        token: Cypress.env('API_TOKEN')
      }).then((response) => {
        cy.wrap(response.body.id).as('boardId');
      });
    });

    it('should create a new card', function () {
      cy.request('POST', `/cards?idList=${this.listId}`, {
        name: 'Test Card',
        key: Cypress.env('API_KEY'),
        token: Cypress.env('API_TOKEN')
      }).then((response) => {
        expect(response.status).to.eq(200);
        cy.wrap(response.body.id).as('cardId');
      });
    });
  });