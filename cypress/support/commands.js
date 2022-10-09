// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
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