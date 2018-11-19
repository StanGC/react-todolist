import React, { Component } from 'react';
import Title from './components/Title';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <CreateTodo />
        <TodoList />
      </div>
    );
  }
}

export default App;
