// Test/src/Pages/Login_Page.test.jsx
import { describe, it, beforeEach, expect, vi } from "vitest";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// ---- CONTROL POINTS for mocks ----
let dispatchImpl; // we set this per-test to control success/failure
let capturedLoginPayload = null;

// Mock the thunk module the component imports
vi.mock("../../../src/redux/features/auth/loginSlice.js", () => {
  const loginClient = (payload) => {
    capturedLoginPayload = payload;
    // Component doesn't care what dispatch receives here; it awaits dispatch(...)
    // We'll control the returned action via dispatchImpl
    return { type: "auth/login/pending", meta: {} };
  };
  loginClient.fulfilled = {
    match: (action) => action?.type === "auth/login/fulfilled",
  };
  return { loginClient };
});

// Mock react-redux useDispatch so we can return our own dispatchImpl
vi.mock("react-redux", async () => {
  const actual = await vi.importActual("react-redux");
  return {
    ...actual,
    useDispatch: () => (arg) => dispatchImpl(arg),
  };
});

// Mock child components so we can actually interact with inputs
vi.mock("../../../src/components/Atoms/Input_Container/Text_Box.jsx", () => ({
  default: (props) => (
    <div>
      <label htmlFor={props.id}>{props.labelText}</label>
      <input
        id={props.id}
        name={props.name}
        placeholder={props.placeholderText}
        type={props.type}
        value={props.value}
        maxLength={props.maxLength}
        onChange={props.onChange}
      />
    </div>
  ),
}));

vi.mock("../../../src/components/Molecules/Form/Generic_Form.jsx", () => ({
  default: ({ onSubmit, children }) => (
    <form onSubmit={onSubmit} data-testid="generic-form">
      {children}
      <button type="submit">Login</button>
    </form>
  ),
}));

// Import the component under test
import Login_Page from "../../../src/Pages/Login_Page/Login_Page.jsx";

describe("Login_Page", () => {
  beforeEach(() => {
    capturedLoginPayload = null;
    // default dispatch: simulate a successful login result
    dispatchImpl = async () => ({
      type: "auth/login/fulfilled",
      payload: { client: { CsbR_Client_Tag: "testuser" } },
    });
  });

  it("lets me type creds, toggle show password, and submits happy path", async () => {
    const user = userEvent.setup();
    render(<Login_Page />);

    const clientInput = screen.getByLabelText(/client/i);
    const passInput = screen.getByLabelText(/password/i);
    const showPw = screen.getByLabelText(/show password/i);

    await user.type(clientInput, "nick");
    // default type is password (masked)
    expect(passInput).toHaveAttribute("type", "password");

    await user.type(passInput, "s3cret!");
    await user.click(showPw); // toggle to show
    expect(passInput).toHaveAttribute("type", "text");

    // submit
    await user.click(screen.getByRole("button", { name: /login/i }));

    // payload captured from mocked loginClient
    expect(capturedLoginPayload).toEqual({
      CsbR_Client_Tag: "nick",
      password: "s3cret!",
      remember: true, // default in component state
    });

    // No error UI on success
    expect(screen.queryByText(/login failed/i)).toBeNull();
  });

  it("includes remember=false when the checkbox is unchecked", async () => {
    const user = userEvent.setup();
    render(<Login_Page />);

    const remember = screen.getByLabelText(/stay logged in/i);
    // default true; toggle off
    await user.click(remember);

    const clientInput = screen.getByLabelText(/client/i);
    const passInput = screen.getByLabelText(/password/i);
    await user.type(clientInput, "jane");
    await user.type(passInput, "hunter2");

    await user.click(screen.getByRole("button", { name: /login/i }));

    expect(capturedLoginPayload).toEqual({
      CsbR_Client_Tag: "jane",
      password: "hunter2",
      remember: false,
    });
  });

  it("shows error message on rejected login", async () => {
    // Make dispatch simulate a rejected action
    dispatchImpl = async () => ({
      type: "auth/login/rejected",
      payload: { message: "Invalid credentials" },
      error: { message: "Invalid credentials" },
    });

    const user = userEvent.setup();
    render(<Login_Page />);

    await user.type(screen.getByLabelText(/client/i), "x");
    await user.type(screen.getByLabelText(/^password$/i), "y");
    await user.click(screen.getByRole("button", { name: /login/i }));

    // Component sets error text from action.payload.message (or action.error.message)
    expect(screen.getByText(/invalid credentials/i)).toBeInTheDocument();
  });

  it("trims CsbR_Client_Tag before dispatching", async () => {
    const user = userEvent.setup();
    render(<Login_Page />);

    await user.type(screen.getByLabelText(/client/i), "  spaced  ");
    await user.type(screen.getByLabelText(/^password$/i), "pw");
    await user.click(screen.getByRole("button", { name: /login/i }));

    expect(capturedLoginPayload.CsbR_Client_Tag).toBe("spaced");
  });
});
