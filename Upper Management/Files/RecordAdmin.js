export class recod {
    redirctionrecord(){
       cy.get('#root > div.MuiBox-root.css-k008qs > nav > div > div > div:nth-child(2) > div > ul:nth-child(3) > a > div.MuiListItemText-root.css-sqh3xd > p').click()
       cy.get(':nth-child(5) > :nth-child(13) > :nth-child(2)').scrollIntoView()

    }
    deleterecord(){
        cy.get(':nth-child(5) > :nth-child(13) > :nth-child(2)').click({force:true})
    }
    editrecord(model,specific,tagetdn,source,Nonpallatized){
        cy.get(':nth-child(5) > :nth-child(13) > :nth-child(1)').click({force:true})
        cy.get('#projectModel').type(model)
        cy.get('#specifications').type(specific)
        cy.get('#targetDN').type(tagetdn)
        cy.get('#outsource').type(source)
        cy.get('#nonPalletized40HQQty').type(Nonpallatized)
        cy.get('.css-fh2xbg').click({force:true})
        cy.get('.css-12452m').click({force:true})
    }

}0