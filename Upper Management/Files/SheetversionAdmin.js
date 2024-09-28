export class sheetversion {
    Redirect(){
        cy.wait(10000)
         cy.get('.scrollbar-container > :nth-child(5)').click()
    }
    Addsheet(shetname,validFrom,validto){
        cy.get('#root > div.MuiBox-root.css-k008qs > main > div > div.MuiCardHeader-root.css-1ieua6y > div.MuiCardHeader-action.css-1bh09gn > button > svg').click()
        cy.get('#versionName').type(shetname)
        cy.wait(10000)
        cy.get('#validFrom').type(validFrom)
        cy.get('#validTo').type(validto)
        cy.get('.css-fh2xbg').click()

    }
    Editsheet(editname,editvalidFrom,editvalidto){
        cy.get(':nth-child(1) > :nth-child(5) > div > :nth-child(1)').click()
        cy.get('#versionName').type(editname)
        cy.wait(10000)
        cy.get('#validFrom').type(editvalidFrom)
        cy.get('#validTo').type(editvalidto)
        cy.get('.css-fh2xbg').click()
    }
    deletesheet(){
        cy.get(':nth-child(1) > :nth-child(5) > div > :nth-child(2)').click()
        cy.reload()
    }
}