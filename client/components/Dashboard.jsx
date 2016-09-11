import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Todolist from './Todolist.jsx';

export default class Dashboard extends TrackerReact(React.Component){

  todos(){
    return Todos.find().fetch();
  }

  constructor(){
    super();

    this.state = {
      subscription: {
        todos: Meteor.subscribe("todolist")
      }
    }
  }

  addtodo(event){
    event.preventDefault();

    var todo = this.refs.todo.value.trim();

    Meteor.call('addTodo', todo, ()=>{
      this.refs.todo.value = "";
    });
  }

  logout(event){
    event.preventDefault();

    Meteor.logout();

    FlowRouter.go('/');
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
      backgroundColor: 'rgb(0, 93, 255)'

    };

    return(
      <div className="row">
        <header style={pad0} className="col s12">
          <nav style={crimsonC} className="nav-wrapper">
            <a href="#" className="brand-logo">Todo</a>
            <button className="logoutbtn btn btn-large right red" onClick={this.logout.bind(this)}>Logout</button>
          </nav>
        </header>
        <section className="col s12 card">
          <div className="card-content">
            <form className="input-field row" onSubmit={this.addtodo.bind(this)}>
              <input
                ref="todo"
                placeholder="Add a todo"
                className="col s10"
                />
              <button style={btn} type="submit" className="btn btn-large col s2">Add</button>
            </form>
          </div>
        </section>

        <section className="col s12 card">
          <div className="card-content">
            <ul>
              {this.todos().map((todo)=>{
                return <Todolist key={todo._id} todo={todo}/>
              })}
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
