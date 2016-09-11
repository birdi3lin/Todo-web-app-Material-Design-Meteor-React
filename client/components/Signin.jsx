import React from 'react';
import ReactDOM from 'react-dom';

export default class Signin extends React.Component{

  signin(event){
    event.preventDefault();

    var username = this.refs.username.value.trim();
    var password = this.refs.password.value.trim();

    console.log(username);
    console.log(password);

    Meteor.loginWithPassword(username, password, ()=> {
      this.refs.username.value = "";
      this.refs.password.value = "";

      FlowRouter.go('dashboard');
    });

  }

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
              <a href="/" className="brand-logo">Todo</a>
            </nav>
        </header>
        <section className="col s12 card">
          <div className="card-content">
            <h3 className="center">SignIn to continue</h3>
            <form className="input-field" onSubmit={this.signin.bind(this)}>
              <input
                type="text"
                ref="username"
                placeholder="Username"
                />
              <input
                type="password"
                ref="password"
                placeholder="password"
                />
              <button style={btn} type="submit" className="btn btn-large">SignIn</button>
            </form>
          </div>
        </section>
      </div>
    )
  }
}
