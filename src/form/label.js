import React from "react";
import styled from "styled-components";

const Box = styled.div`
  font-size: 0.7rem;
  padding: 0 0 0.3rem 2px;
  color: #333;
  font-weight: 600;
`;

const Asterisk = styled.span`
  color: #a60000;
  font-weight: 800;
`;

export default ({ children, asterisk }) => (
  <Box>
    {children}
    {asterisk && <Asterisk>&nbsp;&#42;</Asterisk>}
  </Box>
);
