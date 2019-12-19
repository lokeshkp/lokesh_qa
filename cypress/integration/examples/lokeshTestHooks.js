describe('My Hooks Suite',function(){


    beforeEach(function(){
        cy.fixture('lokeshHooksTestData.json').then(function(testData){
            this.data=testData
            cy.log('Before... TestCase...')
            cy.visit('http://automationpractice.com/index.php')
        })
    })

    after(function(){
        cy.log('After... TestCase...')
    })

    it('My Login TestCase',function(){
        cy.log('First TestCase...')
        cy.get('.login').click()
        cy.get('input[id="email"]').type(this.data.uname)
        cy.get('input[name="passwd"]').type(this.data.password)
        cy.get('#SubmitLogin').click()
        //cy.pause()

    })

    it('My Search TestCase',function(){
        cy.log('Second TestCase...')
        this.data.prodData.forEach(function(elment){
            cy.get('#search_query_top').type(elment)
            cy.get('#searchbox > .btn').click()
        })
    })

    it('My Third TestCase',function(){
        cy.log('Third TestCase...')
    })
})