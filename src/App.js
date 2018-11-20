import React, { Component } from 'react';
import AllGroupsTabContent from './components/AllGroupsTabContent';
import GroupTabContent from './components/GroupTabContent';
import GroupSwitch from './components/GroupSwitch';

class App extends Component {

  constructor() {
    super();
    let todos = [
      { text: '買雞蛋', groupId: 'family' },
      { text: '繳卡費', groupId: 'living' },
      { text: '去運動', groupId: 'living' },
      { text: '看本書', groupId: 'living' },
      { text: 'codeReview', groupId: 'work' },
      { text: '回信', groupId: 'work' },
      { text: '煮飯', groupId: 'family' },
    ];

    let groups = [
      { name: '全部', id: undefined },
      { name: '生活', id: 'living' },
      { name: '工作', id: 'work' },
      { name: '家庭', id: 'family' },
    ];

    this.state = {
      todos: todos,
      groups: groups,
      activeGroupId: undefined,
    }
  }

  createTodo(newTodoText, groupId) {
    const newTodo = {
      text: newTodoText,
      groupId: groupId || this.state.activeGroupId
    }

    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  removeTodo(removingTodo) {
    const newTodos = this.state.todos.filter((todo, index) => {
      return !(todo.groupId === removingTodo.groupId && removingTodo.text === todo.text)
    });

    this.setState({
      todos: newTodos
    })
  }

  switchGroup(groupId) {
    this.setState({
      activeGroupId: groupId
    })
  }

  render() {
    const todos = this.state.activeGroupId ? this.state.todos.filter((todo, index) => {
      return todo.groupId === this.state.activeGroupId;
    }) : this.state.todos;

    const tabContent = this.state.activeGroupId ?
      (<GroupTabContent
        todos={todos}
        createTodo={(newTodo, groupId) => this.createTodo(newTodo, groupId)}
        removeTodo={(todo) => this.removeTodo(todo)}
      />)
      :
      (<AllGroupsTabContent
        todos={todos}
        removeTodo={(todo) => this.removeTodo(todo)}
      />);

    return (
      <div>
        <GroupSwitch
          groups={this.state.groups}
          activeGroupId={this.state.activeGroupId}
          switchGroup={(groupId) => this.switchGroup(groupId)}
        />
        <div>
          {tabContent}
        </div>
      </div>
    );
  }
}

export default App;
