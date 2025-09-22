import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import {
  assertAriaLabel,
  assertStyleAndClass,
  assertGridAttrs,
  assertHiddenWhenFalse,
  withPropTypeSpy,
} from "../../../../utils/componentContract";

import RadioButton from "../../../../../src/components/Atoms/Buttons/Radio.jsx";

describe("RadioButton — contract", () => {
  it("input radio has aria-label", () => {
    render(
      <RadioButton label="Choice A" name="g" value="A" onChange={() => {}} />
    );
    const input = screen.getByRole("radio", { name: /choice a/i });
    assertAriaLabel(input, "Choice A"); // will fail until input gets aria-label
  });

  it("forwards className & style; grid attrs on container", () => {
    render(
      <RadioButton
        label="Styled"
        name="g"
        value="A"
        onChange={() => {}}
        className="x"
        style={{ borderWidth: "3px" }}
        gridColumns={3}
        gridRows={2}
      />
    );
    const labelEl = screen.getByLabelText(/styled/i, { selector: "label" });
    assertStyleAndClass(labelEl, {
      className: "x",
      styleKv: { borderWidth: "3px" },
    });
    assertGridAttrs(labelEl, { cols: 3, rows: 2 }); // will fail until you add data-* props
  });

  it("isVisible=false hides container", () => {
    render(
      <RadioButton
        label="HideMe"
        name="g"
        value="A"
        onChange={() => {}}
        isVisible={false}
      />
    );
    const labelEl = screen.getByLabelText(/hideme/i, { selector: "label" });
    assertHiddenWhenFalse(labelEl); // will fail until implemented
  });

  it("PropTypes contract warnings", () => {
    const msgs = withPropTypeSpy(
      () => render(<RadioButton name="g" value="A" />) // missing required on purpose
    );
    expect(msgs).toMatch(/Failed prop type/i);
    expect(msgs).toMatch(/`options` is marked as required/i);
    expect(msgs).toMatch(/`label` is marked as required/i);
    expect(msgs).toMatch(/`onChange` is marked as required/i);
  });
});
