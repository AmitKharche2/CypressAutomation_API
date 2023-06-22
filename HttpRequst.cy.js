
describe("API testing HTTP methods",()=>
{

it.skip('GET call',()=>

{
    cy.request('https://reqres.in/api/users?page=2')
    .its('status')
    .should('equal',200);
}
)

it.skip('POST call',()=>
{
    cy.request(
        {

          method:'POST',
          url:'https://reqres.in/api/users',
          body:
          {
            name: "morpheus",
            job: "leader"
          }
        })
        .its('status')
        .should('equal',201)
    })


    it.skip('PUT call',()=>
    {

        cy.request(  
 {

     method:'PUT',
     url:'https://reqres.in/api/users/2',
     body:
     {
         name: "morpheus",
         job: "zion resident"
     }
 })
 .its('status')
.should('equal',200)
    } )


it('GET call',()=>

{
     cy.request('https://dummy.restapiexample.com/api/v1/employees')
     .its('status')
     .should('equal',200);
})


it('POST call',()=>
{
  cy.request(

{
   method:'POST',
   url:'https://dummy.restapiexample.com/api/v1/create',
   body:
   {
    name:"test",
    salary:"123",
    age:"23"
   }
}  ) 
.its('status')
.should('equal',201)

})


})