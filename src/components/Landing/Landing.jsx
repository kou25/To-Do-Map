import React from 'react'
import {Link} from 'react-router-dom'


function Landing() {
    return (
        <div className="container-fluid" id="img" style={{fontFamily:"cursive"}}>
             <Link to='/add' >
        <button data-testid="button" type="submit" style={{ 
        marginTop:"12%", marginLeft:"45%"}}
        className="btn btn-warning shadow">
        <span style={{color:"white", textDecoration:"none",textShadow:"1px 1px 2px black"}}>Get Started</span></button></Link>
        <h1 data-testid="heading" style={{color:"#8B4513", 
        fontFamily:"cursive",
         fontWeight:"bold",
         paddingTop:"45vh",
         paddingLeft:"50px",
         fontSize:"3rem",
         textShadow:"1px 1px 2px black, 0 0 25px white, 0 0 5px white"}}>
             Create <span style={{color:"orange"}}>your own</span> To-Dos...</h1>
        </div>
    )
}

export default Landing
