import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

// Mock the wrapper so we can assert child is inside it
vi.mock("../../../src/components/Atoms/Page_Grid/Page_Grid", () => ({
  default: ({ children }) => <div data-testid="page-grid">{children}</div>,
}));

// Mock each page with a distinctive marker text
vi.mock("../../../src/Pages/Games/Games_Page", () => ({
  default: () => <div>Games Page Mock</div>,
}));
vi.mock("../../../src/Pages/Games/PGA2K/PGA2K", () => ({
  default: () => <div>PGA2K Mock</div>,
}));
vi.mock(
  "../../../src/Pages/Games/PGA2K/2K23/Search/Basic/Search_Page_PGA2K23",
  () => ({
    default: () => <div>Search Page PGA2K23 Mock</div>,
  })
);
vi.mock(
  "../../../src/Pages/Games/PGA2K/2K23/Search/Search_Results/Results_Page_PGA2K23",
  () => ({
    default: () => <div>Results Page PGA2K23 Mock</div>,
  })
);
vi.mock(
  "../../../src/Pages/Games/PGA2K/2K23/Adding Content/Content/Long_Form/PGA2K23_C_Long",
  () => ({
    default: () => <div>PGA2K23 C Long Mock</div>,
  })
);
vi.mock(
  "../../../src/Pages/Games/PGA2K/2K23/Adding Content/Reviews/Long_Form/PGA2K23_R_Long",
  () => ({
    default: () => <div>PGA2K23 R Long Mock</div>,
  })
);
vi.mock(
  "../../../src/Pages/Games/PGA2K/2K25/Search/Basic/Search_Page_2K25",
  () => ({
    default: () => <div>Search Page 2K25 Mock</div>,
  })
);
vi.mock(
  "../../../src/Pages/Games/PGA2K/2K25/Search/Search_Results/Results_Page_2K25",
  () => ({
    default: () => <div>Results Page 2K25 Mock</div>,
  })
);
vi.mock("../../../src/Pages/Games/PGA2K/Content/Course_Review", () => ({
  default: () => <div>Course Review Mock</div>,
}));

// SUT
import GameRoutes from "../../../src/Routes/GameRoutes.jsx";

function renderAt(path) {
  render(
    <MemoryRouter initialEntries={[path]}>
      <GameRoutes />
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

describe("GameRoutes", () => {
  it("routes '' (root) to Games_Page", () => {
    renderAt("/");
    expectInGrid(/games page mock/i);
  });

  it("routes /PGA2K", () => {
    renderAt("/PGA2K");
    expectInGrid(/pga2k mock/i);
  });

  it("routes /Search_Page_PGA2K23", () => {
    renderAt("/Search_Page_PGA2K23");
    expectInGrid(/search page pga2k23 mock/i);
  });

  it("routes /Results_Page_PGA2K23", () => {
    renderAt("/Results_Page_PGA2K23");
    expectInGrid(/results page pga2k23 mock/i);
  });

  it("routes /PGA2K23_C_Long", () => {
    renderAt("/PGA2K23_C_Long");
    expectInGrid(/pga2k23 c long mock/i);
  });

  it("routes /PGA2K23_R_Long", () => {
    renderAt("/PGA2K23_R_Long");
    expectInGrid(/pga2k23 r long mock/i);
  });

  it("routes /Search_Page_PGA2K25", () => {
    renderAt("/Search_Page_PGA2K25");
    expectInGrid(/search page 2k25 mock/i);
  });

  it("routes /Results_Page_PGA2K25", () => {
    renderAt("/Results_Page_PGA2K25");
    expectInGrid(/results page 2k25 mock/i);
  });

  it("routes /Course_Review", () => {
    renderAt("/Course_Review");
    expectInGrid(/course review mock/i);
  });

  it("unmatched path renders nothing", () => {
    renderAt("/nope");
    expect(screen.queryByTestId("page-grid")).toBeNull();
  });

  it("is case-sensitive by default", () => {
    renderAt("/pga2k"); // lower-case
    expect(screen.queryByTestId("page-grid")).toBeNull();
  });
});
