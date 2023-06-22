
describe("HTTP request",()=>
{

it('GET Call',()=>
{

cy.request('GET','https://jsonplaceholder.typicode.com/posts/1')
//verify status
.its('status')
.should('equal',200);
})

it("POST call",()=>
{
  cy.request({
        
       method: 'POST',
       url:'https://jsonplaceholder.typicode.com/posts/',
       body:
       {
        title: "Test post",
        body: "This is post call",
        userId: 1
       }
  })
.its('status')
.should('equal',201);
})


it('PUT call',()=>
{
    // https://jsonplaceholder.typicode.com/posts/1

   cy.request(

    {
       method:'PUT',
       url:'https://jsonplaceholder.typicode.com/posts/1',
       body:
       
        {
            title: "Test post-updated",
            body: "This is post call",
            userId: 1,
            id: 1
       }

    }   )
    .its('status')
    .should('equal',200);


})



})