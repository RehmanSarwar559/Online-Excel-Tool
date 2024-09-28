export class ummenu{
    UUser(){
        cy.wait(10000)
        cy.get('.MuiCardHeader-action > .MuiButtonBase-root').click({force:true})
        //cy.get('#\\:r4\\:').type('Rehman')

    }
    firstname(fnaam){
        
        cy.get('#\\:r4\\:').type(fnaam)
    }
    lastname(lname){
        cy.get('#\\:r5\\:').type(lname)
    }
    Address(Adres)
    {
        cy.get('#\\:r6\\:').type(Adres)
    }
    email(emal){
        cy.get('#\\:r7\\:').type(emal)
    }
    Password(pass){
        cy.get('#\\:r8\\:').type(pass)
    }
    useruppermanagment(){
        cy.get('#userGroup').click({force:true})
       cy.get('[data-value="6572ffa750f6f6d8df532d72"]').click({force:true})
    }
    usergroupA(){
        cy.get('#userGroup').click({force:true})
        cy.get('#\\:r9\\: > [tabindex="0"]').click({force:true})
    }
    usergroupB(){
        cy.get('#userGroup').click({force:true})
        cy.get('[data-value="6571a8cc6aa027bfc0f3dfdc"]').click({force:true})
       
    }
    clickAdd(){
        cy.get('.css-fh2xbg').click({force:true})
    }
    cancelbtn(){
        cy.get('.css-12452m').click({force:true})
    }

}