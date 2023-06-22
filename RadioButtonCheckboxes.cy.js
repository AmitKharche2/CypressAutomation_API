

describe("Check UI elements",()=>
{

 /*it('Checking radio buttons',()=>
 {
     cy.visit("https://itera-qa.azurewebsites.net/home/automation")
     cy.get("input#male").should('be.visible')
     cy.get("input#female").should('be.visible')
     //selecting radio nutton
     cy.get("input#male").check().should('be.checked')
     cy.get("input#female").should('not.be.checked')
 })*/

 it('Checking check boxes',()=>
 {
     cy.visit("https://itera-qa.azurewebsites.net/home/automation")
   
    // cy.get("input#monday").should('be.visible')
    // cy.get("input#monday").check().should('be.checked')
    // cy.get("input#monday").uncheck().should('not.be.checked')


    //for selecting multiple boxes
    // cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')

    cy.get("input.form-check-input[type='checkbox']").first().check().should('be.visible')
    cy.get("input.form-check-input[type='checkbox']").last().check().should('be.visible')

 })



})