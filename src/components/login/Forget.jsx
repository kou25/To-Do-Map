import React, { Component } from 'react'
import loginImg from "./forgot.png";
import "./style.scss";


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
                <div className="base-container" style={{display:"flex",
            flexDirection:"column", alignItems:"center", marginTop:"100px" }}>
                <div className="card shadow" style={{width:"30rem", height: "35rem", borderRadius:"20px"}}>
                <div className="content">
                    <div className="image" style={{marginLeft:"25%", marginTop:"40px"}}>
                        <img src={loginImg} alt="logo"/>
                    </div>
                <form onSubmit={this.handleSubmit} style={{width:"60%",fontFamily:"cursive", marginLeft:"10%"}}>
                <div className="form-group mt-3 mb-4">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                    className="form-control" 
                     placeholder="Password"
                     id="password"
                     onChange={this.handleChange}
                     required/>
                </div>
                <div className="form-group mt-2 ">
                    <label htmlFor="exampleInputPassword"> Confirm Password</label>
                    <input type="password" 
                    className="form-control" 
                     placeholder="confirm"
                     id="password2"
                     onChange={this.handleChange}
                     required/>
                 <button data-testid="button" type="submit" className="btn btn-danger shadow mt-4"
                >Reset </button>
                </div>
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
          <div className="text" style={{marginLeft:"86%"}}>Forget Passwrd</div>
        </div>
      </div>
    );
  };


export default Forget;