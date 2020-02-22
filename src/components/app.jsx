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

  async getToDos() {
    const resp = await fetch('http://api.reactprototypes.com/todos?key=m0120demouser');
    const data = await resp.json();

    this.setState({
      list: data.todos,
      error: ''
    });
  }

  render() {
    const { error, list } = this.state; 

    return (
      <div className="container">
        <h1 className="text-center my-4">To Do List</h1>
        <div className="row">
          <div className="col-md-8">
            <ToDoList list={list} />
          </div>
          <div className="col-md-4">
            <AddToDoForm add={this.addToDo} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
