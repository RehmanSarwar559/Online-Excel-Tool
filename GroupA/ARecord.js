export class Arec{
    AddRecords(shet,proj,spec,DN,usd,Nonpar,validto){
       cy.get('#root > div.MuiBox-root.css-k008qs > main > div > div.MuiCardHeader-root.css-1ieua6y > div.MuiCardHeader-action.css-1bh09gn > button').click()
       cy.get('#sheetID').click({force:true})
       cy.contains(shet).click({force:true})
       cy.get('#projectModel').type(proj)
       cy.get('#specifications').type(spec)
       cy.get('#targetDN').type(DN)
       cy.get('#outsource').type(usd)
       cy.get('#nonPalletized40HQQty').type(Nonpar)
       cy.get('#validTo').type(validto)
       cy.get('.css-fh2xbg').click()

    }
}