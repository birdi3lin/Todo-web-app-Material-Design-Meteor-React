import React from 'react';
import ReactDOM from 'react-dom';


export default class Homepage extends React.Component{
  render(){

    var pad0 = {
      padding: 0
    };

    var crimsonC = {
      backgroundColor: '#ED143D',
      padding: '.3%'
    };

    var btn = {
      width: '100%',
      backgroundColor: 'rgb(0, 93, 255)'

    };

    return(
      <div className="row">
        <header style={pad0} className="col s12">
          <nav style={crimsonC} className="nav-wrapper">
            <a href="#" className="brand-logo">Todo</a>
          </nav>
        </header>
        <section className="col s12 card">
          <div className="card-content">
            <h5 className="center">SignUp or SignIn to continue</h5>

            <div className="row card">
              <div className="col s6 left card-content">
                <a href="/signup" style={btn} className=" center btn btn-large">SignUp</a>
              </div>
              <div className="col s6 right card-content">
                <a href="/signin" style={btn} className=" center btn btn-large">SignIn</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
