import React, { useState } from 'react'
import { Button, Col, Row } from 'react-materialize'
import { NewRestaurantForm } from './NewRestaurantForm'
import { RestaurantList } from './RestaurantList'

export const RestaurantListPage = () => {
    const [restaurant, setRestaurant] = useState([])
    const [showRestaurantForm, setShowRestaurantform] = useState(false)

    const handleAddRestaurant = (newRestaurantName) => {
        setRestaurant([...restaurant, newRestaurantName])
        setShowRestaurantform(false)
    }
    return (
        <div>
            <Row>
                <Button data-test="addRestaurantButton" onClick={() => setShowRestaurantform(true)}>
                    Add Restaurant
            </Button>
            </Row>
            <Row>

                {
                    showRestaurantForm ? <NewRestaurantForm onSave={handleAddRestaurant} /> : null
                }
            </Row>
            <Row>

                <RestaurantList restaurant={restaurant} />
            </Row>
        </div>
    )
}
