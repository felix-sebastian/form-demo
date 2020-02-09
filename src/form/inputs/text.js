import React, { forwardRef } from "react";
import styled from "styled-components";

const Input = styled.input`
  border-radius: 0.25rem;
  border: none;
  background-color: #ddd;
  padding: 0.5rem;
  display: block;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  height: 2rem;
  &:focus {
    box-shadow: 0px 0px 2px 2px #7f9ab1;
  }
`;

export default forwardRef(
  (
    {
      className,
      value,
      placeholder,
      handleChange = () => null,
      handleFocus = () => null,
      handleBlur = () => null,
      readOnly,
      disabled
    },
    ref
  ) => (
    <Input
      className={className}
      value={value || ""}
      placeholder={placeholder}
      onChange={event => handleChange(event.target.value)}
      onFocus={handleFocus}
      onBlur={handleBlur}
      ref={ref}
      readOnly={readOnly}
      disabled={disabled}
    />
  )
);
