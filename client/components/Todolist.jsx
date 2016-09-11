import React from 'react';
import ReactDOM from 'react-dom';

export default class Todolist extends React.Component{

  removetodo(){
    Meteor.call('removeTodo', this.props.todo._id);
  }

  render(){
    return(
      <div className="row card">
        <li className="col s10 card-content">
          {this.props.todo.todo}
        </li>
        <button className="red btn btn-large col s2" onClick={this.removetodo.bind(this)}>Remove</button>
      </div>
    )
  }
}
