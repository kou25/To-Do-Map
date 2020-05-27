import React, { Component } from 'react'
import { Link } from 'react-router-dom';


 class Signin extends Component {
    state={
            email:'',
            password:''
        }
        handleChange=(e)=>{
            this.setState({
                [e.target.id]: e.target.value
            })
        }
        handleSubmit=(e)=>{
            e.preventDefault()
            console.log(this.state)
            this.props.history.push('/');
    }

    render() {
        return (
            <div className="container">
                <div data-testid="heading" className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 style={{color:"#8B4513",  fontFamily:"cursive", margin:"30px 30%"}}>Sign In<i className="fa fa-sign-in"  style={{marginLeft:"20px", color:"#8B4513"}}></i></h1>
                </div>
                <form onSubmit={this.handleSubmit} style={{width:"60%",fontFamily:"cursive", marginLeft:"10%"}}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" 
                    className="form-control" 
                    placeholder="Enter email"
                    id="email"
                    onChange={this.handleChange}
                    required/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                    className="form-control" 
                     placeholder="Password"
                     id="password"
                     onChange={this.handleChange}
                     required/>
                </div>
                
                <button data-testid="button" type="submit" className="btn btn-warning mr-2 shadow"  
                >Sign In</button>
                <Link to ={'/signup'}>
                <button data-testid="button1" type="submit" className="btn btn-primary mr-2 shadow"
                >Sign Up</button></Link>
                <Link to ={'/forget'}>
                <button data-testid="button2" type="submit" className="btn btn-danger shadow"
                >Forget Password</button></Link>
                </form>
            </div>
        )
    }
}


export default Signin;