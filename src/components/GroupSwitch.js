import React, { Component } from 'react';
import { Clickable } from './StyledComponents';
import styled from 'styled-components';

const GroupButton = styled(Clickable)`
  border: 1px solid black;
  background-color: ${props => props.active ? 'red' : 'gray'};
  color: white;
  margin: 3px;
  padding: 3px;
`;

class GroupSwitch extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const groupNode = this.props.groups.map((group, index) => {
      return (
        <GroupButton
          key={index}
          onClick={(e) => this.props.switchGroup(group.id)}
          active={this.props.activeGroupId === group.id}
        >
          {group.name}
        </GroupButton>
      );
    });
    return <div> {groupNode} </div>
  }
}

export default GroupSwitch;
