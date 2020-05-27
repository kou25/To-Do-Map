import React, { Component } from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2'
import Clock from 'react-live-clock';
import {Link} from 'react-router-dom'


class Dashboard extends Component {
   state={
            chartData:{
                labels: ['Indian Ocean', 'Kashmir', 'Bihar',
                 'Gujrat', 'Kangra', 'Assam'],
                 datasets:[
                    {
                      label:'Deaths',
                      data:[
                        283106,
                        130000,
                        35000,
                        25000,
                        19000,
                        10000
                      ],
                      backgroundColor:[
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(255, 99, 132, 0.6)'
                      ]
            }
        ]
        } 
    }


    render() {
        return (

            <div className="container-fluid">
                <div data-testid="heading" className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 style={{color:"#8B4513",  fontFamily:"cursive", margin:"50px 40%", textShadow:"1px 1px 2px black"}}>Dashboard<i className="fa fa-line-chart" aria-hidden="true" style={{marginLeft:"20px", color:"#8B4513"}}></i></h1>
                </div>

                <div className="row">
                   <div data-testid="bar" className="card shadow mb-2 " style={{marginLeft:"10%", borderRadius:"20px"}}>
                   <div className="card-header py-3  flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">Bar chart</h6>
                  </div>
                  <div className="card-body" >
                      <div className="chart-area" style={{height:"250px", width:"400px"}}>
                      <Bar 
                        data={this.state.chartData}
                        options={{
                            title:{
                              display:true,
                              text:'Most powerful Earthquake(India)',
                              fontSize:15
                            },
                            legend:{
                              display:true,
                              position:"bottom"
                            }
                          }}
                        />
                      </div>
                </div>
                </div>


                <div data-testid="line" className="card shadow mb-2" style={{marginLeft:"30px", borderRadius:"20px"}}>
                   <div className="card-header  py-3  flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">Line chart</h6>
                  </div>
                  <div className="card-body" >
                      <div className="chart-area" style={{height:"250px", width:"400px"}}>
                      <Line 
                        data={this.state.chartData}
                        options={{
                            title:{
                              display:true,
                              text:'Most powerful Earthquake(India)',
                              fontSize:15
                            },
                            legend:{
                              display:true,
                              position:'bottom'
                            }
                          }}
                        />
                      </div>

                  </div>
                   </div>



                <div data-testid="pie" className="card shadow mb-2 " style={{marginLeft:"30px", borderRadius:"20px"}}>
                   <div className="card-header  py-3 flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">Pie chart</h6>
                  </div>
                  <div className="card-body" >
                      <div className="chart-area" style={{height:"250px", width:"400px"}}>
                      <Pie 
                        data={this.state.chartData}
                        options={{
                            title:{
                              display:true,
                              text:'Most powerful Earthquake(India)',
                              fontSize:15
                            },
                            legend:{
                              display:true,
                              position:'bottom'
                            }
                          }}
                        />
                      </div>
                    </div>
                   </div>
                </div>

              <div className="row" style={{marginTop:"20px"}}>
            <div className="col-xl-3 col-md-6 mb-4" style={{marginLeft: "25%"}}>
            <Link to='/view' style={{textDecoration: "none"}}>
              <div className="card border shadow h-100 py-2" style={{borderRadius:"20px"}}>
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div id="divhover" className="text-xs font-weight-bold text-primary  mb-1" ><h5>View To-Do</h5></div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-eye fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
            </div>

            <div className="col-xl-3 col-md-6 mb-4">
            <Link to='/map' style={{textDecoration: "none"}} >
              <div className="card border shadow h-100 py-2" style={{borderRadius:"20px"}}>
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div id="divhover" className="text-xs font-weight-bold text-primary  mb-1"><h5>View Map</h5></div>
                    </div>
                    <div className="col-auto">
                      <i className="fa fa-map-marker fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
            </div>
            </div>

           


                <div  style={{marginLeft:"72%"}}> 
                <h3 style={{color:"#8B4513",  fontFamily:"cursive", marginTop:"10px", textShadow:"1px 1px 2px black"}}>
                <i  className="fas fa-clock" style={{color:"#8B4513"}}></i>
                    The time is: 
                {' '}<Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/kolkata'}/>..
                </h3>
                </div>
          </div>
        )
    }
}

export default Dashboard;
