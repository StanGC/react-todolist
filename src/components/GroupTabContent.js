import React, { Component } from 'react';
import Title from './Title';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';

class GroupTabContent extends Component {
  constructor() {
    super();
  }

  createTodo(newTodo) {
    this.props.createTodo && this.props.createTodo(newTodo, this.props.groupId);
  }

  render() {
    return (
      <div>
        <Title todos={this.props.todos}/>
        <CreateTodo
          createTodo={(newTodo) => this.createTodo(newTodo)}
        />
        <TodoList
          todos={this.props.todos}
          remove={this.props.removeTodo}
        />
      </div>
    );
  }
}

export default GroupTabContent;
