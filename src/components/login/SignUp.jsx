import React, { Component } from 'react'
import loginImg from "./signup.png";
import "./style.scss";

export default class SignUp extends Component {
    state={
            email:'',
            password:'',
            firstName:'',
            lastName:''
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
                <div className="base-container" style={{display:"flex",
            flexDirection:"column", alignItems:"center", marginTop:"90px" }}>
                <div className="card shadow" style={{width:"30rem", height: "40rem", borderRadius:"20px"}}>
                <div className="content">
                    <div className="image" style={{marginLeft:"25%", marginTop:"40px"}}>
                        <img src={loginImg} alt="logo"/>
                    </div>
                <form onSubmit={this.handleSubmit} style={{width:"60%",fontFamily:"cursive", marginLeft:"20%", marginTop:"20px"}}>
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
                    <label htmlFor="exampleInputName">Name</label>
                    <input type="name" 
                    className="form-control" 
                    placeholder="Enter name"
                    id="name"
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
                <button data-testid="button" type="submit" className="btn btn-success  shadow"  
                >Sign Up</button>
                </form>
                </div>
                <RightSide/>
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
          <div className="text">Sign Up</div>
        </div>
      </div>
    );
  };

