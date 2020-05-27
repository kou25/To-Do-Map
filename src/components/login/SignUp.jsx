import React, { Component } from 'react'


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
        this.props.history.push('/signin');
    }

    render() {
        return (
            <div className="container">
                <div data-testid="heading" className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 style={{color:"#8B4513",  fontFamily:"cursive", margin:"30px 30%"}}>Sign Up<i className="fa fa-user-plus" aria-hidden="true" style={{marginLeft:"20px", color:"#8B4513"}}></i></h1>
                </div>
                <form onSubmit={this.handleSubmit} style={{width:"60%", marginLeft:"10%", fontFamily:"cursive"}}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" 
                    className="form-control" 
                    placeholder="Enter email"
                    id="email"
                    required
                    onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" 
                    className="form-control" 
                     placeholder="first name"
                     id="firstName"
                     required
                     onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" 
                    className="form-control" 
                     placeholder="last name"
                     id="lastName"
                     required
                     onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                    className="form-control" 
                     placeholder="Password"
                     id="password"
                     required
                     onChange={this.handleChange}/>
                </div>
                <button data-testid="button" type="submit" className="btn btn-warning shadow mb-2"
                >Sign Up</button>
                </form>
            </div>
        )
    }
}
