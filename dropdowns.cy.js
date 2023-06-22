
describe('Dropdowns elements',()=>
{
it.skip('Handle Country dropdown elements',()=>
{  
cy.visit("https://www.zoho.com/commerce/free-demo.html")
cy.get('#zcf_address_country').select('Italy')
.should('have.value','Italy')

})
it.skip('Handle state dropdowns elements',()=>
{ 
// cy.visit("https://www.zoho.com/commerce/free-demo.html")
// cy.get("[name='countrystate']").select('kerala')
// .should('have.value','kerala')

cy.visit("https://www.zoho.com/commerce/free-demo.html")
cy.get("[name='countrystate']").select('sikkim')
.should('have.value','sikkim')
})

it.skip('Dropdowns without select',()=>
{ 
cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
// cy.get('#select2-billing_country-container').click()
// cy.get('.select2-search__field').type('Italy').type('{enter}')
// cy.get('#select2-billing_country-container').click()
// cy.get('.select2-search__field').type('Japan').type('{enter}')

cy.get('#select2-billing_country-container').click()
cy.get('.select2-search__field').type('nepal').type('{enter}')

})
it.skip('Autosuggestion dropdowns',()=>
{  
// cy.visit("https://www.wikipedia.org/")
// cy.get('#searchInput').type('England')
// cy.get('#typeahead-suggestions').contains('England cricket team').click()

cy.visit("https://www.google.com/?safe=active&ssui=on")
cy.get('#APjFqb').type('Automation')
cy.get('#c7mM1c').contains('automation testing').click()

})

it('Dynamic dropdown elements',()=>
{  
    cy.visit("https://www.google.com/")
    cy.get('#APjFqb').type('selenium testing')
    cy.wait(4000)

    cy.get('div.wM6W7d>span').should('have.length',12)

cy.get('div.wM6W7d>span').each(  ($el,index,$list)=>
{
if($el.text()=='selenium testing')
{
    cy.wrap($el).click()
}

})
cy.get('#APjFqb').should('have.value','selenium testing')

})

})

