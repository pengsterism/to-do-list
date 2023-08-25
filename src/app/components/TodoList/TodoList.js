"use client"

import React, { useState } from 'react';
import InputForm from '../InputForm/InputForm';
import ListItems from '../ListItems/ListItems';

function TodoList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <InputForm addTask={addTask} />
      <ListItems tasks={tasks} />
    </div>
  );
}

export default TodoList;
