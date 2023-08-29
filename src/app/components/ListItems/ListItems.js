"use client"

import React, { useState } from 'react';
import { useReducer } from 'react';
import styled from 'styled-components';

const colors = ['#ECBAA8', '#CC1426', '#56223D', '#EF60A3'];

const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
  align-items:center;
  justify-content: center;
`;

const StyledLi = styled.li`
  margin-bottom: 8px;
  background-color: ${props => props.color || 'white'};
  padding: 10px;
  border-radius: 5px;
  display: flex;
  gap: 10px;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 5px 10px;
  border: none;
  background-color: #ddd;
  cursor: pointer;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  font-family: Euclid Circular B;
`;

const ButtonContainer = styled.div`
justify-content: right;
align-items: right;
display: flex;

column-gap: 5px;
`;

const TaskText = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-bottom: 3px; 
  `;

function ListItems({ tasks, handleEdit, handleDelete, editingIndex, handleUpdate }) {

  const [editedTask, setEditedTask] = useState('');
  const [checked, setChecked] = useReducer(
    (checked) => !checked, 
    false
  )

  const handleChange = event => {
    setEditedTask(event.target.value);
  };

  const handleSave = index => {
    handleUpdate(index, editedTask);
    setEditedTask('');
    handleEdit(-1);
  };
  return (
    <StyledUl>
    {tasks.map((task, index) => (
      <StyledLi key={index} color={colors[index % colors.length]}>
        {editingIndex === index ? (
          <>
          
            <input type="text" value={editedTask} onChange={handleChange} />
            <ButtonContainer>
              <Button onClick={() => handleSave(index)}>Save</Button>
              <Button onClick={() => handleDelete(index)}>Delete</Button>
            </ButtonContainer>
          </>
        ) : (
          <>
           <TaskText>{task}</TaskText>
            <ButtonContainer>
              <Button onClick={() => handleEdit(index)}>Edit</Button>
              <Button onClick={() => handleDelete(index)}>Delete</Button>
            </ButtonContainer>
          </>
        )}
      </StyledLi>
    ))}
  </StyledUl>
);
}


export default ListItems;
