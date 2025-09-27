import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import App from "./App.jsx";

// Clean up after each test
afterEach(() => {
  cleanup();
});

describe("App", () => {
  it("basic functionality test", () => {
    render(<App />);

    // Simple test that works
    const heading = screen.getByText("Automation Done");
    expect(heading).toBeDefined();

    // Test button click
    const button = screen.getByRole("button");
    expect(button.textContent).toContain("count is 0");

    fireEvent.click(button);
    expect(button.textContent).toContain("count is 1");
  });
});
