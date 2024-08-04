Cypress.Commands.add('login', (username, password) => {
    cy.request('POST', '/login', { username, password })
      .then((response) => {
        expect(response.status).to.eq(200);
        cy.setCookie('session_id', response.body.session_id);
      });
  });