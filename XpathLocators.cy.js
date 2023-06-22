

describe('XpathLocators',()=>
    {

it('Find no of products',()=>
{

   cy.visit("http://automationpractice.pl/index.php")
   cy.xpath("//ul[@id='blockbestsellers']/li").should('have.length',6)

})
it('find products available',()=>
{

 cy.visit("http://automationpractice.pl/index.php")
 cy.get('#search_query_top').type('T-Shirts')
 cy.get("[name='submit_search']").click()
 cy.get('.lighter').contains('T-Shirts')


})



    })