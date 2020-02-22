import React from 'react';
import ToDoList from './to_do_list';
import AddToDoForm from './add_to_do_form';
import { ListContext } from '../list_context';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addItem: (item) => this.addToDo(item),
      list: [],
      error: ''
    };
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

    return (
      <ListContext.Provider value={this.state}>
        <div className="container">
          <h1 className="text-center my-4">To Do List</h1>
          <div className="row">
            <div className="col-md-8">
              <ToDoList />
            </div>
            <div className="col-md-4">
              <AddToDoForm />
            </div>
          </div>
        </div>
      </ListContext.Provider>
    );
  }
}

export default App;
