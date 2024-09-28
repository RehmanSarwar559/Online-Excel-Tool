export class Financialvalue {
    FAddPopup(){
        cy.get('.MuiCardHeader-action > .MuiButtonBase-root').click()
    }
    sheetversions(shetverson){
        cy.get('#mui-component-select-sheetVersion').click({force:true})
        cy.wait(10000)
        cy.contains(shetverson).click({force:true})
        
    }
    sheetname(shetnaam){
        cy.wait(10000)
        cy.get('#\\:r5\\:').type(shetnaam)
    }
    sheetcategory(shetcategory){
        
        cy.get('#mui-component-select-sheetCategory').click({force:true})
        cy.wait(10000)
        cy.contains(shetcategory).click({force:true})
        
    }
    FADuty(Duty){
        cy.wait(10000)
        cy.get('#\\:r7\\:').type(Duty)
    }
    FAinsurance(insurance){
        cy.get('#\\:r8\\:').type(insurance)
    }
    FAoutbound(outbond){
        cy.get('#\\:r9\\:').type(outbond)
    }
    FAComission(commision){
        cy.get('#\\:ra\\:').type(commision)

    }
    FADefectivereturn(Defectivereturn){
        cy.get('#\\:rb\\:').type(Defectivereturn)

    }
    othervariable(otherV){
        cy.get('#\\:rc\\:').type(otherV)
    }
    othervaraibletwo(othvaraiblee){
        cy.get('#\\:rd\\:').type(othvaraiblee)

    }
    btnAdd(){
        cy.get('.css-fh2xbg').click()
    }
    deleteFAROW(){
        cy.get(':nth-child(1) > :nth-child(12) > div > .MuiButtonBase-root').scrollIntoView();
         cy.get(':nth-child(1) > :nth-child(12) > div > .MuiButtonBase-root').click({force:true})

    }
}