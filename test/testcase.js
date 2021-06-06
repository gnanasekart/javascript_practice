var should = require('chai').should()
var expect = require('chai').expect
var assert = require('chai').assert
const { isElementPresent } = require('./validation.js')
log = console.log

describe('mocha validation', () => {

    let name = 'sekar'
    it('Validate should', () => {

        name.should.equal('sekar')
        name.should.have.lengthOf(5)
        log(isElementPresent())

    })


    it.skip('Validate expect', () => {
        expect(name).to.equal('sekar')
        expect(name).to.have.lengthOf(2)
        expect(isElementPresent()).to.true
    })

    it('Validate assert', () => {
        assert.equal(name, 'sekar')
        assert.lengthOf(name, 5)
        assert.equal(isElementPresent(), true)
    })

})

before(() => {
    log('Before Hook')
})

after(() => {
    log('after Hook')
})

//run before each test
beforeEach(() => {
    log('Before Each Hook')
})


//run after each test
afterEach(() => {
    log('after Each hook')
})