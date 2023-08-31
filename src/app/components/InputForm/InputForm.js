import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  margin-bottom: 16px;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: Euclid Circular B, sans-serif;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #CC1426;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: Euclid Circular B, sans-serif;

  &:hover {
    background-color: #ECBAA8;
  }
`;

function InputForm({ addTask }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      addTask(task);
      setTask('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="New thing!"
      />
      <Button type="submit">Add</Button>
    </Form>
  );
}

export default InputForm;
