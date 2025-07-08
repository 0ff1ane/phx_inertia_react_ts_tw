import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Counter from "../../src/pages/Counter.tsx";

describe("Counter Page", () => {
  it("renders the counter page with count and buttons", () => {
    render(<Counter />);

    const countText = screen.getByText("0");

    expect(countText).toBeInTheDocument();
  });
});
