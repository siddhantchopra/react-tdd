import React from 'react'
import {Collection, CollectionItem} from 'react-materialize'
export const RestaurantList = ({restaurant}) => {
    return (
        <div>
            <Collection>
    {restaurant.map(data=> <CollectionItem key={data}>{data}</CollectionItem>)}
            </Collection>
        </div>
    )
}
