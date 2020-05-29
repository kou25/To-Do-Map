import React, { Component } from 'react'
import Todo from './Todo';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import Spinner from './Spinner'
import { Redirect} from 'react-router-dom'

import { getTodos,setLoading } from '../../actions/todoAction'; 

 class View extends Component {
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

  componentDidMount(){
      this.props.getTodos();
      this.props.setLoading();
  }


    render() {
      if(this.state.loggedIn === false){
        return <Redirect to="/"/>
    }
        const{ todos, loading }=this.props; 
        return (
            <div className="container">
                 <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 data-testid="heading" style={{color:"#8B4513",textShadow:"1px 1px 2px black",  fontFamily:"cursive", marginLeft:"35%", marginTop:"50px"}}>
                        View To-DO<i className="fa fa-eye" aria-hidden="true" style={{marginLeft:"20px", color:"#8B4513"}}></i></h1>
                </div>
                {loading ? <Spinner/>:
                <table
            className="table table-hover  shadow" 
            style={{width: "55%",fontFamily:"cursive",
            borderRadius:"15px", marginLeft:"25%"}}
          >
                <thead style={{backgroundColor:"orange"}}>
              <tr >
                <th style={{paddingLeft:"10%"}} scope="col" >Todos</th>
                <th style={{marginLeft:"9%"}} scope="col">Actions</th>
                <th style={{paddingLeft:"10%"}} scope="col">View more</th>
              </tr>
            </thead>
               {todos.map(todo=>(
                   <Todo 
                   key={todo.id}
                   todo={todo} 
                   />
               ))} 
               </table>
    }
            </div>
        )
    }
}

View.propTypes = {
    todos: PropTypes.array.isRequired,
    getTodos: PropTypes.func.isRequired
  };
 
const mapStateToProps=(state)=>({
    todos: state.todo.todos,
    loading: state.todo.loading
})

export default connect(mapStateToProps, {getTodos, setLoading})(View);