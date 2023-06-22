describe('Firstest',()=>

{
    it('Verify title positive test',()=>
{
  cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  cy.title().should('eq','OrangeHRM')
})

it('Verify title negative test',()=>
{
  cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  cy.title().should('eq','OrangeHRM123')
}
)

it('verify swaglabs title',()=>
{
  cy.visit('https://www.saucedemo.com/')
  cy.title().should('eq','Swag Labs')

})

})

