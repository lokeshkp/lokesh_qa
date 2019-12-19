describe('Cypress API Test Suite',function(){
    it('My First API TestCase',function(){

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.server()
        cy.route({
            method : "PUT",
            url : "/comments/*",
            status : "404",
            response : {
                error: "Hey Comment does not exist"
            },
            delay : 1000
        }).as('updateComment')
        
        cy.get('.network-put').click()
        cy.get('.network-put-comment').should('contain','Hey Comment does not exist')
    })

    it('My Second API Test Case',function(){

        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php',{
            "name" :"Learning Cypress API Testing",
            "isbn" : "lkCypress1",
            "aisle" : "l329",
            "author" : "lokCypress1"
        }).then(function(response){
            expect(response.body).to.have.property('Msg','successfully added')
            expect(response.status).to.eq(200)
        })

    })
})