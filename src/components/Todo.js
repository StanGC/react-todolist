import React, { Component } from 'react';
import styled from 'styled-components';

const TodoText = styled.div`
  color: ${(props) => {
    const now = new Date();
    const hours = now.getHours();
    const color = hours >= 6 && hours <= 18 ? 'black' : 'green';
    return color;
  }};
`;

class Todo extends Component {
  render() {
    return <TodoText>{this.props.todo}</TodoText>
  }
}

export default Todo;
