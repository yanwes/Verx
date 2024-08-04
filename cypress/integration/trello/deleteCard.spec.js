describe('Trello API - Delete Card', () => {
    before(() => {
      cy.request('POST', '/boards/', {
        name: 'Test Board',
        key: Cypress.env('API_KEY'),
        token: Cypress.env('API_TOKEN')
      }).then((response) => {
        cy.wrap(response.body.id).as('boardId');
      });

      cy.request('POST', '/cards', {
        name: 'Test Card',
        idList: this.listId,
        key: Cypress.env('API_KEY'),
        token: Cypress.env('API_TOKEN')
      }).then((response) => {
        cy.wrap(response.body.id).as('cardId');
      });
    });

    it('should delete a card', function () {
      cy.request('DELETE', `/cards/${this.cardId}?key=${Cypress.env('API_KEY')}&token=${Cypress.env('API_TOKEN')}`)
        .then((response) => {
          expect(response.status).to.eq(200);
        });
    });
  });