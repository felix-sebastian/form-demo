import React from "react";
import Select from ".";
import { render } from "@testing-library/react";

it("displays the current value", () => {
  const { baseElement } = render(
    <Select value={0} options={["Foo", "Bar", "Baz"]} />
  );

  expect(baseElement).toMatchSnapshot();
});
