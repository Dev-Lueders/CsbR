// Test/src/Routes/InfoRoutes.test.jsx
import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

// Mock wrapper
vi.mock("../../../src/components/Atoms/Page_Grid/Page_Grid", () => ({
  default: ({ children }) => <div data-testid="page-grid">{children}</div>,
}));

// Mock pages (match import strings exactly—no .jsx extensions)
vi.mock("../../../src/Pages/Suggestion_Box/Suggestion_Box", () => ({
  default: () => <div>Suggestion Box Mock</div>,
}));
vi.mock("../../../src/Pages/About/About", () => ({
  default: () => <div>About Mock</div>,
}));
vi.mock("../../../src/Pages/Help/Help", () => ({
  default: () => <div>Help Mock</div>,
}));
vi.mock("../../../src/Pages/Legal/Legal_Page", () => ({
  default: () => <div>Legal Mock</div>,
}));
vi.mock("../../../src/Pages/Help/Readme", () => ({
  default: () => <div>ReadMe Mock</div>,
}));

// SUT
import InfoRoutes from "../../../src/Routes/InfoRoutes.jsx";

function renderAt(path) {
  render(
    <MemoryRouter initialEntries={[path]}>
      <InfoRoutes />
    </MemoryRouter>
  );
}

function expectInGrid(textRegex) {
  const grid = screen.getByTestId("page-grid");
  const child = screen.getByText(textRegex);
  expect(grid).toBeTruthy();
  expect(child).toBeTruthy();
  expect(grid.contains(child)).toBe(true);
}

describe("InfoRoutes", () => {
  it("routes /Suggestion_Box", () => {
    renderAt("/Suggestion_Box");
    expectInGrid(/suggestion box mock/i);
  });

  it("routes /About", () => {
    renderAt("/About");
    expectInGrid(/about mock/i);
  });

  it("routes /Help", () => {
    renderAt("/Help");
    expectInGrid(/help mock/i);
  });

  it("routes /Legal", () => {
    renderAt("/Legal");
    expectInGrid(/legal mock/i);
  });

  it("routes /ReadMe", () => {
    renderAt("/ReadMe");
    expectInGrid(/readme mock/i);
  });

  it("unmatched path renders nothing", () => {
    renderAt("/not-here");
    expect(screen.queryByTestId("page-grid")).toBeNull();
  });

  it("is case-sensitive by default", () => {
    renderAt("/about"); // lower-case
    expect(screen.queryByTestId("page-grid")).toBeNull();
  });
});
