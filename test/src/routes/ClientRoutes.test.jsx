// Test/src/Routes/ClientRoutes.test.jsx
import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

// Mock the wrapper so we can assert the page is inside it
vi.mock("../../../src/components/Atoms/Page_Grid/Page_Grid.jsx", () => ({
  default: ({ children }) => <div data-testid="page-grid">{children}</div>,
}));

// Mock each page with a distinct marker text
vi.mock("../../../src/Pages/Clients/Profile_Page/Creators_Page.jsx", () => ({
  default: () => <div>Creators Page Mock</div>,
}));
vi.mock("../../../src/Pages/Clients/Profile_Page/Profile_Page.jsx", () => ({
  default: () => <div>Profile Page Mock</div>,
}));
vi.mock("../../../src/Pages/Clients/Guest_Page/Guest_Page.jsx", () => ({
  default: () => <div>Guest Page Mock</div>,
}));
vi.mock("../../../src/Pages/Clients/Client_Page/Client_Page.jsx", () => ({
  default: () => <div>Client Page Mock</div>,
}));
vi.mock("../../../src/Pages/Clients/Moderator_Page/Moderator_Page.jsx", () => ({
  default: () => <div>Moderator Page Mock</div>,
}));
vi.mock("../../../src/Pages/Clients/Admin_Page/Admin_Page.jsx", () => ({
  default: () => <div>Admin Page Mock</div>,
}));
vi.mock("../../../src/Pages/Clients/Master_Page/Master_Page.jsx", () => ({
  default: () => <div>Master Page Mock</div>,
}));
vi.mock("../../../src/Pages/Clients/Client_Page/Client_Front_Page.jsx", () => ({
  default: () => <div>Client Front Page Mock</div>,
}));

// SUT
import ClientRoutes from "../../../src/Routes/ClientRoutes.jsx";

function renderAt(path) {
  render(
    <MemoryRouter initialEntries={[path]}>
      <ClientRoutes />
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

describe("ClientRoutes", () => {
  it("routes /Creators_Page", () => {
    renderAt("/Creators_Page");
    expectInGrid(/creators page mock/i);
  });

  it("routes /Profile_Page", () => {
    renderAt("/Profile_Page");
    expectInGrid(/profile page mock/i);
  });

  it("routes /Guest_Page", () => {
    renderAt("/Guest_Page");
    expectInGrid(/guest page mock/i);
  });

  it("routes /Client_Page", () => {
    renderAt("/Client_Page");
    expectInGrid(/client page mock/i);
  });

  it("routes /Moderator_Page", () => {
    renderAt("/Moderator_Page");
    expectInGrid(/moderator page mock/i);
  });

  it("routes /Admin_Page", () => {
    renderAt("/Admin_Page");
    expectInGrid(/admin page mock/i);
  });

  it("routes /Master_Page", () => {
    renderAt("/Master_Page");
    expectInGrid(/master page mock/i);
  });

  it("routes /Client_Front_Page", () => {
    renderAt("/Client_Front_Page");
    expectInGrid(/client front page mock/i);
  });

  it("unmatched route renders nothing", () => {
    renderAt("/nope");
    expect(screen.queryByTestId("page-grid")).toBeNull();
  });

  it("is case-sensitive by default", () => {
    renderAt("/client_page"); // lower-case
    expect(screen.queryByTestId("page-grid")).toBeNull();
  });
});
