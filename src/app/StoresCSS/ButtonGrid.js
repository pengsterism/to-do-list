import React from 'react';
import { ButtonGridContainer, Button } from './ButtonStyle.styles';

function ButtonGrid() {
  const handleClick = (buttonNumber) => {
    console.log(`Button ${buttonNumber} clicked`);
  };

  const renderButtons = () => {
    const buttons = [];
    for (let i = 1; i <= 8; i++) {
      buttons.push(
        <Button key={i} onClick={() => handleClick(i)}>
          10:30am {i}
        </Button>
      );
    }
    return buttons;
  };

  return <ButtonGridContainer>{renderButtons()}</ButtonGridContainer>;
}

export default ButtonGrid;