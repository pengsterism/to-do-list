import React from 'react';
import Button from './Button';

const Grid = () => {
  const buttons = [
    { label: 'Button 1', onClick: () => console.log('Button 1 clicked') },
    { label: 'Button 2', onClick: () => console.log('Button 2 clicked') },
    { label: 'Button 3', onClick: () => console.log('Button 3 clicked') },
    { label: 'Button 4', onClick: () => console.log('Button 4 clicked') },
    { label: 'Button 5', onClick: () => console.log('Button 5 clicked') },
    { label: 'Button 6', onClick: () => console.log('Button 6 clicked') },
  ];

  return (
    <div className="grid-container">
      {buttons.map((button, index) => (
        <Button key={index} label={button.label} onClick={button.onClick} />
      ))}
    </div>
  );
};

export default Grid;
