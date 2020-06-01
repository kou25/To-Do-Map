import React from 'react'
import note from './note.png'
import ToggleButton from'../Sidebar/ToggleButton'

 const Navbar = props => (
        <header className="nav-head">
            <nav className="navigation">
            <div><ToggleButton click={props.clickHandler}/></div>
            <div className="nav-logos">
                <a data-testid="img" href='/landing' style={{textShadow:"1px 1px 2px black"}}>
                    <img  src={note} alt="logo" style={{height:"70px"}}/>
                    TO DO
                </a>
            </div>
            <div className="spacer"/>
            <div className="nav-logos">
            <a href='./docs' style={{ fontSize:"30px",textShadow:"1px 1px 2px black"}}>Docs</a>
            </div>
            </nav>
        </header>
)


export default Navbar;