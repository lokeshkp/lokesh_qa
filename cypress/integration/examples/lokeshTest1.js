/// <reference types="Cypress"/>
describe('My Test Suite',function(){
    it('My First TestCase',function(){
        cy.visit(Cypress.env('qaUrl'))

        cy.get(".login").click()
        cy.get("#email").type("kplokesh@gmail.com")
        cy.get("#passwd").type("test123")
        cy.get("#SubmitLogin").click()


        cy.get('#search_query_top:visible').type("Dress")
        cy.wait(2000)
        cy.get('#searchbox > .btn').click()
        cy.get(".product-container").should('have.length',7)

        // parent child 
        //cy.get(".product-container").find(".product-image-container").should('have.length',5)
        //cy.get(".product-container").eq(2).contains('Add to cart').click()

        //cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').trigger('mouseover')   // to mouseover
        cy.selectProduct('Printed Chiffon Dress')
       

        cy.wait(1000)
        cy.get('.button-container > .button-medium > span').click({force:true})
        //cy.get('.continue > span').dblclick({force :true})
        const textLogo = cy.get("#cart_title").then(function(txtShoppingCart){
            cy.log(txtShoppingCart.text())
        })
        cy.get('.cart_navigation > .button > span').click({force:true})
        
        cy.get('h1.page-heading').then(function(txtAdd){
            if(txtAdd.text()=='Addresses'){
                cy.log("Entered in Addresses")
                cy.get('.cart_navigation > .button > span').click({force:true})
                cy.get('h1.page-heading').then(function(txtShip){
                    if(txtShip.text()=='Shipping'){
                        cy.log("Entered in Shipping")
                        cy.get('#cgv').click()
                        cy.get('.cart_navigation > .button > span').click({force:true})
                    }

                })     
            }else{
                cy.log("Not Entered in Addresses")
            }
        })
     
    })

    it('My Second TestCase',function(){
        console.log("Om Srirama");     
    })

   
})
