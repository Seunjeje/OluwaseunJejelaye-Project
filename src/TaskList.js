import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, markTaskComplete }) => {
  const handleDelete = (taskId) => {
    deleteTask(taskId);
  };

  const handleComplete = (taskId) => {
    markTaskComplete(taskId);
  };

  return (
    <div>
      <ul className="task-list"> {/* Add a class name to the ul element */}
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={handleDelete}
            onComplete={handleComplete}
          />
        ))}
      </ul>
    </div>
  );
    };

export default TaskList;
