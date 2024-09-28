import {Uppermanagment} from '../UpperManagment/LoginAdmin'
import {ummenu} from '../UpperManagment/UserMenuAdmin'
import {recod} from  '../UpperManagment/RecordAdmin'
import {sheetversion} from '../UpperManagment/SheetversionAdmin'
import {settingadmin} from '../UpperManagment/SettingAdmin'
import  {ASignin} from '../GroupA/ALogin'
import {Arec} from '../GroupA/ARecord'
import {Aset} from '../GroupA/ASetting'
import {Bsigin} from '../GroupB/BSignin'
import {Financialvalue} from '../GroupB/BFinancialValue'
import {Bset} from '../GroupB/BSetting'
const UM = new Uppermanagment()
const objectUM = new ummenu()
const recobj = new recod()
const sheetobj = new sheetversion()
const settingobj = new settingadmin()
const Signinobj = new ASignin()
const records = new Arec()
const Asetingobj = new Aset()
const Bloginobj = new Bsigin()
const FAobj = new Financialvalue()
const Bsetobj = new Bset()

describe('template spec', () => {
  before(() => {
    cy.visit('http://3.130.4.236')
});
  it('Test Case 1, Login Upper Managment Role', () => {
    cy.wait(10000)
    UM.email('onlineexceltooladmin@gmail.com')
    UM.password('Hahaha88*')
     UM.loginbtn()
     
     
  })
 it('Test Case 2, User Menu Add Upper Managment Role', () => {
  cy.wait(10000)
  UM.email('onlineexceltooladmin@gmail.com')
  UM.password('Hahaha88*')
  UM.loginbtn()
  objectUM.UUser()
  objectUM.firstname('Rehman')
  objectUM.lastname('Sarwar')
  objectUM.Address('CCH')
  objectUM.Password('1234@Rehman')
  objectUM.email('Rub@gmail.com')
  objectUM.useruppermanagment()
  objectUM.clickAdd()
  objectUM.cancelbtn()
 })
 it('Test Case 3, User Menu Add Group A Role', () => {
  UM.email('onlineexceltooladmin@gmail.com')
  UM.password('Hahaha88*')
  UM.loginbtn()
  objectUM.UUser()
  objectUM.firstname('Group')
  objectUM.lastname('AAAA')
  objectUM.Address('CCH')
  objectUM.Password('1234@Rehman')
  objectUM.email('GroupAA@gmail.com')
  objectUM. usergroupA()
  objectUM.clickAdd()
  objectUM.cancelbtn()
 })
 it('Test Case 4, User Menu Add Group B', () => {
  UM.email('onlineexceltooladmin@gmail.com')
  UM.password('Hahaha88*')
  UM.loginbtn()
  objectUM.UUser()
  objectUM.firstname('Group')
  objectUM.lastname('BBB')
  objectUM.Address('CCH')
  objectUM.Password('1234@Rehman')
  objectUM.email('Groupbb@gmail.com')
  objectUM.usergroupB()
  objectUM.clickAdd()
  objectUM.cancelbtn()
 })
 it('Test Case 4, Records Menu', () => {
  UM.email('onlineexceltooladmin@gmail.com')
  UM.password('Hahaha88*')
  UM.loginbtn()
  recobj.redirctionrecord()
  recobj.editrecord('200','Chinaa','17453','3203','10008')
  //recobj.deleterecord()

 })
 it('Test Case 5, Sheet Version', () => {
  UM.email('onlineexceltooladmin@gmail.com')
  UM.password('Hahaha88*')
  UM.loginbtn()
  sheetobj.Redirect()
 // sheetobj.Addsheet('Romi','2024-01-23','2025-01-23')
   // sheetobj.Editsheet('Romii','2024-10-26','2024-10-30')
   sheetobj.deletesheet()
 })
 it('Test Case 5, Admin Setting', () => {
  UM.email('onlineexceltooladmin@gmail.com')
  UM.password('Hahaha88*')
  UM.loginbtn()
  settingobj.redirectsetting()
  settingobj.oldpassword('1234@Rehman')
  settingobj.newpassword('123@Romi')
  settingobj.confirmpassword('123@Romi')
  settingobj.btnchangepassword()
 })
 it('Test Case 6, Group A Sigin ', () => {
    Signinobj.Signin('groupA@gmail.com','groupA')
 })
 it ('Test Case 6, Add Record in Group A ', () => {
  Signinobj.Signin('groupA@gmail.com','groupA')
  records.AddRecords('abc123','LM690','232','23','75','32','2024-10-30')
})
it('Test Case 6, Add Record in Group A ', () => {
  Signinobj.Signin('groupA@gmail.com','groupA')
  Asetingobj.redirectsetting()
  Asetingobj.oldpassword('1234@Rehman')
  Asetingobj.newpassword('123@Romi')
  Asetingobj.confirmpassword('123@Romi')
  Asetingobj.btnchangepassword()
  Asetingobj.logout()
})
it('Test Case 7, SignIn Group B ', () => {
  Bloginobj.Signin('groupB@gmail.com','groupB')
})
it('Test Case 8, Add Finanacial Vlaue agianst Group B ', () => {
  Bloginobj.Signin('groupB@gmail.com','groupB')
  FAobj. FAddPopup()
  FAobj.sheetversions('new X')
  FAobj.sheetname('Romi')
  FAobj.sheetcategory('China inhouse')
  FAobj.FADuty('342')
  FAobj.FAinsurance('869')
  FAobj.FAoutbound('1234')
  FAobj.FAComission('239')
  FAobj.FADefectivereturn('23')
  FAobj.othervariable('35')
  FAobj.othervaraibletwo('97')
  FAobj.btnAdd()
})
it('Test Case 8, Delete Finanacial Vlaue Row agianst Group B ', () => {
  Bloginobj.Signin('groupB@gmail.com','groupB')
  FAobj.deleteFAROW()
})
it.only('Test Case 9, Setting agianst Group B ', () => {
  Bloginobj.Signin('groupB@gmail.com','groupB')
  Bsetobj.redirectsetting()
  Bsetobj.oldpassword('1234@Rehman')
  Bsetobj.newpassword('123@Romi')
  Bsetobj.confirmpassword('123@Romi')
  Bsetobj.btnchangepassword()
  Bsetobj.logout()
  
})




  
})