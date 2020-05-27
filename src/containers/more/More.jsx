import React, { Component } from 'react'
import {connect} from 'react-redux'
import{getTodo} from '../../actions/todoAction'
import { Link } from 'react-router-dom';


class More extends Component {
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
    render() {
        const{name,desc}=this.state
        return (
                <div className="container">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 style={{color:"#8B4513",textShadow:"1px 1px 2px black",  fontFamily:"cursive", margin:"50px 30%"}}>More To Dos<i className="fa fa-comments" aria-hidden="true" style={{marginLeft:"20px", color:"#8B4513"}}></i></h1>
                </div>
                <div className="card shadow" style={{width: "25rem",  fontFamily:"cursive", fontWeight:"bold", marginLeft:"27%", borderRadius:"25px"}}>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <div className="form-group" style={{borderBox:"none"}}>
                                    <textarea
                                    name="desc" 
                                    type="desc"
                                    className="form-control"  
                                    rows="3"
                                    value={desc}
                                    disabled
                                    style={{border:"none", fontWeight:"bold", height:"8rem"}}
                                    ></textarea>
                                    </div>
                        <Link to ={'/view'}>
                        <button className="btn btn-warning">Back</button>
                        </Link>
                    </div>     
            </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    todo: state.todo.todo
})

export default connect(mapStateToProps,
    {getTodo})(More);
