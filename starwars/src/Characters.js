import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  margin: 100px auto;
  width: 800px;
  border: 1px solid gray;
  border-radius: 14px;
`;

const Name = styled.h2`
  color: white;
`;

const BirthYear = styled.p`
  color: white;
`;

const Characters = ({ name, birth_year }) => (
  <Container>
    <Name>{name}</Name>
    <BirthYear>{birth_year}</BirthYear>
  </Container>
);
export default Characters;
