"use client"

import React from 'react';
import Link from 'next/link';
import styled from "styled-components";

const colors = ['#ECBAA8', '#56223D', '#EF60A3'];

const Homepage = styled.div`
  font-family: Euclid Circular B, sans-serif;
  text-align: center;
`;

const Heading = styled.div`
  list-style-type: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Euclid Circular B, sans-serif;
  background-color: #CC1426;
  border-radius: 5px;
  color: white;
`;

const Projects = styled.div`
  margin-bottom: 8px;
  background-color: #ECBAA8;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;

  &:hover {
    background-color: #56223D;
    transition: background-color 0.3s ease;
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  white-space: nowrap;
  padding: 5px 10px;
  border-radius: 5px;
`

function Home() {
  return (
    <Homepage>
      <Heading>
      <h1>Zahira's projects!</h1></Heading>
      <p>Here's the things I have made so far hehe:</p>
      <Projects><StyledLink href="/TodoApp">Go to To-Do List</StyledLink></Projects>
      <Projects><StyledLink href="/StoresCSS">Go to Mecca Stores CSS Activity</StyledLink></Projects>
    </Homepage>
  );
}

export default Home;