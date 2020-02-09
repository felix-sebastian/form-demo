import React from "react";
import DropDown from "./dropDown";
import { render } from "@testing-library/react";

it("hides the flyout", () => {
  const { baseElement } = render(
    <DropDown pill={<div>foo</div>} flyout={<div>bar</div>} />
  );

  expect(baseElement).toMatchSnapshot();
});

it("displays the flyout", () => {
  const { baseElement } = render(
    <DropDown focused pill={<div>foo</div>} flyout={<div>bar</div>} />
  );

  expect(baseElement).toMatchSnapshot();
});
