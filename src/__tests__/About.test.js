import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import About from "../components/About";
import logo from "../assets/logo"
import React from "react";

test("renders a <aside> element", () => {
  const { container } = render(<About />);
  expect(container.querySelector("aside")).toBeInTheDocument();
});

test("renders a <img> with the blog logo and alt text of 'blog logo'", () => {
  const logo = "https://via.placeholder.com/215";
  render(<About imageSrc={logo} aboutText="About this blog" />);
  const img = screen.queryByAltText("blog logo");
  expect(img).toBeInTheDocument();
  expect(img.src).toBe(logo); // Check if the src attribute matches the expected logo URL
});

test("uses a default value for the image if no image is passed as a prop", () => {
  render(<About />);
  const img = screen.queryByAltText("blog logo");
  expect(img).toBeInTheDocument();
  expect(img.src).toContain("https://via.placeholder.com/215");
});

test("renders a <p> with the about text", () => {
  render(<About imageSrc="some-image-url" aboutText="About this blog" />);
  const p = screen.queryByText("About this blog");
  expect(p).toBeInTheDocument();
  expect(p.tagName).toBe("P");
});
