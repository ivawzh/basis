import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "../utils/test";
import Button from "./Button";
import Container from "./Container";

describe("Button", () => {
  it("default", () => {
    render(<Button>Find out more</Button>);

    const button = screen.getByText("Find out more");

    expect(button.tagName).toBe("BUTTON");
    expect(button).toHaveAttribute("type", "button");
    expect(button).toHaveStyle(`
      font-size: 18px;
      line-height: 28px;
      font-family: 'Roboto',sans-serif;
      font-weight: 500;
      border: 0;
      border-radius: 4px;
      padding: 0 24px;
      min-height: 48px;
      transition: background-color 150ms ease,color 150ms ease;
      background-color: #006aff;
      color: #ffffff;
    `);
    expect(button).not.toHaveStyle(`
      width: 100%;
    `);
  });

  it("secondary", () => {
    render(<Button variant="secondary">Find out more</Button>);

    const button = screen.getByText("Find out more");

    expect(button).toHaveStyle(`
      background-color: transparent;
      color: #006aff;
      border-width: 1px;
      border-style: solid;
      border-color: #006aff;
    `);
  });

  it("primary white", () => {
    render(<Button color="white">Find out more</Button>);

    const button = screen.getByText("Find out more");

    expect(button).toHaveStyle(`
      background-color: #ffffff;
      color: #006aff;
    `);
  });

  it("secondary white", () => {
    render(
      <Button variant="secondary" color="white">
        Find out more
      </Button>
    );

    const button = screen.getByText("Find out more");

    expect(button).toHaveStyle(`
      background-color: transparent;
      color: #ffffff;
      border-width: 1px;
      border-style: solid;
      border-color: #ffffff;
    `);
  });

  it("full width", () => {
    render(<Button fullWidth>Find out more</Button>);

    const button = screen.getByText("Find out more");

    expect(button).toHaveStyle(`
      width: 100%;
    `);
  });

  it("disabled", () => {
    render(<Button disabled>Find out more</Button>);

    const button = screen.getByText("Find out more");

    expect(button).toHaveStyle(`
      background-color: #b2b2b2;
      color: #414141;
      opacity: 0.7;
      cursor: not-allowed;
    `);
  });

  it('type="submit"', () => {
    render(<Button type="submit">Find out more</Button>);

    const button = screen.getByText("Find out more");

    expect(button).toHaveAttribute("type", "submit");
  });

  it("inside dark container", () => {
    render(
      <Container bg="primary.blue.t100">
        <Button>Find out more</Button>
      </Container>
    );

    const button = screen.getByText("Find out more");

    expect(button).toHaveStyle(`
      background-color: #ffffff;
      color: #006aff;
    `);
  });

  it("with margin", () => {
    render(<Button margin="2 4">Find out more</Button>);

    const button = screen.getByText("Find out more");

    expect(button).toHaveStyle(`
      margin: 8px 16px;
    `);
  });

  it("with testId", () => {
    const { container } = render(
      <Button testId="my-button">Find out more</Button>
    );

    expect(container.firstChild).toHaveAttribute("data-testid", "my-button");
  });
});
