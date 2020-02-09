import React from "react";
import Pill from ".";
import renderer from "react-test-renderer";

it("displays the current value", () => {
  const result = renderer
    .create(
      <Pill
        value="Foo"
        options={["Foo", "Bar", "Baz"]}
        cursor={0}
        query="Foo"
      />
    )
    .toJSON();

  expect(result).toMatchSnapshot();
});

it("displays the cursored option", () => {
  const result = renderer
    .create(
      <Pill value="Foo" focused options={["Foo", "Bar", "Baz"]} cursor={1} />
    )
    .toJSON();

  expect(result).toMatchSnapshot();
});
