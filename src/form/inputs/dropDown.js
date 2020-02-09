import React from "react";
import styled from "styled-components";

const Rail = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: visible;
  height: 0;
`;

const Flyout = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 0;
  right: ${({ fullWidth }) => (fullWidth ? 0 : "auto")};
  background-color: #fff;
  border-radius: 0.25rem;
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.2);
  z-index: 1001;
`;

const Box = styled.div`
  position: relative;
`;

export default ({ focused, pill, flyout, fullWidth }) => (
  <Box>
    {pill}
    <Rail>{focused && <Flyout fullWidth={fullWidth}>{flyout}</Flyout>}</Rail>
  </Box>
);
