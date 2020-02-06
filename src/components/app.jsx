import React from 'react';
import ToDoList from './to_do_list';
import AddToDo from './add_to_do';

function App(props) {
  return (
    <div>
      <h1>To Do List</h1>
      <ToDoList />
      <AddToDo />
    </div>
  );
}

export default App;
