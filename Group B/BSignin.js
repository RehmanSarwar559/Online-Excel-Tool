export class Bsigin {
    Signin(Bemail,Bpass){
        cy.get('#outlined-adornment-email-login').type(Bemail);
        cy.get('#outlined-adornment-password-login').type(Bpass)
        cy.get('.MuiBox-root > div > .MuiButtonBase-root').click({force:true})

    }
}