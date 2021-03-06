import React from 'react'
import './ToggleButton.css'

const ToggleButton = props =>(
        <button className="button" onClick={props.click}>
            <div className="line"/>
            <div className="line"/>
            <div className="line"/>
        </button>
)

export default ToggleButton
