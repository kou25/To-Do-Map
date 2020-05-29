import React, { Component } from 'react'
import MapGL,{Source, Layer,NavigationControl} from 'react-map-gl';
import {heatmapLayer} from './map-style';
import {connect} from 'react-redux';
import Spinner from '../../containers/view/Spinner'
import { getMap,setLoading } from '../../actions/mapAction';
import PropTypes from 'prop-types';
import { Redirect} from 'react-router-dom'


const TOKEN = 'pk.eyJ1Ijoia291MjUiLCJhIjoiY2thZXdiMmM3MDYwMTJ6cDllenNsZmZ4aCJ9.ofnuP4sxtei-PmV5p8HSsg';

class Map extends Component {
  constructor(props){
    super(props)
    const token = localStorage.getItem("token")

    let loggedIn = true
    if(token==null){
        loggedIn = false
    }
  this.state={
    loggedIn,
    viewport: {
      latitude: 37.0479,
      longitude: 180,
      zoom: 1.7,
      width: '100%',
      height: 550,
      bearing: 0,
      pitch: 0
  }
  }
}
 
  componentDidMount(){
    this.props.getMap();
    this.props.setLoading();
  }
  render() {
    if(this.state.loggedIn === false){
            return <Redirect to="/"/>
        }
    const{viewport}=this.state;
    const{ data, loading}=this.props;
    return (
      <div className="container align-items-center">
        <h1  style={{color:"#8B4513",textShadow:"1px 1px 2px black",  fontFamily:"cursive", textAlign:"center",  marginTop:"50px"}}>
                        View Map<i className="fa fa-map-marker" aria-hidden="true" style={{marginLeft:"20px", color:"#8B4513"}}></i></h1>
          
          {loading ? <Spinner />:
        <div className="row  align-items-center " style={{height: '100%', marginTop: '50px'}}>
          
          <MapGL className="shadow"
          {...viewport}
          mapStyle="mapbox://styles/mapbox/dark-v10"
          onViewportChange={viewport => this.setState({ viewport })}
          mapboxApiAccessToken={TOKEN}
        >
          {data && (
            <Source type="geojson" data={data}>
              <Layer {...heatmapLayer} />
            </Source>
          )}
          <div className='nav' style={{position:"absolute", 
          top:'0',left:'0%', padding:'10px'}}>
          <NavigationControl onViewportChange={viewport => this.setState({viewport})}/>
          </div>
        </MapGL>
        
        </div>
  }
      </div>
    )
  }
}
const mapStateToProps=(state)=>({
  data: state.map.data,
  loading: state.map.loading
})

Map.propTypes = {
  data: PropTypes.any.isRequired,
  getMap: PropTypes.func.isRequired
};

export default connect(mapStateToProps, {getMap, setLoading})(Map)
