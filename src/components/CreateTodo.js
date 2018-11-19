import React, { Component } from 'react';
import TodoInput from './TodoInput';
import CreateTodoButton from './CreateTodoButton';

class CreateTodo extends Component {
  render() {
    return (
      <div>
        <TodoInput />
        <CreateTodoButton />
      </div>
    );
  }
}

export default CreateTodo;
