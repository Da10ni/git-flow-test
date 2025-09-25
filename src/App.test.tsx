import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App.jsx";

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(document.body).toBeInTheDocument();
  });

  it("renders the main heading", () => {
    render(<App />);
    expect(screen.getByText("Automation Done")).toBeInTheDocument();
  });

  it("renders the counter button with initial count", () => {
    render(<App />);
    expect(screen.getByText("count is 0")).toBeInTheDocument();
  });

  it("increments counter when button is clicked", () => {
    render(<App />);
    const button = screen.getByRole("button");

    fireEvent.click(button);
    expect(screen.getByText("count is 1")).toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.getByText("count is 2")).toBeInTheDocument();
  });

  it("renders Vite logo link", () => {
    render(<App />);
    const viteLink = screen.getByRole("link", { name: /vite logo/i });
    expect(viteLink).toHaveAttribute("href", "https://vite.dev");
  });

  it("renders React logo link", () => {
    render(<App />);
    const reactLink = screen.getByRole("link", { name: /react logo/i });
    expect(reactLink).toHaveAttribute("href", "https://react.dev");
  });

  it("renders HMR instruction text", () => {
    render(<App />);
    expect(screen.getByText(/Edit/)).toBeInTheDocument();
    expect(screen.getByText(/src\/App.jsx/)).toBeInTheDocument();
  });
});
