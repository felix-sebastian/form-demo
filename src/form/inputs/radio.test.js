import React from "react";
import Radio from "./radio";
import { render, fireEvent, mockImplementation } from "@testing-library/react";

it("renders the active input", () => {
  const { baseElement } = render(
    <Radio options={["Foo", "Bar", "Baz"]} value={1} />
  );

  expect(baseElement).toMatchSnapshot();
});

it("calls handleChange when clicked", () => {
  let callback = jest.fn();

  const { getByText } = render(
    <Radio options={["Foo", "Bar", "Baz"]} value={1} handleChange={callback} />
  );

  fireEvent.click(getByText("Foo"));
  expect(callback).toHaveBeenCalledTimes(1);
});
