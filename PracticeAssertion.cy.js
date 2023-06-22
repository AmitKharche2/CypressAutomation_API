

describe('AssertionPractice',()=>
{

it('ImplicitAssertionDemo',()=>
{

  cy.visit("https://practicetestautomation.com/practice-test-login/")
  cy.url().should('include','practicetestautomation')
  .and('eq','https://practicetestautomation.com/practice-test-login/')
  .and('contain','testautomation')
 
  //logo present or not
  cy.get('.custom-logo').should('be.visible').and('exist')
//links present 
cy.xpath("//a").should('have.length','9')
//berify value of element present on webpage

cy.get("[name='username']").type("student")
cy.get("[name='username']").should('be.visible')
.and('exist')




})

})