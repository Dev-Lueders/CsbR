// Test/src/Routes/SignUpRoutes.test.jsx
import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

// Mock wrapper so we can assert children render inside it
vi.mock("../../../src/components/Atoms/Page_Grid/Page_Grid", () => ({
  default: ({ children }) => <div data-testid="page-grid">{children}</div>,
}));

// Mock pages (match import strings from SignUpRoutes exactly)
vi.mock("../../../src/Pages/Landing_Page/Landing_Page", () => ({
  default: () => <div>Landing Page Mock</div>,
}));
vi.mock("../../../src/Pages/SignUp_Page/SignUp_Page", () => ({
  default: () => <div>SignUp Page Mock</div>,
}));
vi.mock("../../../src/Pages/SignUp_Page/Creators_SignUp", () => ({
  default: () => <div>Creators SignUp Mock</div>,
}));
vi.mock("../../../src/Pages/SignUp_Page/Profile_SignUp", () => ({
  default: () => <div>Profile SignUp Mock</div>,
}));

// SUT
import SignUpRoutes from "../../../src/Routes/SignUpRoutes.jsx";

function renderAt(path) {
  render(
    <MemoryRouter initialEntries={[path]}>
      <SignUpRoutes />
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

describe("SignUpRoutes", () => {
  it("routes /Creators_SignUp", () => {
    renderAt("/Creators_SignUp");
    expectInGrid(/creators signup mock/i);
  });

  it("routes /SignUp_Page", () => {
    renderAt("/SignUp_Page");
    expectInGrid(/signup page mock/i);
  });

  it("routes / (root) to Landing_Page", () => {
    renderAt("/");
    expectInGrid(/landing page mock/i);
  });

  it("routes /Profile_SignUp", () => {
    renderAt("/Profile_SignUp");
    expectInGrid(/profile signup mock/i);
  });

  it("unmatched path renders nothing", () => {
    renderAt("/not-a-route");
    expect(screen.queryByTestId("page-grid")).toBeNull();
  });

  it("is case-sensitive by default", () => {
    renderAt("/signup_page"); // lower-case
    expect(screen.queryByTestId("page-grid")).toBeNull();
  });
});
