

describe('Dropdowns elements',()=>
{
it.skip('Dropdonws elements general',()=>{
    cy.visit("https://www.zoho.com/commerce/free-demo.html")
    cy.get('#zcf_address_country').select('India')
    .should('have.value','India')
})
it.skip('Dropdonws elements without select',()=>{
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
    cy.get('#select2-billing_country-container').click()
    cy.get('.select2-search__field').type('japan').type('{enter}')
})

it('dynamic dropdowns',()=>
{
    cy.visit("https://www.google.com/")
    cy.get('#APjFqb').type('selenium')
    cy.wait(3000)

    cy.get('div.wM6W7d>span').should('have.length',12)
  
    cy.get('div.wM6W7d>span').each ( ($el,index,$list) =>
    {
     if($el.text()=='selenium ide')
     {
        cy.wrap($el).click()
     }

    })

    cy.get('#APjFqb').should('have.value','selenium ide')

})

  

})