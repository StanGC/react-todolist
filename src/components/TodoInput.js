import React, { Component } from 'react';

class TodoInput extends Component {
  render() {
    return <input
      type='text'
      placeholder='輸入新待辦事項...'
      valur={this.props.inputText}
      onChange={this.props.updateInputText}
    />;
  }
}

export default TodoInput;
