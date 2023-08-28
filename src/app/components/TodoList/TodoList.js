"use client"

import React, { useState } from 'react';
import InputForm from '../InputForm/InputForm';
import ListItems from '../ListItems/ListItems';



function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleUpdate = (index, updatedTask) => {
    const updatedTasks = tasks.map((task, i) => (i === index ? updatedTask : task));
    setTasks(updatedTasks);
    setEditingIndex(-1);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <InputForm addTask={addTask} />
      <ListItems
        tasks={tasks}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        editingIndex={editingIndex}
        handleUpdate={handleUpdate}
      />
    </div>
  );
}

export default TodoList;