export class Uppermanagment{
    email(email){
        cy.get('#outlined-adornment-email-login').type(email);

    }
    password(pass){
        cy.get('#outlined-adornment-password-login').type(pass)
    }
    loginbtn(){
        cy.get('.MuiBox-root > div > .MuiButtonBase-root').click({force:true})
    }
}