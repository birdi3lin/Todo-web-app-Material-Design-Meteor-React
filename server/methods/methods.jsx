Meteor.methods({
  signUp(username, password){
    Accounts.createUser({
      username: username,
      password: password
    });
  },

  addTodo(todo){
    Todos.insert({
      todo: todo,
      addedAt: new Date(),
      owner: Meteor.userId()
    });
  },

  removeTodo(id){
    Todos.remove(id);
  }
});
