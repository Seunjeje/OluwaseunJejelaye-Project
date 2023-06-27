import React from 'react';
import './TaskItem.css';



const TaskItem = ({ task, onDelete, onComplete }) => {
  const handleDelete = () => {
    onDelete(task.id);
  };

  const handleComplete = () => {
    onComplete(task.id);
  };

  const buttonClassName = task.completed ? 'complete-button completed' : 'complete-button';

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleComplete}
          className="checkbox"
        />
        <span className={task.completed ? 'completed' : ''}>{task.title}</span>
      </label>
      <button className={buttonClassName} onClick={handleComplete}>
        {task.completed ? 'Completed' : 'Complete'}
      </button>
      <button className={buttonClassName} onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;
