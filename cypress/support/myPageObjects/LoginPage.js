class LoginPage{

    getSignInLink(){
        return cy.get('.login')
    }

    getEmailBox(){
        return cy.get('#email')
    }

    getPasswordBox(){
        return cy.get('#passwd')
    }

    getSignInButton(){
        return cy.get('#SubmitLogin')
    }

    getSignOutLink(){
        return cy.get('.logout')
    }
}

export default LoginPage