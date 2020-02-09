import React, { useState, useRef, useEffect } from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import "./style.css";
import Input from "../text";
import DropDown from "../dropDown";
import moment from "moment";

const dateFormat = "D/M/YYYY";
const parseDate = date => moment(date, dateFormat, true).toDate();

export default ({ value, handleChange }) => {
  const [inputValue, setInputValue] = useState(
    moment(value).format(dateFormat)
  );

  const [focused, setFocused] = useState(false);
  const [manual, setManual] = useState(false);
  const input = useRef();

  const focus = () => {
    setFocused(true);
    input.current.focus();
  };

  const apply = () => {
    if (!moment(inputValue, dateFormat, true).isValid()) {
      setInputValue(moment(value).format(dateFormat));
    } else {
      let date = parseDate(inputValue);
      if (date !== value) {
        handleChange(date);
        setInputValue(moment(date).format(dateFormat));
      }
    }
  };

  useEffect(() => {
    if (!focused) input.current.blur();
  }, [focused]);

  return (
    <DropDown
      focused={focused && !manual}
      pill={
        <Input
          ref={input}
          handleFocus={focus}
          handleBlur={() => {
            if (!focused) return;
            setFocused(false);
            apply();
            setManual(false);
          }}
          value={inputValue}
          handleChange={value => {
            setInputValue(value);
            setManual(true);
          }}
        />
      }
      flyout={
        <div onMouseDown={event => event.preventDefault()}>
          <DayPicker
            value={value}
            selectedDays={value}
            month={value}
            onDayClick={value => {
              handleChange(value);
              setInputValue(moment(value).format(dateFormat));
              setFocused(false);
            }}
          />
        </div>
      }
    />
  );
};
