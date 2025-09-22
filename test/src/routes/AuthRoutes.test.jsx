// Test/src/Routes/AuthRoutes.test.jsx
import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

// --- Mock child components so we assert behavior, not implementation ---
vi.mock("../../../src/components/Atoms/Page_Grid/Page_Grid.jsx", () => ({
  default: ({ children }) => <div data-testid="page-grid">{children}</div>,
}));

vi.mock("../../../src/Pages/Login_Page/Login_Page.jsx", () => ({
  default: () => <div>Login Page Mock</div>,
}));

// The file imports these pages; stub them to avoid weight/path issues.
vi.mock("../../../src/Pages/Clients/Admin_Page/Admin_Page.jsx", () => ({
  default: () => null,
}));
vi.mock(
  "../../../src/Pages/Clients/Creator_Profile_Page/Creator_Profile_Page.jsx",
  () => ({ default: () => null })
);
vi.mock("../../../src/Pages/Clients/Guest_Page/Guest_Page.jsx", () => ({
  default: () => null,
}));
vi.mock("../../../src/Pages/Clients/Moderator_Page/Moderator_Page.jsx", () => ({
  default: () => null,
}));
vi.mock("../../../src/Pages/Clients/Member_Page/Member_Page.jsx", () => ({
  default: () => null,
}));

// SUT
import AuthRoutes from "../../../src/Routes/AuthRoutes.jsx";

describe("AuthRoutes", () => {
  it("renders Login_Page inside Page_Grid when path is /Login_Page", () => {
    render(
      <MemoryRouter initialEntries={["/Login_Page"]}>
        <AuthRoutes />
      </MemoryRouter>
    );

    const grid = screen.getByTestId("page-grid");
    const login = screen.getByText(/login page mock/i);

    // ensure both rendered and that Login is wrapped by Page_Grid
    expect(grid).toBeTruthy();
    expect(login).toBeTruthy();
    expect(grid.contains(login)).toBe(true);
  });

  it("does not render anything for an unmatched route", () => {
    render(
      <MemoryRouter initialEntries={["/not-a-route"]}>
        <AuthRoutes />
      </MemoryRouter>
    );

    expect(screen.queryByTestId("page-grid")).toBeNull();
    expect(screen.queryByText(/login page mock/i)).toBeNull();
  });

  it("path is case-sensitive by default: /login_page should not match /Login_Page", () => {
    render(
      <MemoryRouter initialEntries={["/login_page"]}>
        <AuthRoutes />
      </MemoryRouter>
    );

    expect(screen.queryByTestId("page-grid")).toBeNull();
    expect(screen.queryByText(/login page mock/i)).toBeNull();
  });
});
