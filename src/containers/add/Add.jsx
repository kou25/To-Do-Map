import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {addTodo} from '../../actions/todoAction'


class Add extends Component {
    state={
        name:'',
        desc:''
    }
    onSubmit=(e)=> {
        e.preventDefault();

        const {name, desc}=this.state
        
    const newTodo={
        name,
        desc
    }

    this.props.addTodo(newTodo)
    // Clear State
    this.setState({
      name: '',
      desc:''
    });

    this.props.history.push('/view');
    }
    onChange=e=>this.setState({[e.target.name]: e.target.value})
    render() {
        const{name,desc}=this.state
        return (
            <div className="container">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 data-testid="heading" style={{color:"#8B4513",textShadow:"1px 1px 2px black",  fontFamily:"cursive", margin:"50px 30%"}}>
                        Add To-DO<i className="fa fa-plus-circle" aria-hidden="true" style={{marginLeft:"20px", color:"#8B4513"}}></i></h1>
                </div>
                <div className="card shadow mb-2"  style={{width: "40%", fontFamily: "cursive", borderRadius: "20px", marginLeft:"22%"}}>
                    <div className="card-body">
                    <form  onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Pads</label>
                                <input type="text" 
                                data-testid="name"
                                name="name"
                                className="form-control" 
                                placeholder="Enter name for to-do"
                                value={name}
                                required
                                onChange={this.onChange}/>
                               </div>
                               <div className="form-group">
                                    <label htmlFor="description">To Dos</label>
                                    <br/>
                                    <small>Add todo in each line (press enter for new line)</small>
                                    <textarea
                                    name="desc" 
                                    type="desc"
                                    data-testid="desc"
                                    className="form-control"  
                                    rows="3"
                                    value={desc}
                                    required
                                    onChange={this.onChange}
                                    placeholder="1. todo1"
                                    ></textarea>
                                </div>
                                <button type="submit" data-testid="button" className="btn btn-success">Add</button>
                        </form>
                    </div>
                    <Right/>
                </div>
            </div>
        )
    }
}

Add.propTypes = {
    addTodo: PropTypes.func.isRequired
  };



  const Right = props => {
    return (
      <div
        className="right">
      </div>
    );
  };

export default connect(null, { addTodo})(Add);
