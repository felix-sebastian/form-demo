import React from "react";
import styled from "styled-components";

const Flyout = styled.div`
  max-height: 10rem;
  overflow-y: auto;
  z-index: 1001;
  padding: 0.25rem 0;
`;

const Option = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  background-color: ${({ cursored, active }) =>
    active ? "#0e508a" : cursored ? "#ddd" : "transparent"};
  color: ${({ active }) => (active ? "#fff" : "#333")};
`;

const Message = styled(Option)`
  text-align: center;
  color: #ddd;
`;

export default ({
  options,
  cursor,
  value,
  handleMouseOver,
  handleClick,
  required
}) => (
  <Flyout>
    {!required && (
      <Option
        cursored={cursor === -1}
        active={value === -1}
        i={-1}
        onMouseDown={event => event.preventDefault()}
        onClick={() => handleClick(-1)}
        onMouseOver={() => handleMouseOver(-1)}
      >
        None
      </Option>
    )}
    {options.length ? (
      options.map((option, i) => (
        <Option
          cursored={cursor === i}
          active={value === i}
          i={i}
          key={i}
          onMouseDown={event => event.preventDefault()}
          onClick={() => handleClick(i)}
          onMouseOver={() => handleMouseOver(i)}
        >
          {option}
        </Option>
      ))
    ) : (
      <Message>No results</Message>
    )}
  </Flyout>
);
