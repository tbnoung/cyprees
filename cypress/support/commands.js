
Cypress.Commands.add('getData', () => {
  cy.visit('http://localhost:8080/home')
  cy.get('#gologin').click()
    cy.wait(1000)
    cy.get('#permission').click({force: true})
    cy.wait(1000)
    cy.get('#sub3').click({force: true})
    cy.wait(1000)
    cy.get('#sub2').click({force: true})
    cy.wait(1000)
    cy.get('#0845814690').click({force: true})
    cy.wait(1000)
})

Cypress.Commands.add('Createproduct', () => {
       for (let index = 68; index < 1000; index++) {
        cy.get('#OpenDialogAddProduct').click({force: true})
        cy.get('#product_name').type(`Productname-test-00${index}`)
        cy.get('#product_sku').type(`Product_sku-test-00${index}`)
        // cy.get('#product_name').type(`Productname`)
        // cy.get('#product_sku').type(`Product_sku`)
        cy.get('#supplier_name').type('INET{enter}').trigger('input')
        cy.get('#manufacturer_name').type('Nike{enter}').trigger('input')
        // cy.get('#description').type(`Detail data ja${index}`)
        cy.get('#description').type(`Detail data ja-test-00${index}`)
        cy.get('#inventory_code').type('BATMAN{enter}').trigger('input')
        cy.get('#product_weight').type(`0.1`)
        cy.get('#pricetier_1').type(`50`)
        cy.get('#pricetier_2').type(`30`)
        cy.get('#pricetier_3').type(`31`)
        cy.get('#pricetier_4').type(`32`)
        cy.get('#pricetier_5').type(`33`)
        cy.get('#pricetier_6').type(`34`)
        cy.get('#confirmcreateproduct').click({force: true})
     }
})
