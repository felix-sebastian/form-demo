import React from "react";
import styled from "styled-components";

const Box = styled.div`
  color: #a60000;
  margin-top: 0.2rem;
  font-size: 0.6rem;
  font-weight: 500;
`;

export default ({ show, children }) => (show ? <Box>{children}</Box> : null);
