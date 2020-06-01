import React, { Component } from 'react';
import docpdf from './Docs.pdf'
 
export default class Docs extends Component {
 
  render() {
    return (
      <div className="container mt-5 " style={{marginLeft:'30%'}}> 
       <iframe style={{width:"58%", height:"700px"}} src={docpdf} title="Docs"
        />
      </div>
    );
  }
}
