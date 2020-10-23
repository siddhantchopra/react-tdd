import React, {useState } from 'react'

export const NewRestaurantForm = (props) => {
    const [text, setText] = useState('')


    const handleSave = () => {
        props.onSave(text)
    }
    return (
        <div>
            <input type="text" data-test="newRestaurantName" onChange={(e) => setText(e.target.value)} value={text} />
            <button
                onClick={handleSave}
                data-test="saveNewRestaurantButton">
                Save
            </button>
        </div>
    )
}
