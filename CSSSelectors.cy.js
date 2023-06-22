

describe('CSSSelectors',()=>

{
it('csslocators',()=>
{
    cy.visit('http://automationpractice.pl/index.php')
      
    // cy.get('#search_query_top').type('T-Shirts')   //id cssselector
    cy.get('.search_query').type('T-Shirts')      //class 

    cy.get("[name='submit_search']").click()    //attributor css seelctor

    cy.get('.lighter').contains('T-Shirts')


})
})