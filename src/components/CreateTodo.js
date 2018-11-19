import React, { Component } from 'react';
import TodoInput from './TodoInput';
import CreateTodoButton from './CreateTodoButton';

class CreateTodo extends Component {

  constructor() {
    super();
    this.state = {
      inputText: '',
    }
  }

  createTodo() {
    if (this.state.inputText) {
      this.props.createTodo && this.props.createTodo(this.state.inputText);
      this.setState({
        inputText: ''
      })
    }
  }

  updateInputText(event) {
    this.setState({
      inputText: event.target.value
    })
  }

  render() {
    return (
      <div>
        <TodoInput inputText={this.state.inputText}
        updateInputText={(event) => this.updateInputText(event)}/>
        <CreateTodoButton
        createTodo={() => this.createTodo()}/>
      </div>
    );
  }
}

export default CreateTodo;
