import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { kebabCaseToTitleCase } from "./helper";

test("button click flow", () => {
  //render the app  
  render(<App />);

  // find the button
  const buttonElement = screen.getByRole("button", {name: /blue/i });

  // check the initial color
  expect(buttonElement).toHaveClass("medium-violet-red");

  // click the button
  fireEvent.click(buttonElement);

  // check button text
  expect(buttonElement).toHaveTextContent(/red/i);

  // check button color
  expect(buttonElement).toHaveClass("midnight-blue");
});

//code quiz add checkbox functionality
test("checkbox flow", () => {
  //render the app  
  render(<App />);

  // find elements
  const buttonElement = screen.getByRole("button", { name: /blue/i });

  //find the checkbox
  const checkboxElement = screen.getByRole("checkbox", { name: /disable button/i });

  //check initial conditions
  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();

  //when checkbox is checked button should be disabled
  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeDisabled();

  //when checkbox is unchecked button should be enabled
  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeEnabled();
  
});

test("Code Quiz! Button Gray when disabled", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  const checkboxElement = screen.getByRole("checkbox", { name: /disable button/i });

  //check initial conditions
  expect(buttonElement).toHaveClass("medium-violet-red");
  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();

  //when checkbox is checked button should be disabled
  fireEvent.click(checkboxElement);
  expect(buttonElement).toHaveClass("gray");
  expect(buttonElement).toBeDisabled();

  //when checkbox is unchecked button should be enabled
  fireEvent.click(checkboxElement);
  expect(buttonElement).toHaveClass("medium-violet-red");
  expect(buttonElement).toBeEnabled();

  //change button to blue
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveClass("midnight-blue");

  //when checkbox is checked button should be disabled
  fireEvent.click(checkboxElement);
  expect(buttonElement).toHaveClass("gray");

  //enable button to make it blue again
  fireEvent.click(checkboxElement);
  expect(buttonElement).toHaveClass("midnight-blue");
});

describe("kebabCaseToTitleCase", () => {
  test("works for no hyphens", () => {
    expect(kebabCaseToTitleCase("red")).toBe("Red");
  });
  test("works for one hyphen", () => {  
    expect(kebabCaseToTitleCase("midnight-blue")).toBe("Midnight Blue");
  });
  test("works for multiple hyphens", () => {  
    expect(kebabCaseToTitleCase("medium-violet-red")).toBe("Medium Violet Red");
  });
});