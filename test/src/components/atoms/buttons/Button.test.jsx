import React from "react";
import { describe, it, beforeEach, afterEach, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Mock react-router-dom navigate so we don't need a real Router
let mockNavigate;
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return { ...actual, useNavigate: () => mockNavigate };
});

// SUT (adjust path if your layout differs)
import Button_btn from "../../../../../src/components/Atoms/Buttons/Button.jsx";

describe("Button_btn — component contract", () => {
  let propErrorSpy;

  beforeEach(() => {
    mockNavigate = vi.fn();
    propErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    propErrorSpy.mockRestore();
  });

  // A11y: aria-label is mandatory
  it("MUST expose an aria-label matching its label by default", () => {
    render(<Button_btn label="Launch" />);
    const btn = screen.getByRole("button", { name: /launch/i });
    // Hard requirement — this will FAIL until the component sets aria-label
    expect(btn).toHaveAttribute("aria-label", "Launch");
  });

  // Children support
  it("renders children inside the button", () => {
    render(
      <Button_btn label="Parent">
        <span data-testid="child">kid</span>
      </Button_btn>
    );
    const btn = screen.getByRole("button", { name: /parent/i });
    // This will FAIL until the component renders {children} as well
    expect(btn.querySelector("[data-testid='child']")).not.toBeNull();
  });

  // Type prop
  it("respects the `type` prop", () => {
    render(<Button_btn label="Save" type="submit" />);
    const btn = screen.getByRole("button", { name: /save/i });
    // This will FAIL while the component hardcodes type="type"
    expect(btn).toHaveAttribute("type", "submit");
  });

  // Style / className pass-through
  it("forwards style and className to the underlying <button>", () => {
    render(
      <Button_btn
        label="Styled"
        className="btn-primary"
        style={{ borderWidth: "3px" }}
      />
    );
    const btn = screen.getByRole("button", { name: /styled/i });
    // These will FAIL until props are forwarded to <button>
    expect(btn).toHaveClass("btn-primary");
    expect(btn).toHaveStyle({ borderWidth: "3px" });
  });

  // Grid contract
  it("accepts gridColumns/gridRows and exposes them (e.g., data attrs)", () => {
    render(<Button_btn label="Gridy" gridColumns={3} gridRows={2} />);
    const btn = screen.getByRole("button", { name: /gridy/i });
    // Choose your mapping; here we enforce data attributes.
    // This will FAIL until the component sets these.
    expect(btn).toHaveAttribute("data-grid-columns", "3");
    expect(btn).toHaveAttribute("data-grid-rows", "2");
  });

  // Visibility
  it("honors isVisible=false by hiding (hidden + aria-hidden)", () => {
    render(<Button_btn label="HideMe" isVisible={false} />);
    const btn = screen.getByRole("button", { name: /hideme/i });
    // This will FAIL until the component sets these when isVisible===false
    expect(btn).toHaveAttribute("hidden");
    expect(btn).toHaveAttribute("aria-hidden", "true");
  });

  // Behavior: onClick then navigate
  it("calls onClick, then navigates when navigateTo is provided", async () => {
    const order = [];
    const onClick = vi.fn(() => order.push("click"));
    mockNavigate.mockImplementation(() => order.push("nav"));

    render(<Button_btn label="Go" onClick={onClick} navigateTo="/next" />);
    await userEvent.click(screen.getByRole("button", { name: /go/i }));

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith("/next");
    expect(order).toEqual(["click", "nav"]);
  });

  // PropTypes contract — enforce your required/optionals
  it("PropTypes: requires options (array), label (string), onChange (func)", () => {
    // Missing required props -> should trigger prop-type warnings
    render(<Button_btn />);

    const messages = propErrorSpy.mock.calls
      .map((c) => c[0]?.toString?.() || "")
      .join("\n");

    // These will FAIL until PropTypes are defined as requested
    expect(messages).toMatch(/Failed prop type/i);
    expect(messages).toMatch(/`options` is marked as required/i);
    expect(messages).toMatch(/`label` is marked as required/i);
    expect(messages).toMatch(/`onChange` is marked as required/i);
  });

  it("PropTypes: validates optional gridColumns, gridRows, style, isVisible types", () => {
    // Provide WRONG types to force warnings
    render(
      <Button_btn
        label="BadTypes"
        options="not-an-array"
        onChange="not-a-func"
        gridColumns="3"
        gridRows="2"
        style="not-an-object"
        isVisible="nope"
      />
    );

    const messages = propErrorSpy.mock.calls
      .map((c) => c[0]?.toString?.() || "")
      .join("\n");

    // These will FAIL until PropTypes include these keys with correct types
    expect(messages).toMatch(/`options`.*array/i);
    expect(messages).toMatch(/`onChange`.*function/i);
    expect(messages).toMatch(/`gridColumns`.*number/i);
    expect(messages).toMatch(/`gridRows`.*number/i);
    expect(messages).toMatch(/`style`.*object/i);
    expect(messages).toMatch(/`isVisible`.*boolean/i);
  });

  it("PropTypes: no warnings when all props are valid", () => {
    propErrorSpy.mockClear();
    render(
      <Button_btn
        label="OK"
        options={[]}
        onChange={() => {}}
        gridColumns={4}
        gridRows={1}
        style={{ marginLeft: 4 }}
        isVisible
        className="ok"
      >
        Child
      </Button_btn>
    );
    
    expect(propErrorSpy).not.toHaveBeenCalled();
  });
});
