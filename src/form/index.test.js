import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Form from ".";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

const history = createMemoryHistory();

const RouterForm = () => (
  <Router history={history}>
    <Form />
  </Router>
);

describe("form", () => {
  it("initially renders page one", () => {
    const { baseElement } = render(<RouterForm />);
    expect(baseElement).toMatchSnapshot();
  });

  it("doesn't show the submit button on page one", () => {
    const { baseElement } = render(<RouterForm />);
    expect(baseElement).toMatchSnapshot();
  });

  it("won't let you go back from page one", () => {
    const { baseElement, getByTestId } = render(<RouterForm />);
    const back = getByTestId("page-back");
    expect(back.disabled).toBeTruthy();
    fireEvent.click(back);
    expect(baseElement).toMatchSnapshot();
  });

  it("will let you go back from page two", () => {
    const { baseElement, getByTestId } = render(<RouterForm />);
    fireEvent.click(getByTestId("page-forward"));
    expect(baseElement).toMatchSnapshot();
    fireEvent.click(getByTestId("page-back"));
    expect(baseElement).toMatchSnapshot();
  });

  it("shows the submit button on page two", () => {
    const { baseElement, getByTestId } = render(<RouterForm />);
    fireEvent.click(getByTestId("page-forward"));
    expect(baseElement).toMatchSnapshot();
  });
});
