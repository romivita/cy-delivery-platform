import {HistoryPage} from '../page-objects/history-page'

describe('Deliveries history', () => {
    const historyPage = new HistoryPage()

    before(() => {
        cy.loginByApi(
            Cypress.env('EMAIL'),
            Cypress.env('PASSWORD')
        )
        cy.setCookieScenarioTooltip();
        historyPage.navigate();
    })

    it("should have dates sorted chronologically", () => {
        historyPage.validateDeliveriesSortedByDates();
    })
})