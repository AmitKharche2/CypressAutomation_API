

describe("handle dropdowns",()=>
{

it.skip('Dropdowns with elements',()=>
{

cy.visit("https://www.zoho.com/commerce/free-demo.html")
cy.get('#zcf_address_country').select('Italy')
.should('have.value','Italy')
})

it.skip('Dropdowns without select',()=>
{

cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
cy.get('#select2-billing_country-container').click()
cy.get('.select2-search__field').type('Italy').type('{enter}')

})

it.skip('Autosuggestions Dropdowns',()=>
{

cy.visit("https://www.wikipedia.org/")
cy.get('#searchInput').type('Delhi')
cy.get('.suggestion-title').contains('Delhi University').click()

})

it('Dynamic Dropdowns',()=>
{

cy.visit("https://www.google.com/")

cy.get("textarea[name='q']").type('cypress automation')
cy.wait(3000)
cy.get('div.wM6W7d>span').should('have.length',12)

cy .get('div.wM6W7d>span').each( ($el,index,$list)=>
{
    if($el.text()=='cypress automation tutorial')
    {
        cy.wrap($el).click()
    }
})

cy.get("input[name='q']").should('have.value','cypress automation tutorial')

})

})