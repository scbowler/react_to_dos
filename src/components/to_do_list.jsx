import React from 'react';
import ListItem from './list_item';

const toDos = [
  {
    id: '01',
    title: 'Wash car'
  },
  {
    id: '02',
    title: 'Go to store'
  },
  {
    id: '03',
    title: 'Clean bathroom'
  },
  {
    id: '04',
    title: 'Learn React'
  }
]

class ToDoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    };
  }

  render() {
    const toDoElements = toDos.map((item) => {
      return <ListItem key={item.id} title={item.title} />
    });

    return (
      <ol>
        {toDoElements}
      </ol>
    );
  }
}

export default ToDoList;
