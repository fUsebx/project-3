import React, { Component } from "react";
import Title from '../../Components/Title';
import TodoItems from '../ToDoItems'; 
import './ToDoList.css'; 



class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this); 
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });
   
    this.setState({
      items: filteredItems
    });
  }


  addItem(event) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };
      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
      this._inputElement.value = "";
    }

    event.preventDefault();


  }
  render() {
    return (
      <div className="todoListMain">
        <Title> Todo List </Title>
        <form onSubmit={this.addItem}>
          <input ref={(a) => this._inputElement = a}
            placeholder="enter to do task">
          </input>
          <button type="submit">add</button>
        </form>
        <TodoItems entries={this.state.items} delete={this.deleteItem}/>
      </div>
    );
  }
}

export default ToDoList;
