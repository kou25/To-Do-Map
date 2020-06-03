import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom'
import loginImg from "./login.svg";
import "./style.scss";


 class Signin extends Component {
     userData;
    constructor(props){
        super(props)
        const token = localStorage.getItem("token")

        
        let loggedIn = true
        if(token == null){
            loggedIn = false
        
    }
    this.state={
            email:'',
            password:'',
            loggedIn,
            
        }
    }
    
    componentDidMount(){
        this.userData = JSON.parse(localStorage.getItem('user'))
        }

    handleChange=(e)=>{
            this.setState({
                [e.target.id]: e.target.value
            })
        }
    handleSubmit=(e)=>{
            e.preventDefault()
            console.log(this.state)
            const{email, password} = this.state
            
            //login
            if( email==="koustav.manna98@gmail.com" && password==="1234" ){
                localStorage.setItem("token","ajdkkabkdj")
                this.setState({
                    loggedIn: true
                })  
            }

            
            //for other user, just not to get an error
            
                else if(this.userData!==null){
                    if(email=== this.userData.email && password===this.userData.password ){
                        localStorage.setItem("token","ajdkkabkdj")
                        this.setState({
                            loggedIn: true
                        })  
        
                    }
                    else{
                        alert("Wrong username or password!")
                    }
                }

                
                else{
                    alert("Wrong username or password!")
                }
                
                   
    }

    


    render() {
        if(this.state.loggedIn){
            return <Redirect to="/landing"/>
        }
        
        return (
            <div className="container">
                <div className="base-container" style={{display:"flex",
            flexDirection:"column", alignItems:"center", marginTop:"100px" }}>
                <div className="card shadow" style={{width:"30rem", height: "35rem", borderRadius:"20px"}}>
                <div className="content">
                    <div className="image" style={{marginLeft:"25%"}}>
                        <img src={loginImg} alt="logo"/>
                    </div>
                <form onSubmit={this.handleSubmit} style={{width:"60%",fontFamily:"cursive", marginLeft:"20%"}}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" 
                    className="form-control" 
                    placeholder="Enter email"
                    id="email"
                    onChange={this.handleChange}
                    required/>
                </div>
                <div className="form-group mt-4 mb-5">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                    className="form-control" 
                     placeholder="Password"
                     id="password"
                     onChange={this.handleChange}
                     required/>
                </div>
                <button data-testid="button" type="submit" className="btn btn-success mr-2 ml-3 shadow"  
                >Sign In</button>
                <Link to ={'/signup'}>
                <button data-testid="button1" type="submit" className="btn btn-primary mr-2 shadow"
                >Sign Up</button></Link>
                <Link to ={'/forget'}>
                <button data-testid="button2" type="submit" className="btn btn-danger shadow"
                >Forget </button></Link>
                </form>
                </div>
                <RightSide/>
                <small style={{marginLeft:'27%', marginTop:"20px"}}>If you don't have an account first <b>signUp</b></small>
            </div>
            </div>
            </div>
        )
    }
}

const RightSide = props => {
    return (
      <div
        className="right-side">
        <div className="inner-container">
          <div className="text" style={{marginLeft:"87%"}}>Login</div>
        </div>
      </div>
    );
  };


export default Signin;