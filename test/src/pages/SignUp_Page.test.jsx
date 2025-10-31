// Test/src/Pages/SignUp_Page.test.jsx
import { describe, it, beforeEach, expect, vi } from "vitest";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// ---- dynamic selector state + dispatch capture ----
let selectorSignupState;
let dispatchMock;

// mock react-redux to control state + capture dispatches
vi.mock("react-redux", async () => {
  const actual = await vi.importActual("react-redux");
  return {
    ...actual,
    useSelector: (sel) => sel({ signup: selectorSignupState }),
    useDispatch: () => dispatchMock,
  };
});

// mock axios
vi.mock("axios", () => ({
  default: { post: vi.fn() },
}));

// mock child components so we can actually interact
vi.mock("../../../src/components/Atoms/Input_Container/Text_Box.jsx", () => ({
  default: (props) => (
    <div>
      <label htmlFor={props.id}>{props.labelText}</label>
      {/* uncontrolled so typing works without a real store */}
      <input
        id={props.id}
        name={props.id}
        placeholder={props.placeholderText}
        onChange={props.onChange}
        defaultValue={props.value}
      />
    </div>
  ),
}));

vi.mock("../../../src/components/Atoms/Input_Container/Calendar.jsx", () => ({
  default: (props) => (
    <div>
      <label htmlFor={props.id}>DOB</label>
      <input
        id={props.id}
        type="date"
        onChange={props.onChange}
        defaultValue={props.value}
      />
    </div>
  ),
}));

vi.mock("../../../src/components/Atoms/Check_Box/Check_Box.jsx", () => ({
  default: ({ id, label, onChange, checked }) => (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="checkbox"
        onChange={onChange}
        defaultChecked={checked}
      />
    </div>
  ),
}));

vi.mock("../../../src/components/Molecules/Form/Generic_Form.jsx", () => ({
  default: ({ onSubmit, children }) => (
    <form onSubmit={onSubmit} data-testid="signup-form">
      {children}
      <button type="submit">Submit</button>
    </form>
  ),
}));

// import component under test
import SignUp_Page from "../../../src/Pages/SignUp_Page/SignUp_Page.jsx";
import axios from "axios";

describe("SignUp_Page", () => {
  beforeEach(() => {
    dispatchMock = vi.fn();
    selectorSignupState = {
      CsbR_Client_Tag: "",
      email: "",
      password: "",
      confirm_password: "",
      role: "guest",
      address: {
        street: "",
        apartNo: "",
        city: "",
        state: "",
        zip_code: "",
        country: "",
      },
      terms: false,
      dob: "",
    };
    // neutralize alert + localStorage side effects
    vi.stubGlobal("alert", vi.fn());
    vi.spyOn(Storage.prototype, "setItem");
    vi.restoreAllMocks(); // but keep alert stub above
    vi.stubGlobal("alert", vi.fn());
    vi.spyOn(Storage.prototype, "setItem");
  });

  it("dispatches address updates as address.<field>", async () => {
    const user = userEvent.setup();
    render(<SignUp_Page />);

    await user.type(screen.getByLabelText(/street/i), "123 Main");
    // handleChange dispatches once per keypress; we only assert last call payload
    const last = dispatchMock.mock.calls.at(-1)[0];
    expect(last.type).toMatch(/updateField/);
    expect(last.payload).toEqual({ key: "address.street", value: "123 Main" });
  });

  it("auto-assigns role=master when CsbR_Client_Tag === MasterMiyoto, else creator", async () => {
    const user = userEvent.setup();
    render(<SignUp_Page />);

    // Type master name
    await user.clear(screen.getByLabelText(/client name/i));
    await user.type(screen.getByLabelText(/client name/i), "MasterMiyoto");

    // Find the two relevant dispatches (CsbR_Client_Tag + role)
    const roleSet = dispatchMock.mock.calls
      .map(([a]) => a)
      .filter((a) => a.type.match(/updateField/) && a.payload.key === "role")
      .at(-1);

    expect(roleSet.payload).toEqual({ key: "role", value: "master" });

    // Type a non-master name -> creator
    dispatchMock.mockClear();
    await user.clear(screen.getByLabelText(/client name/i));
    await user.type(screen.getByLabelText(/client name/i), "someone");

    const roleSet2 = dispatchMock.mock.calls
      .map(([a]) => a)
      .find((a) => a.payload?.key === "role");
    expect(roleSet2.payload).toEqual({ key: "role", value: "creator" });
  });

  it("checkbox toggles dispatch updateField with boolean", async () => {
    const user = userEvent.setup();
    render(<SignUp_Page />);
    await user.click(screen.getByLabelText(/terms and conditions/i));

    const call = dispatchMock.mock.calls.find(
      ([a]) => a.payload?.key === "terms"
    );
    expect(call[0].payload).toEqual({ key: "terms", value: true });
  });

  it("file input dispatches selected file", async () => {
    render(<SignUp_Page />);
    const file = new File(["avatar"], "me.png", { type: "image/png" });
    const input = screen.getByLabelText(/upload profile picture/i, {
      selector: "input",
    });
    await fireEvent.change(input, { target: { files: [file] } });

    const call = dispatchMock.mock.calls.find(
      ([a]) => a.payload?.key === "profile_picture"
    );
    expect(call[0].payload.key).toBe("profile_picture");
    expect(call[0].payload.value).toBe(file);
  });

  it("blocks submit and alerts when required fields are missing", async () => {
    // Only set CsbR_Client_Tag and password; omit email -> should alert for email
    selectorSignupState = {
      ...selectorSignupState,
      CsbR_Client_Tag: "nick",
      password: "pw",
      confirm_password: "pw",
    };

    const user = userEvent.setup();
    render(<SignUp_Page />);

    await user.click(screen.getByRole("button", { name: /submit/i }));
    expect(alert).toHaveBeenCalledWith(
      expect.stringMatching(/missing required field: email/i)
    );
    expect(axios.post).not.toHaveBeenCalled();
  });

  it("submits to axios, stores form, alerts success, and dispatches resetForm on success", async () => {
    selectorSignupState = {
      ...selectorSignupState,
      CsbR_Client_Tag: "nick",
      email: "n@x.com",
      password: "pw",
      confirm_password: "pw",
      address: {
        street: "",
        apartNo: "",
        city: "",
        state: "",
        zip_code: "",
        country: "",
      },
    };
    axios.post.mockResolvedValue({ data: { success: true } });

    const user = userEvent.setup();
    render(<SignUp_Page />);

    await user.click(screen.getByRole("button", { name: /submit/i }));

    expect(Storage.prototype.setItem).toHaveBeenCalledWith(
      "signupFormData",
      JSON.stringify(selectorSignupState)
    );
    expect(axios.post).toHaveBeenCalledWith(
      "http://localhost:5000/api/signup",
      selectorSignupState
    );

    // look for a resetForm action
    const reset = dispatchMock.mock.calls
      .map(([a]) => a)
      .find((a) => /resetForm/i.test(a.type));
    expect(reset).toBeTruthy();
    expect(alert).toHaveBeenCalledWith(
      expect.stringMatching(/signup successful/i)
    );
  });

  it("alerts failure message when api returns success:false", async () => {
    selectorSignupState = {
      ...selectorSignupState,
      CsbR_Client_Tag: "nick",
      email: "n@x.com",
      password: "pw",
      confirm_password: "pw",
    };
    axios.post.mockResolvedValue({ data: { success: false, message: "Nope" } });

    const user = userEvent.setup();
    render(<SignUp_Page />);

    await user.click(screen.getByRole("button", { name: /submit/i }));
    expect(alert).toHaveBeenCalledWith(
      expect.stringMatching(/signup failed.*nope/i)
    );
  });

  it("alerts catch error message on axios error", async () => {
    selectorSignupState = {
      ...selectorSignupState,
      CsbR_Client_Tag: "nick",
      email: "n@x.com",
      password: "pw",
      confirm_password: "pw",
    };
    axios.post.mockRejectedValue({ response: { data: { error: "Boom" } } });

    const user = userEvent.setup();
    render(<SignUp_Page />);

    await user.click(screen.getByRole("button", { name: /submit/i }));
    expect(alert).toHaveBeenCalledWith(
      expect.stringMatching(/something went wrong.*boom/i)
    );
  });
});
