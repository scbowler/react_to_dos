import React from 'react';
import ToDoList from './to_do_list';
import AddToDoForm from './add_to_do_form';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      error: ''
    };

    this.addToDo = this.addToDo.bind(this);
  }

  componentDidMount() {
    this.getToDos();
  }

  async addToDo(item) {
    try {
      const resp = await fetch('http://api.reactprototypes.com/todos?key=m0120demouser', {
        method: 'POST',
        body: JSON.stringify(item)
      });

      if(resp.status > 299) {
        const data = await resp.json();

        throw new Error(data.error);
      }

      this.getToDos();
    } catch(error) {
      console.log('Add Failed:', error);

      this.setState({
        error: error.message
      });
    }
  }

  // addToDo(item) {
  //   fetch('http://api.reactprototypes.com/todos?key=m0120demouser', {
  //     method: 'POST',
  //     body: JSON.stringify({})
  //   }).then(resp => {
  //     if(resp.status > 201) {
  //       throw new Error('Failed to add to do item');
  //     }

  //     return resp.json()
  //   }).then( data => {
  //     console.log('Add Data:', data);
  //     this.getToDos();
  //   }).catch( error => {
  //     console.log('Caught Error:', error);
  //   });
  // }

  async getToDos() {
    const resp = await fetch('http://api.reactprototypes.com/todos?key=m0120demouser');
    const data = await resp.json();

    this.setState({
      list: data.todos,
      error: ''
    });
  }

  // getToDos() {
  //   fetch('http://api.reactprototypes.com/todos?key=m0120demouser').then(resp => {
  //     return resp.json();
  //   }).then(data => {
  //     console.log('Data:', data.todos);
  //     this.setState({
  //       list: data.todos
  //     });
  //   });
  // }

  render() {
    const { error, list } = this.state; 

    return (
      <div>
        <h1>To Do List</h1>
        <ToDoList list={list} />
        <AddToDoForm add={this.addToDo} />
        <h1>{error}</h1>
      </div>
    );
  }
}

export default App;
