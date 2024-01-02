import axios from "axios";

describe('Bookish application', function() {
  // cleanup stub before and after tests
  beforeEach(async() => {
    return axios
      .delete(`http://localhost:8080/books?_cleanup=true`)
      .catch(err => err)
  })

  // afterEach(async() => {
  //   return axios
  //     .delete(`http://localhost:8080/books?_cleanup=true`)
  //     .catch(err => err)
  // })

  // add items to stub server before tests and after ensuring there is no data
  beforeEach(()=> {
    const books = [
      { "name": "Refactoring", "id": 1 },
      { "name": "Domain-driven design", "id": 2 },
      { "name": "Building Microservices", "id": 3 }
    ]

    return books.map((book) => {
      axios
        .post(`http://localhost:8080/books`, book, 
          { headers: { 'Content-Type': 'application/json' } })
        .catch(err => err)
      })
  })

  // describe('home page tests', () => {
  it('Visits the bookish', function() {
    cy.visit('http://localhost:3000/');
    cy.get('h2[data-test="heading"]').contains('Bookish')
  })

  it('Shows a book list', () => {
    cy.visit('http://localhost:3000/');
    cy.get('div[data-test="book-list"]').should('exist');
    cy.get('div.book-item').should((books) => {
      expect(books).to.have.length(books.length);
      const titles = [...books].map(x => x.querySelector('h2')?.innerHTML);
      expect(titles).to.deep.equal(
        ['Refactoring', 'Domain-driven design', 'Building Microservices']
      )
    });
  })
  // })

  // describe('book details page', () => {
  it('Goes to book detail page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('div.book-item').contains('View Details').eq(0).click()
    cy.url().should('include', "books/1")
    cy.get('h2.book-title').contains('Refactoring');
  })
  // })
})