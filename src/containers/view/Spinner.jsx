import React from 'react'
import spinner from './spinner.gif'

export default function Spinner() {
    return (
        <div>
           <img
           src={spinner}
           alt="Loadng..."
           style={{width: '200px', margin:'auto', display:'block', justifyContent: 'center'}}
           ></img> 
        </div>
    )
}
