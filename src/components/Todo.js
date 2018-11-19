import React, { Component } from 'react';
import styled from 'styled-components';

const Clickable = styled.span`
  cursor: pointer;
`;

const TodoItem = styled.h3`
  border-bottom: 1px #777777 solid;
  margin-bottom: 15px;
  padding-bottom: 5px;
`;

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
    return (
      <TodoItem>
        <Clickable
          onClick={() => {
            this.props.remove(this.props.todo);
            }}
        >
          <TodoText>
            {this.props.todo}
          </TodoText>
        </Clickable>
      </TodoItem>
    )
  }
}

export default Todo;
