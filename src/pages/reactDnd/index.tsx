import React, {useState} from "react";
import {DndCheckBoxGroup} from "./compontents/DndCheckbox";

const DndCheckboxGroupExample = () => {
    const [options, setOptions] = useState(
        [
            {label: 'apple', value: 'apple'},
            {label: 'peal', value: 'peal'},
            {label: 'orange', value: 'orange'},
            {label: 'pineapple', value: 'pineapple'},
        ]
    )

    let initialState = ['apple'];
    const [value, setValue] = useState(initialState)

    return <div style={{padding: 16}}>
       <DndCheckBoxGroup options={options} setOptions={setOptions} value={value} onChange={setValue}/>
    </div>
}

export default  DndCheckboxGroupExample