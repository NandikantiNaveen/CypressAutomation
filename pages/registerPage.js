export class registerPage{

    weblocator={
        firstName:'#input-firstname',
        lastName:'#input-lastname',
        email:'#input-email',
        telephone: '#input-telephone',
        password: '#input-password',
        confirmPassword: '#input-confirm',
        privacyPolicy:'input[type="checkbox"]',
        continue:'.btn.btn-primary'
    }

    openURL(){
        cy.visit(Cypress.env('URL'))
    }

    enterFirstName(fName){
        cy.get(this.weblocator.firstName).type(fName)
    }

    
    enterlastName(lName){
        cy.get(this.weblocator.lastName).type(lName)
    }

    enterEmail(email){
        cy.get(this.weblocator.email).type(email)
    }

    enterTelephone(telePhone){
        cy.get(this.weblocator.telephone).type(telePhone)
    }

    enterPassword(password){
        cy.get(this.weblocator.password).type(password)
    }

    enterConfirm(confirmPassword){
        cy.get(this.weblocator.confirmPassword).type(confirmPassword)
    }

    selectCheckbox(){
        cy.get(this.weblocator.privacyPolicy).check()
    }

    clickOnContinue(){
        cy.get(this.weblocator.continue).click()
    }


}