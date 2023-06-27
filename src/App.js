import React, { useState } from 'react';
import './App.css'; 
import './TaskItem.css';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    const newTask = {
      id: tasks.length + 1,
      title: task,
      completed: false, // Set the completed property to false initially
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const markTaskComplete = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed }; //Toggle the completed status
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Avantgarde Printing Press</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} markTaskComplete={markTaskComplete} />
    </div>
  );
};

export default App;
