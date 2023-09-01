"use client"

import React from 'react';
import Link from 'next/link';
import styled from "styled-components";

const Homepage = styled.div`
  list-style-type: none;
  padding: 0;
  align-items: center;
  justify-content: center;
  font-family: Euclid Circular B, sans-serif;
  flex-direction: column;
`;

function Home() {
  return (
    <Homepage>
      <h1>Zahira's projects!</h1>
      <p>Click the button below to go to the to-do list page:</p>
      <Link href="/todo-list">Go to To-Do List</Link>
    </Homepage>
  );
}

export default Home;