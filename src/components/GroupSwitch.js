import React, { Component } from 'react';
import { Clickable } from './StyledComponents';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

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
        <Link key={index} to={group.id ? '/group/' + group.id : '/'}>
          <GroupButton
            key={index}
            onClick={(e) => this.props.switchGroup(group.id)}
            active={this.props.activeGroupId === group.id}
          >
            {group.name}
          </GroupButton>
        </Link>
      );
    });
    return <div> {groupNode} </div>
  }
}

export default GroupSwitch;
