"use client";

import React, { useState, useEffect } from "react";
import InputForm from "../InputForm/InputForm";
import ListItems from "../ListItems/ListItems";
import styled from "styled-components";

const MainBody = styled.div`
  list-style-type: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Euclid Circular B;
  flex-direction: column;
`;

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
    const updatedTasks = tasks.map((task, i) =>
      i === index ? updatedTask : task
    );
    setTasks(updatedTasks);
    setEditingIndex(-1);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTasks = localStorage.getItem('tasks');
      if (savedTasks) {
        setTasks(JSON.parse(savedTasks));
      }
    }
  }, []);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  return (
    <MainBody>
      <h1>To-Do List</h1>
      <InputForm addTask={addTask} />
      <ListItems
        tasks={tasks}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        editingIndex={editingIndex}
        handleUpdate={handleUpdate}
      />
    </MainBody>
  );
}

export default TodoList;
