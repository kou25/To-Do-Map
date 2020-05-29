import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'


export default class Landing extends Component {
    constructor(props){
        super(props)
        const token = localStorage.getItem("token")

        let loggedIn = true
        if(token==null){
            loggedIn = false
        }

        this.state={
            loggedIn
        }
    }
    render() {
        if(this.state.loggedIn === false){
            return <Redirect to="/"/>
        }
        return (
            <div className="container-fluid" id="img" style={{fontFamily:"cursive"}}>
            <Link to='/add' >
       <button data-testid="button" type="submit" style={{ 
       marginTop:"12%", marginLeft:"41%"}}
       className="btn btn-warning shadow">
       <span style={{color:"white", textDecoration:"none",textShadow:"1px 1px 2px black"}}>Get Started</span></button></Link>
       <Link to="/logout"><button style={{marginTop:"12%",marginLeft:"10px", textShadow:"1px 1px 2px black"}} type="button" className="btn btn-danger shadow" >Logout</button></Link>
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
}

