import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {deleteTodo} from '../../actions/todoAction'
import { Link } from 'react-router-dom';

class Todo extends Component {
  onDeleteClick=id=>{
    this.props.deleteTodo(id)
  }
    render() {
      const{id, name}=this.props.todo
        return (
            <tbody >
                <tr>
                  <td style={{fontSize: "15pt",paddingLeft:"10%"}}> {name}
                  </td>
                  <td>
                  <Link to={`todo/edit/${id}`}>
                    <span
                      className="fas fa-pencil-alt"
                      style={{
                        color: "black",
                        fontSize: "15pt",
                        marginRight: "10px"
                      }}
                    />
                    </Link>
                    
                    <span
                      className="fas fa-check-circle"
                      style={{ color: "black", fontSize: "15pt", cursor:"pointer"}}
                      onClick={this.onDeleteClick.bind(this,id)}
                    />
                  </td>
                  
                  <td><Link to={`more/${id}`}><span className="far fa-arrow-alt-circle-right" 
                  style={{color:"black", marginLeft:"35%", fontSize: "20pt", cursor:"pointer"}}></span>
                </Link>
                </td>
                </tr>
            </tbody>
        )
    }
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

export default connect(null, {deleteTodo})(Todo)
