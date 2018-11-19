import React, { Component } from 'react';
import Title from './components/Title';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';

class App extends Component {

  constructor() {
    super();
    let todos = ['買雞蛋', '繳卡費', '去運動', '看本書'];
    this.state = {
      todos: todos,
    }
  }

  render() {
    return (
      <div>
        <Title todos={this.state.todos}/>
        <CreateTodo todos={this.state.todos}/>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
