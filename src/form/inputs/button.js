import React from "react";
import styled from "styled-components";

const normal = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 2rem;
  padding: 0.6rem 1rem;
  box-sizing: border-box;
  background-color: ${({ disabled }) => (disabled ? "#aaa" : "#0058a6")};
  color: ${({ disabled }) => (disabled ? "#ddd" : "#fff")};
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
  font-weight: 600;
  font-size: 0.8rem;
  outline: none;
  height: 2rem;
  &:focus {
    box-shadow: 0px 0px 2px 2px #7f9ab1;
  }
`;

const minimal = styled.button`
  background-color: transparent;
  border: none;
  box-sizing: border-box;
  color: #0058a6;
  text-decoration: underline;
  font-weight: 600;
  font-size: 0.8rem;
  outline: none;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  &:focus {
    box-shadow: 0px 0px 2px 2px #7f9ab1;
  }
`;

export default ({
  handleClick,
  disabled,
  children,
  testId,
  minimal: minimal_
}) => {
  const Component = minimal_ ? minimal : normal;

  return (
    <Component onClick={handleClick} disabled={disabled} data-testid={testId}>
      {children}
    </Component>
  );
};
