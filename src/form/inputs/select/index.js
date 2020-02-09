import React from "react";
import Flyout from "./flyout";
import useSelect from "./useSelect";
import Input from "./input";
import DropDown from "../dropDown";

export default ({ value, options, handleChange, required = true }) => {
  const {
    input,
    focused,
    cursor,
    query,
    focus,
    blur,
    search,
    setCursor,
    select,
    results
  } = useSelect(options, handleChange, value, required);

  return (
    <DropDown
      focused={focused}
      pill={
        <Input
          {...{
            value,
            options,
            handleChange,
            input,
            focused,
            cursor,
            query,
            focus,
            blur,
            search,
            setCursor,
            select,
            results
          }}
        />
      }
      flyout={
        <Flyout
          {...{ cursor, value }}
          options={results}
          handleMouseOver={setCursor}
          handleClick={select}
          required={required}
        />
      }
      fullWidth
    />
  );
};
