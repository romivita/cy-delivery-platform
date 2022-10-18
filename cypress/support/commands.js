Cypress.Commands.add('loginByApi', (email, password) => {
    cy.request({
        method: "POST",
        url: '/auth/log-in',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    }).then((response) => {
        expect(response.status, "status").to.equal(200);
    });
})

Cypress.Commands.add('setCookieScenarioTooltip', () => {
    cy.setCookie("sandbox-cookie-scenario-tooltip-seen", "true");
})