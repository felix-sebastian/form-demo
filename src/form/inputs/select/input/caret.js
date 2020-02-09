import React from "react";
import styled from "styled-components";
import Icon from "@material-ui/icons/ExpandMore";

const Box = styled.div`
  display: block;
  height: 2rem !important;
  width: 2rem !important;
  flex-grow: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ddd;
  border-radius: 0 0.25rem 0.25rem 0;
`;

export default ({ handleClick }) => (
  <Box onClick={handleClick}>
    <Icon />
  </Box>
);
