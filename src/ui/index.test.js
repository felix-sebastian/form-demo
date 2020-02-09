import React from "react";
import Space from "./space";
import renderer from "react-test-renderer";

it("defaults to horizontal space", () => {
  const result = renderer.create(<Space />).toJSON();
  expect(result).toMatchSnapshot();
});

it("can render vertical space", () => {
  const result = renderer.create(<Space vertical />).toJSON();
  expect(result).toMatchSnapshot();
});
