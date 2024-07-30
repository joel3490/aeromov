import styled from "styled-components";
import React from "react";
import Popover from "../components/poper";
export function Productos() {
  return (
    <Container>
      <h1>Productos</h1>
      <Popover/>
    </Container>
  );
}
const Container = styled.div`
 height:100vh;`;
