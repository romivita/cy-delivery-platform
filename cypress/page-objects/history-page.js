const dayjs = require('dayjs')
let customParseFormat = require('dayjs/plugin/customParseFormat')
let utc = require('dayjs/plugin/utc')
dayjs.extend(customParseFormat)
dayjs.extend(utc)

export class HistoryPage {
    navigate() {
        cy.visit('/history')
    }

    validateDeliveriesSortedByDates() {
        const parseDate = date => dayjs(date, "DD/MM/YYYY").utc(true).toDate()
        let prevDate = parseDate(dayjs())

        cy.get("[id^=jobDate-]").each($pre => {
            const currentDate = parseDate($pre.text())
            expect(prevDate).to.be.gte(currentDate)

            prevDate = currentDate
        })
    }
}