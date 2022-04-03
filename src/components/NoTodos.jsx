import React from 'react';
import todoIcon from '../todo.svg';

function NoTodos(props) {
  return (
    <div>
      <div className='no-todos-container'>
        <img src={todoIcon} className={'todo-logo'} alt={'do some things!'} />
        <p>Add some todos...</p>
      </div>
    </div>
  );
}

export default NoTodos;