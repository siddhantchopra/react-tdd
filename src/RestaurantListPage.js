import React, { useState } from 'react'
import { NewRestaurantForm } from './NewRestaurantForm'
import { RestaurantList } from './RestaurantList'

export const RestaurantListPage = () => {
    const [restaurant, setRestaurant] = useState([])
    const [showRestaurantForm, setShowRestaurantform] = useState(false)

    const handleAddRestaurant=(newRestaurantName)=>{
        setRestaurant([...restaurant, newRestaurantName])
        setShowRestaurantform(false)
    }
    return (
        <div>
            <button data-test="addRestaurantButton" onClick={()=> setShowRestaurantform(true)}>
                Add Restaurant
            </button>
            {
                showRestaurantForm ?    <NewRestaurantForm onSave={handleAddRestaurant}/>: null
            }
        
            <RestaurantList restaurant={restaurant}/>
        </div>
    )
}
