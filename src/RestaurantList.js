import React from 'react'

export const RestaurantList = ({restaurant}) => {
    return (
        <div>
            <ul>
    {restaurant.map(data=> <li key={data}>{data}</li>)}
            </ul>
        </div>
    )
}
