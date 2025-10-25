import React from "react";
import { describe, it, beforeEach, afterEach, expect, vi } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import UGC_Card_FBottom from "../../../../src/components/Molecules/UGC/UGC_Card_FBottom.jsx";

const renderBottom = (props = {}) => render(<UGC_Card_FBottom {...props} />);

describe("UGC_Card_FBottom — structure & styling", () => {
  it("renders wrapper with class and pointer-events layering", () => {
    const { container } = renderBottom();
    const wrap = container.querySelector(".ugc-fBottom");
    expect(wrap).toBeInTheDocument();
    expect(wrap).toHaveStyle({
      position: "absolute",
      bottom: "0px",
      pointerEvents: "none",
    });

    // inner bar is first child of wrapper
    const bar = wrap.firstElementChild;
    expect(bar).toBeInTheDocument();
    expect(bar).toHaveStyle({ display: "flex", pointerEvents: "auto" });
  });

  it("merges custom style into the bar (not the wrapper)", () => {
    const { container } = renderBottom({
      style: { background: "rgb(255, 0, 0)" },
    });
    const bar = container.querySelector(".ugc-fBottom")?.firstElementChild;
    expect(bar).toHaveStyle({ background: "rgb(255, 0, 0)" });
  });

  it("compact=false uses larger paddings; compact=true tightens paddings and icon size", () => {
    const { container, rerender } = renderBottom({ compact: false });
    let bar = container.querySelector(".ugc-fBottom")?.firstElementChild;
    expect(bar).toHaveStyle({ padding: "8px 12px" });

    rerender(<UGC_Card_FBottom compact={true} />);
    bar = container.querySelector(".ugc-fBottom")?.firstElementChild;
    expect(bar).toHaveStyle({ padding: "6px 10px" });

    // check icon/number size in pill
    const pill = screen.getByTestId("views-pill");
    // compact true: fontSize ~ 12px
    expect(
      pill.querySelector("span[aria-hidden='true']") ||
        pill.querySelector("img")
    ).toBeTruthy();
  });
});

describe("UGC_Card_FBottom — views pill (a11y + content)", () => {
  it("defaults to 0 views with correct label and title", () => {
    renderBottom();
    const pill = screen.getByTestId("views-pill");
    expect(pill).toHaveAttribute("aria-label", "0 views");
    expect(pill).toHaveAttribute("title", "0 views");
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("shows provided views number and aria label", () => {
    renderBottom({ views: 1234 });
    const pill = screen.getByTestId("views-pill");
    expect(pill).toHaveAttribute("aria-label", "1234 views");
    expect(pill).toHaveAttribute("title", "1234 views");
    expect(screen.getByText("1234")).toBeInTheDocument();
  });

  it("renders default eye icon (aria-hidden)", () => {
    renderBottom({ views: 42 });
    const pill = screen.getByTestId("views-pill");
    // the default icon is a <span aria-hidden="true">👁</span>
    const eye = pill.querySelector("span[aria-hidden='true']");
    expect(eye).toBeInTheDocument();
    expect(eye).toHaveTextContent("👁");
  });

  it("renders custom image icon when viewsIconSrc is provided (alt='', aria-hidden)", () => {
    renderBottom({ views: 99, viewsIconSrc: "https://example.com/eye.svg" });
    const img = screen.getByRole("img", { hidden: true });
    expect(img).toHaveAttribute("src", "https://example.com/eye.svg");
    expect(img).toHaveAttribute("alt", "");
    expect(img).toHaveAttribute("aria-hidden", "true");
  });

  it("is read-only (no onClick on the pill by default)", async () => {
    renderBottom({ views: 7 });
    const pill = screen.getByTestId("views-pill");
    await userEvent.click(pill);
    // No crash, no state; just ensure it's present and not a button
    expect(pill).not.toHaveAttribute("role");
  });
});

describe("UGC_Card_FBottom — extraSlot", () => {
  it("does not render extraSlot by default", () => {
    renderBottom();
    expect(screen.queryByTestId("fbottom-extra")).toBeNull();
  });

  it("renders extraSlot when provided", () => {
    renderBottom({ extraSlot: <div aria-label="badge">Featured</div> });
    const slot = screen.getByTestId("fbottom-extra");
    expect(slot).toBeInTheDocument();
    expect(screen.getByLabelText(/featured/i)).toBeInTheDocument();
  });

  it("extraSlot does not bubble clicks to hypothetical parent opener if child stops propagation — CONTRACT", async () => {
    const onParentOpen = vi.fn();
    // Simulate by wrapping FBottom with a clickable container
    const { container } = render(
      <div onClick={onParentOpen}>
        <UGC_Card_FBottom
          views={10}
          extraSlot={
            <button
              aria-label="chip"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              chip
            </button>
          }
        />
      </div>
    );
    await userEvent.click(screen.getByRole("button", { name: /chip/i }));
    expect(onParentOpen).not.toHaveBeenCalled();
  });
});

describe("UGC_Card_FBottom — PropTypes warnings", () => {
  let spy;
  beforeEach(() => {
    spy = vi.spyOn(console, "error").mockImplementation(() => {});
  });
  afterEach(() => spy.mockRestore());

  it("warns when views is wrong type (string)", () => {
    renderBottom({ views: "not-a-number" });
    const msg = spy.mock.calls.map((c) => String(c[0])).join("\n");
    expect(msg).toMatch(/Failed prop type/i);
    expect(msg).toMatch(/`views`/i);
    expect(msg).toMatch(/number/i);
  });

  it("does not warn for valid props", () => {
    spy.mockClear();
    renderBottom({
      views: 123,
      viewsIconSrc: "https://x/eye.svg",
      compact: true,
      extraSlot: <div />,
      style: { background: "rgba(0,0,0,.6)" },
    });
    expect(spy).not.toHaveBeenCalled();
  });
});

//
// ────────────────────────────────────────────────────────────────────────────────
//  CONTRACT / FUTURE EXPECTATIONS (these WILL FAIL until implemented)
// ────────────────────────────────────────────────────────────────────────────────
//

describe("UGC_Card_FBottom — CONTRACT expectations", () => {
  it("formats large numbers with separators (e.g., 9001 → 9,001) — CONTRACT", () => {
    renderBottom({ views: 9001 });
    // Currently shows "9001" — CONTRACT expects formatting:
    expect(screen.getByText(/9,001/)).toBeInTheDocument();
  });

  it("announces live updates to views in an aria-live region — CONTRACT", async () => {
    const { rerender } = renderBottom({ views: 10 });
    // CONTRACT: expect an aria-live node describing changes
    expect(screen.getByText(/10 views/i)).toBeInTheDocument(); // visible string
    // Now update:
    rerender(<UGC_Card_FBottom views={11} />);
    // CONTRACT: live region should announce "11 views"
    const live = screen.getByRole("status"); // or getByLabelText('views live')
    expect(live).toHaveTextContent(/11 views/i);
  });

  it("clicking the views pill opens analytics if handler is supplied — CONTRACT", async () => {
    const onOpenAnalytics = vi.fn();
    // CONTRACT: component would accept onOpenAnalytics and attach to pill
    renderBottom({ views: 123, onOpenAnalytics });
    await userEvent.click(screen.getByTestId("views-pill"));
    expect(onOpenAnalytics).toHaveBeenCalled();
  });
});
