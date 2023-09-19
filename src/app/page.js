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
      <p>Here's the things I have made so far hehe:</p>
      <p><Link href="/TodoApp">Go to To-Do List</Link></p>
      <p><Link href="/StoresCSS">Go to Mecca Stores CSS Activity</Link></p>
    </Homepage>
  );
}

export default Home;