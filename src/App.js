import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux'
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Backdrop from './components/Sidebar/Backdrop';
import Dashboard from './components/dashboard/Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Add from './containers/add/Add';
import View from './containers/view/View';
import store from './store/store'
import Landing from './components/Landing/Landing';
import Edit from './containers/edit/Edit';
import More from './containers/more/More';
import Signin from './components/login/Signin';
import SignUp from './components/login/SignUp';
import Forget from './components/login/Forget';
import Map from './components/map/Map'



class App extends Component {
  state={
    sidebarOpen: false,
  };

  toggleClickHandler=()=>{
    this.setState((prevState)=>{
      return{sidebarOpen: !prevState.sidebarOpen};
    });
  }
  backdropClickHadler=()=>{
    this.setState({sidebarOpen: false})
  }

  

  render(){
    let backdrop;

    if (this.state.sidebarOpen){
      backdrop=<Backdrop click={this.backdropClickHadler}/>
    }
  return (
    <Provider store={store}>
    <Router>
    <div style={{height: '100%'}}>
      <Navbar clickHandler={this.toggleClickHandler}/>
      <Sidebar show={this.state.sidebarOpen}/>
      {backdrop}
      <main style={{marginTop: '2px'}}>
        <Switch>
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/forget" component={Forget} />
        <Route exact path="/" component={Landing} />
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/add" component={Add} />
        <Route exact path="/view" component={View} />
        <Route exact path="/map" component={Map} />
        <Route exact path="/todo/edit/:id" component={Edit} />
        <Route exact path="/more/:id" component={More} />
        </Switch>
      </main>
    </div>
    </Router>
    </Provider>
  );
}
}

export default App;
