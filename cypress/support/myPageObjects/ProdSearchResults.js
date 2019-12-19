class ProdSearchResults{

    getSearchBox(){
        return cy.get('#search_query_top')
    }

    getSearchButton(){
        return cy.get('#searchbox > .btn')
    }

    getSearchResultTitle(){
        return cy.get('.lighter')
    }
}

export default ProdSearchResults