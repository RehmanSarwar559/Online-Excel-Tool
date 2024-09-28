export class ASignin {
    Signin(Aemail,Apass){
        cy.get('#outlined-adornment-email-login').type(Aemail);
        cy.get('#outlined-adornment-password-login').type(Apass)
        cy.get('.MuiBox-root > div > .MuiButtonBase-root').click({force:true})

    }
}