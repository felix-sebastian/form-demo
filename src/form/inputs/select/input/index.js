import React from "react";
import Box from "./box";
import Input from "./input";
import Caret from "./caret";

export default ({
  value,
  options,
  handleChange,
  input,
  focused,
  cursor,
  query,
  focus,
  blur,
  search
}) => (
  <Box data-testid="input" focused={focused}>
    <Input
      ref={input}
      value={!options[value] ? query : ""}
      handleFocus={focus}
      handleBlur={blur}
      handleChange={value_ => {
        typeof value === "number"
          ? search(value_.charAt(input.current.selectionStart - 1))
          : search(value_);

        handleChange(null);
      }}
      placeholder={
        (focused && options[cursor]) || options[value] || "Select one"
      }
    />
    <Caret handleClick={focus} />
  </Box>
);
