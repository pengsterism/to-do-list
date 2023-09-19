import styled from 'styled-components';

export const ButtonGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 110px);
    grid-gap: 12px; 
  width: 100%;
`;

export const Button = styled.button`
  display: flex;
min-width: 101px;
max-width: 108px;
padding: 12px 16px;
justify-content: center;
align-items: center;
gap: 10px;
flex: 1 0 0;
cursor: pointer;
color: var(--mecca-colors-mecca-black, #000);
text-align: center;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Euclid Circular B;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 14px;
border: 1px solid var(--mecca-colors-mecca-black, #000);
background: var(--mecca-colors-mecca-white, #FFF);
`;