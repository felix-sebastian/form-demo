import React, { useEffect, useState, Fragment } from "react";
import styled from "styled-components";
import ui from "../../ui";

const { space: Space } = ui;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Radio = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  box-sizing: border-box;
  border-width: 0.25rem;
  border-color: #ddd;
  margin-right: 0.5rem;
  background-color: ${({ active }) => (active ? "#555" : "#ddd")};
  border-style: ${({ active }) => (active ? "solid" : "none")};
`;

const Row = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
`;

export default ({ value, options, handleChange }) => {
  const [focused, setFocused] = useState(null);

  useEffect(() => {
    const handle = event => {
      if (focused !== null && event.keyCode === 13) handleChange(focused);
    };

    window.addEventListener("keypress", handle);
    return () => window.removeEventListener("keypress", handle);
  }, [focused, handleChange]);

  return (
    <Box>
      {options.map((option, i) => (
        <Fragment key={i}>
          <Row
            key={i}
            data-testid="row"
            onClick={() => {
              handleChange(i);
            }}
          >
            <Radio
              onFocus={() => setFocused(i)}
              onBlur={() => setFocused(null)}
              tabIndex="0"
              active={value === i}
            />
            {option}
          </Row>
          {i < options.length - 1 && <Space size={0.5} />}
        </Fragment>
      ))}
    </Box>
  );
};
