import React, { useState } from 'react'
import { NewRestaurantForm } from './NewRestaurantForm'
import { RestaurantList } from './RestaurantList'
import {Button} from 'react-materialize'

export const RestaurantListPage = () => {
    const [restaurant, setRestaurant] = useState([])
    const [showRestaurantForm, setShowRestaurantform] = useState(false)

    const handleAddRestaurant=(newRestaurantName)=>{
        setRestaurant([...restaurant, newRestaurantName])
        setShowRestaurantform(false)
    }
    return (
        <div>
            <Button data-test="addRestaurantButton" onClick={()=> setShowRestaurantform(true)}>
                Add Restaurant
            </Button>
            {
                showRestaurantForm ?    <NewRestaurantForm onSave={handleAddRestaurant}/>: null
            }
        
            <RestaurantList restaurant={restaurant}/>
        </div>
    )
}
