const expect = require ('chai').expect
const datetime = require ('../datetime')

describe('datetime', () => {
    it('Check if the current date is correct', () => {
        const result = datetime.check()
                var date = new Date(Date.now()).toLocaleDateString();
        expect(result).to.equal(date)
    })
})