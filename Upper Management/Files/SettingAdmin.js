export class settingadmin{
      redirectsetting(){
       cy.get('#root > div.MuiBox-root.css-k008qs > nav > div > div > div:nth-child(2) > div > ul:nth-child(7) > a > div.MuiListItemText-root.css-sqh3xd > p').click()
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
}