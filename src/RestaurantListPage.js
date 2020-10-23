import React, { useState } from 'react'
import { NewRestaurantForm } from './NewRestaurantForm'
import { RestaurantList } from './RestaurantList'

export const RestaurantListPage = () => {
    const [restaurant, setRestaurant] = useState([])

    const handleAddRestaurant=(newRestaurantName)=>{
        setRestaurant([...restaurant, newRestaurantName])
    }
    return (
        <div>
            <button data-test="addRestaurantButton">
                Add Restaurant
            </button>
            <NewRestaurantForm onSave={handleAddRestaurant}/>
            <RestaurantList restaurant={restaurant}/>
        </div>
    )
}
