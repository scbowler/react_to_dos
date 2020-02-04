import React from 'react';
import ToDoList from './to_do_list';
import Button from './button';

function App(props) {
  return (
    <div>
      <h1>To Do List</h1>
      <ToDoList />
      <Button />
    </div>
  );
}

export default App;
