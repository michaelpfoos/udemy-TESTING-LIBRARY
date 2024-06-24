import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button click flow", () => {
  //render the app  
  render(<App />);

  // find the button
  const buttonElement = screen.getByRole("button", {name: /blue/i });

  // check the initial color
  expect(buttonElement).toHaveClass("red");

  // click the button
  fireEvent.click(buttonElement);

  // check button text
  expect(buttonElement).toHaveTextContent(/red/i);

  // check button color
  expect(buttonElement).toHaveClass("blue");
});

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
  
});