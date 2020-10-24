import React, {useState } from 'react'
import {Button, TextInput} from 'react-materialize'
export const NewRestaurantForm = (props) => {
    const [text, setText] = useState('')

    const handleSave = () => {
        props.onSave(text)
    }

    return (
        <div>
            <TextInput label="Restaurant Name" 
            id="TextInput-4" data-test="newRestaurantName" onChange={(e) => setText(e.target.value)} value={text} />
            <Button
                onClick={handleSave}
                data-test="saveNewRestaurantButton">
                Save
            </Button>
        </div>
    )
}
