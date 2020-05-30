import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import{getTodo, editTodo} from '../../actions/todoAction'


class Edit extends Component {
    state={
        name:'',
        desc:''
    }
    componentWillReceiveProps(nextProps) {
        const { name, desc } = nextProps.todo;
        this.setState({
          name,
          desc
        });
      }
      componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getTodo(id);
      }

    onSubmit=(e)=> {
        e.preventDefault();

        const {name, desc}=this.state

    const{id}=this.props.match.params;
        
    const updTodo={
        id,
        name,
        desc
    }

    this.props.editTodo(updTodo)
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
                    <h1 data-testid="heading" style={{color:"#8B4513",textShadow:"1px 1px 2px black",  fontFamily:"cursive", margin:"50px 30%"}}>EDIT To-DO<i className="fas fa-pencil-alt"  style={{marginLeft:"20px", color:"#8B4513"}}></i></h1>
                </div>
                <div className="card shadow mb-2"  style={{width: "40%", fontFamily: "cursive", borderRadius: "20px", marginLeft:"22%"}}>
                    <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Pads</label>
                                <input type="text" 
                                name="name"
                                className="form-control" 
                                placeholder="Enter name for to-do"
                                value={name}
                                required
                                onChange={this.onChange}/>
                               </div>
                               <div className="form-group">
                                    <label htmlFor="description">Todos</label>
                                    <br/>
                                    <small>Add todo in each line</small>
                                    <textarea
                                    name="desc" 
                                    type="desc"
                                    className="form-control"  
                                    rows="3"
                                    value={desc}
                                    required
                                    onChange={this.onChange}
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-success">Edit</button>
                        </form>
                    </div>
                    <Right/>
                </div>
            </div>
        )
    }
}


Edit.propTypes = {
    todo: PropTypes.object.isRequired,
    getTodo: PropTypes.func.isRequired
  };

const mapStateToProps=(state)=>({
    todo: state.todo.todo
})

const Right = props => {
    return (
      <div
        className="right">
      </div>
    );
  };

export default connect(mapStateToProps,
    {getTodo, editTodo})(Edit);
