import { Encode } from '../../services/index'

describe('Check home page', () => {
  it('visits check home page',  () => {
    cy.getData()
    cy.visit('http://localhost:8080/seller')
    cy.wait(1000)
   cy.Createproduct()
  })
})
