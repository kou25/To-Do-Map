import React from 'react'
import './sidebar.css'
import profile from './profile.png'
import { Link } from 'react-router-dom'

const Sidebar =props=> {
    let barClasses='sidebar';
    if(props.show){
        barClasses ='sidebar open'
    }
    return (
            <nav className={barClasses}>
                <div className="pro">
                <Link  to='/signin' >
                    <img src={profile} alt="logo" style={{height:"70px"}}/>
                    <span style={{marginLeft:"40px"}}>Welcome</span>
                </Link>
                </div>
                <hr style={{backgroundColor:"orange", height:"1.2px", margin:"3px 5px"}}/>
                <ul>
                    <li data-testid="list"><i className="fa fa-line-chart" aria-hidden="true"></i><Link to='/dashboard'>Dashboard</Link><i className="fa fa-arrow-circle-right" aria-hidden="true" style={{marginLeft:"120px"}}></i></li>
                    <li data-testid="list1"><i className="fa fa-plus-circle" aria-hidden="true"></i><Link to='/add'>Add To-DO</Link><i className="fa fa-arrow-circle-right" aria-hidden="true" style={{marginLeft:"110px"}}></i></li>
                    <li data-testid="list2"><i className="fa fa-eye" aria-hidden="true"></i><Link to='/view'>View To-DO</Link><i className="fa fa-arrow-circle-right" aria-hidden="true" style={{marginLeft:"103px"}}></i></li>
                    <li data-testid="list3"><i className="fa fa-map-marker" aria-hidden="true"></i><Link to='/map'>View Map</Link><i className="fa fa-arrow-circle-right" aria-hidden="true"style={{marginLeft:"132px"}}></i></li>
                </ul>
            </nav>
    )
}

export default Sidebar
