export class Aset{
    redirectsetting(){
        cy.get(':nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()
       }
       oldpassword(oldpass){
         cy.get('#\\:r0\\:').type(oldpass)
         cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click()
       }
       newpassword(newpass){
         cy.get('#\\:r1\\:').type(newpass)
         cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click()
       }
       confirmpassword(confmpass){
 
         cy.get('#\\:r2\\:').type(confmpass)
         cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click()
       }
       btnchangepassword(){
         cy.get('.MuiStack-root > div > .MuiButtonBase-root').click()
       }
       logout(){
        cy.wait(10000)
        cy.get('.MuiChip-label').click({force:true})
        cy.wait(6000)
        cy.contains('Logout').click()
       }
}