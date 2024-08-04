describe('Trello API - Delete Board', () => {
    before(() => {
      cy.request('POST', '/boards/', {
        name: 'Test Board',
        key: Cypress.env('API_KEY'),
        token: Cypress.env('API_TOKEN')
      }).then((response) => {
        cy.wrap(response.body.id).as('boardId');
      });
    });

    it('should delete a board', function () {
      cy.request('DELETE', `/boards/${this.boardId}?key=${Cypress.env('API_KEY')}&token=${Cypress.env('API_TOKEN')}`)
        .then((response) => {
          expect(response.status).to.eq(200);
        });
    });
  });