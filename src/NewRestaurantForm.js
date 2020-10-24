import React, {useState } from 'react'
import {Button, TextInput, Row} from 'react-materialize'
export const NewRestaurantForm = (props) => {
    const [text, setText] = useState('')

    const handleSave = () => {
        props.onSave(text)
    }

    return (
        <Row>
            <TextInput label="Restaurant Name"
            type="text" 
            s={12}
            m={8}
            l={10}
            id="TextInput-4" data-test="newRestaurantName" onChange={(e) => setText(e.target.value)} value={text} />
            <Button
            s={12}
            m={4}
            l={2}
                onClick={handleSave}
                data-test="saveNewRestaurantButton">
                Save
            </Button>
        </Row>
    )
}
