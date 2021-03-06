describe('adding a restaurant',()=>{
    it('displays the restaurant int the list',()=>{

        const restaurantName = 'Mariott Bonvoy'
        cy.visit('http://localhost:1234')

        cy.get('[data-test="newRestaurantName"]')
        .should('not.exist')

        cy.get('[data-test="addRestaurantButton"]')
        .click()

        cy.get('[data-test="newRestaurantName"]')
        .type(restaurantName)

        cy.get('[data-test="saveNewRestaurantButton"]')
        .click()

        cy.get('[data-test="newRestaurantName"]')
        .should('not.exist')

        cy.contains(restaurantName)
    })
})