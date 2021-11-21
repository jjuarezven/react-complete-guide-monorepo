import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting.js";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test("Renders Hello World as a text", () => {
    render(<Greeting />);

    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("Renders It's good to see you! if the button was not clicked", () => {
    render(<Greeting />);

    const outputElement = screen.getByText("It's good to see you!");
    expect(outputElement).toBeInTheDocument();
  });

  test("Renders Changed! if the button was not clicked", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test("Does not render It's good to see you! if the button was clicked", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // queryByText returns null if text is not found
    const outputElement = screen.queryByText("It's good to see you!");
    expect(outputElement).toBeNull();
  });
});
