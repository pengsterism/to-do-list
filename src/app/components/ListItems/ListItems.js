"use client"

import React, { useState } from 'react';
import styled from 'styled-components';



const colors = ['#ECBAA8', '#CC1426', '#56223D', '#EF60A3', '#000000'];

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
`;

const Button = styled.button`
  padding: 5px 10px;
  border: none;
  background-color: #ddd;
  cursor: pointer;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
justify-content: right;
align-items: right;
display: flex;
column-gap: 5px;
`;

function ListItems({ tasks, handleEdit, handleDelete, editingIndex, handleUpdate }) {

  const [editedTask, setEditedTask] = useState('');

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
            <div>
              <Button onClick={() => handleSave(index)}>Save</Button>
              <Button onClick={() => handleDelete(index)}>Delete</Button>
            </div>
          </>
        ) : (
          <>
            {task}
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
