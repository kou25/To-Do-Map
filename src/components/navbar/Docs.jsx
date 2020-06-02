import React, { Component } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import docpdf from './Docs.pdf'
 

export default class Docs extends Component {
  constructor(props){
    super(props);
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  this.state = {
    numPages: null,
    pageNumber: 1,
  }
}

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }

  goToPrevPage = () =>{
  if(this.state.pageNumber>1){
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }))}};
  goToNextPage = () =>{
  if(this.state.pageNumber<10){
    this.setState(state => ({ pageNumber: state.pageNumber + 1 }))}};



  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div className="container" style={{justifyContent:"center"}}>
         <nav style={{marginTop:"25px", marginLeft:"15%", display:"flex"}}>
          <button className="btn btn-danger shadow" onClick={this.goToPrevPage}>Prev</button>
          <button className="btn btn-success shadow ml-2 mr-5"onClick={this.goToNextPage}>Next</button>
          <span style={{marginLeft:"50%"}}><p style={{fontSize:"20px",fontWeight:"bold", paddingTop:"10px"}}>Page <span style={{color:"red"}}>{pageNumber}</span> of {numPages}</p></span>
        </nav>
        <div className="row" style={{ width: "800",paddingTop:"10px", justifyContent:"center" }}>
        <div className="card shadow p-5" style={{marginBottom:"100px"}} >
        <Document 
          file={docpdf}
          onLoadSuccess={this.onDocumentLoad}
        >
          <Page pageNumber={pageNumber} width={800}  />
        </Document>
        </div>
        </div>
      </div>
    );
  }
}