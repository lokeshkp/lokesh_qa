
/// <reference types="Cypress"/>
import LoginPage from '../../support/myPageObjects/LoginPage'
import ProdSearchResults from '../../support/myPageObjects/ProdSearchResults'


const loginPage = new LoginPage()
const prodSearchResults = new ProdSearchResults()

before(function () {
    cy.fixture('lokeshHooksTestData.json').then(function (testData) {
        this.data = testData
    })
})

after(function () {
    loginPage.getgetSignOutLink().click()
})


describe('Page Object Model Test Suite', function () {


    it('My Login TestCase', function () {
        //const loginPage =new LoginPage()
        cy.visit(Cypress.env('qaUrl'))
        loginPage.getSignInLink().click()
        loginPage.getEmailBox().type(this.data.uname)
        loginPage.getPasswordBox().type(this.data.password)
        loginPage.getSignInButton().click()
    })


    it('Product Search Test', function () {
        var proDat = this.data.prodData
        //proDat.forEach(el => prodSearchResults.getSearchBox().type(el))
        var i
        for (i = 0; i < proDat.length; i++) {
            prodSearchResults.getSearchBox().type(proDat[i])
            prodSearchResults.getSearchButton().click()
            prodSearchResults.getSearchResultTitle().then(function(searchTxt){
                //expect(searchTxt.text().includes(proDat[i]))
                cy.get('.page-heading').then(function(txt){
                    cy.log(txt.text().includes(proDat[i]))
                })
                cy.log(searchTxt.text())
            })

            prodSearchResults.getSearchBox().clear()
        }
    })
})