import React from "react";
import Text from "./text";
import renderer from "react-test-renderer";

it("displays the current value", () => {
  const result = renderer.create(<Text value={"Foo"} />).toJSON();
  expect(result).toMatchSnapshot();
});
