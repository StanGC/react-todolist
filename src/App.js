import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
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
    return (
      <Router>
        <div>
          <Route exact path='/'
            render={() => {
              return (
                <div>
                  <GroupSwitch
                    groups={this.state.groups}
                    activeGroupId={undefined}
                    switchGroup={(groupId) => this.switchGroup(groupId)}
                  />
                  <AllGroupsTabContent
                    todos={this.state.todos}
                    removeTodo={(todo) => this.removeTodo(todo)}
                  />
                </div>
              );
            }}
          />

          <Route exact path='/group/:id'
            render={({ match }) => {
              const todos = this.state.todos.filter((todo, index) => {
                return todo.groupId === match.params.id;
              })
              return (
                <div>
                  <GroupSwitch
                    groups={this.state.groups}
                    activeGroupId={match.params.id}
                    switchGroup={(groupId) => this.switchGroup(groupId)}
                  />

                  <GroupTabContent
                    todos={todos}
                    createTodo={(newTodo, groupId) => this.createTodo(newTodo, groupId)}
                    removeTodo={(todo) => this.removeTodo(todo)}
                  />
                </div>
              );
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
