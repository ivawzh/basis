import React from "react";
import { render, screen } from "../utils/test";
import "@testing-library/jest-dom/extend-expect";
import Container from "./Container";
import Text from "./Text";

describe("Container", () => {
  it("no props", () => {
    render(<Container>Hello World</Container>);

    const node = screen.getByText("Hello World");

    expect(node.tagName).toBe("DIV");
  });

  it("with margin", () => {
    render(<Container margin="1 4">Hello World</Container>);

    const node = screen.getByText("Hello World");

    expect(node).toHaveStyle(`
      margin: 4px 16px;
    `);
  });

  it("with padding", () => {
    render(<Container padding="1 2 3 4">Hello World</Container>);

    const node = screen.getByText("Hello World");

    expect(node).toHaveStyle(`
      padding: 4px 8px 12px 16px;
    `);
  });

  it("with width", () => {
    render(<Container width="80">Hello World</Container>);

    const node = screen.getByText("Hello World");

    expect(node).toHaveStyle(`
      width: 80px;
    `);
  });

  it("with height", () => {
    render(<Container height="72px">Hello World</Container>);

    const node = screen.getByText("Hello World");

    expect(node).toHaveStyle(`
      height: 72px;
    `);
  });

  it("with textStyle parent", () => {
    render(
      <Container textStyle="legal">
        <Text>Hello World</Text>
      </Container>
    );

    const text = screen.getByText("Hello World");

    expect(text).toHaveStyle(`
      font-size: 14px;
    `);
  });

  it("with textStyle grandparent", () => {
    render(
      <Container textStyle="hero">
        <Container>
          <Text>Hello World</Text>
        </Container>
      </Container>
    );

    const text = screen.getByText("Hello World");

    expect(text).toHaveStyle(`
      font-size: 104px;
    `);
  });

  it("with textAlign", () => {
    render(<Container textAlign="right">Hello World</Container>);

    const node = screen.getByText("Hello World");

    expect(node).toHaveStyle(`
      text-align: right;
    `);
  });

  it("with background color", () => {
    render(<Container bg="secondary.lightBlue.t25">Hello World</Container>);

    const node = screen.getByText("Hello World");

    expect(node).toHaveStyle(`
      background-color: #d8edff;
    `);
  });

  it("with testId", () => {
    const { container } = render(
      <Container testId="my-container">Hello World</Container>
    );

    expect(container.firstChild).toHaveAttribute("data-testid", "my-container");
  });
});
