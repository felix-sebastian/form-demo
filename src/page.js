import React from "react";
import styled from "styled-components";
import Form from "./form";
import ui from "./ui";

const { space: Space } = ui;

const Box = styled.div`
  background-color: #00203c;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  /* background-color: #005b85; */
  /* background-image: linear-gradient(180deg, #005b85, #00203c); */
`;

export default () => (
  <Box>
    <Space size={6} />
    <Form />
  </Box>
);
