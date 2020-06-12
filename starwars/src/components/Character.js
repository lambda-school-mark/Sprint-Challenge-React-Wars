// Write your Character component here
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px auto;
  width: 800px;
  border-radius: 14px;
  background-color: black;
`;

const Name = styled.h2`
  color: white;
  padding-left: 2rem;
  font-family: "Black Ops One", cursive;
`;

const BirthYear = styled.p`
  color: white;
  padding-right: 2rem;
  font-family: "Black Ops One", cursive;
`;

const Characters = ({ name, birth_year }) => (
  <Container>
    <Name>{name}</Name>
    <BirthYear>{birth_year}</BirthYear>
  </Container>
);
export default Characters;
