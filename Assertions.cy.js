


describe('Assertions demo',()=>
{
   it('Implicit assertion',()=>
   {
     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

//for implicit assertions using should ,and these keywords

//    cy.url().should('include','orangehrmlive.com')   //written current url adn thne assertion
//    cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//    cy.url().should('contain','orangehrm')

   // cy.url().should('include','orangehrmlive.com')   //written current url adn thne assertion
   // .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   // .should('contain','orangehrm')

    // if we replace should keyword by and keyword
   //  cy.url().should('include','orangehrmlive.com')
   //  .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   //  .and('contain','orangehrm')

    //for title 
    cy.title().should('include','Orange')
    .and('eq',"OrangeHRM")
    .and('contain',"HRM")

    //logo present or not
    cy.get('.orangehrm-login-branding > img').should('be.visible').and('exist')

     cy.xpath("//a").should('have.length','5')

     //verify value of elements on webpage

     cy.get("input[placeholder='Username']").type("Admin")

     //provided value into inbox is correct or not ,we can check by have.value function
     cy.get("input[placeholder='Username']").should('have.value','Admin')

   })


   it('ExplicitAsssertions',()=>
   {
     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

     cy.get("input[placeholder='Username']").type("Admin")
     cy.get("input[placeholder='Password']").type("admin123")
     cy.get("button[type='submit']").click()
//need to write javascript code

 let expName="Paul Collings"

 //first need to capturre element and then wrtie jaavscript function then will take text value of element
cy.get(".oxd-userdropdown-name").then( (x)=>{
              
                                   let actName=x.text()
                                   // BDD style assertions
                      expect(actName).to.equal(expName)
                      expect(actName).to.not.equal(expName)   //negative 

                      //TDD assertions
                      assert.equal(actName,expName)
                      assert.notequal(actName,expName)


                                            })



   })


})