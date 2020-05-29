import React, { Component } from 'react'



 class Forget extends Component {
    state={
            password:'',
            password2:''
        }
        
        handleChange=(e)=>{
            this.setState({
                [e.target.id]: e.target.value
            })
        }
        handleSubmit=(e)=>{
            const { password, password2 } = this.state;
            e.preventDefault()
            console.log(this.state)
            if(password !== password2){
                alert('Password does not match !')
            }
            else{
            this.props.history.push('/');
            }
    }

    render() {
        return (
            <div className="container">
                <div data-testid="heading" className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 style={{color:"#8B4513",  fontFamily:"cursive", margin:"30px 30%"}}>Sign In<i className="fa fa-sign-in"  style={{marginLeft:"20px", color:"#8B4513"}}></i></h1>
                </div>
                <form onSubmit={this.handleSubmit} style={{width:"60%",fontFamily:"cursive", marginLeft:"10%"}}>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">New Password</label>
                    <input type="password" 
                    className="form-control" 
                     placeholder="Password"
                     id="password"
                     required
                     onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword">Confirm Password</label>
                    <input type="password" 
                    className="form-control" 
                     placeholder="confirm"
                     id="password2"
                     required
                     onChange={this.handleChange}/>
                </div>
                <button data-testid="button" type="submit" className="btn btn-warning mr-2 shadow"  
                >Reset</button>
                </form>
            </div>
        )
    }
}


export default Forget;