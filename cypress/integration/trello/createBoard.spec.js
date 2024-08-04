describe('Trello API - Board Operations', () => {
    it('should create a new board', () => {
      cy.request('POST', '/boards/', {
        name: 'Test Board',
        key: Cypress.env('API_KEY'),
        token: Cypress.env('API_TOKEN')
      }).then((response) => {
        expect(response.status).to.eq(200);
        cy.wrap(response.body.id).as('boardId');
      });
    });
  });