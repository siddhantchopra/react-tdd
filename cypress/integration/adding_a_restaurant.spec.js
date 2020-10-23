describe('adding a restaurant',()=>{
    it('displays the restaurant int the list',()=>{

        const restaurantName = 'Suchi Place'
        cy.visit('http://localhost:1234')

        cy.get('[data-test="addRestaurantButton"]')
        .click()

        cy.get('[data-test="newRestaurantName"]')
        .type(restaurantName)

        cy.get('[data-test="saveNewRestaurantButton"]')
        .click()

        cy.contains(restaurantName)
    })
})