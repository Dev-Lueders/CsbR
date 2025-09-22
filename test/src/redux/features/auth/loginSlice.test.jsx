// Test/src/redux/features/auth/loginSlice.test.js
import { describe, it, beforeEach, afterEach, expect, vi } from "vitest";
import { configureStore } from "@reduxjs/toolkit";

// Mock axios once for the whole file
vi.mock("axios", () => ({ default: { post: vi.fn() } }));
import axios from "axios";

// Import the slice under test
import reducer, {
  hydrate,
  localLogout,
  loginClient,
  logoutClient,
} from "../../../../src/redux/features/auth/loginSlice.js";

// Small helper to make a store with only this slice
const makeStore = () =>
  configureStore({
    reducer: { auth: reducer },
  });

describe("auth/loginSlice", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    // clean localStorage between tests
    localStorage.clear();
    vi.spyOn(Storage.prototype, "setItem");
    vi.spyOn(Storage.prototype, "getItem");
    vi.spyOn(Storage.prototype, "removeItem");
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  // ----------------- reducers -----------------

  it("hydrate loads client/token from localStorage (happy path)", () => {
    const initial = { client: null, token: null, status: "idle", error: null };
    const preloaded = {
      client: { id: "1", clientname: "nick" },
      token: "tok123",
    };
    localStorage.setItem("csbr_auth", JSON.stringify(preloaded));

    const state = reducer(initial, hydrate());
    expect(state.client).toEqual(preloaded.client);
    expect(state.token).toEqual(preloaded.token);
    expect(localStorage.getItem).toHaveBeenCalledWith("csbr_auth");
  });

  it("hydrate ignores malformed localStorage without throwing", () => {
    const initial = { client: null, token: null, status: "idle", error: null };
    localStorage.setItem("csbr_auth", "{this is not json");
    const state = reducer(initial, hydrate());
    expect(state.client).toBeNull();
    expect(state.token).toBeNull();
  });

  it("localLogout clears client/token and removes storage", () => {
    const populated = {
      client: { id: "1", clientname: "nick" },
      token: "tok",
      status: "succeeded",
      error: "x",
    };

    const state = reducer(populated, localLogout());

    // Intended behavior (note: current slice sets state.clientname=null, which is a bug)
    expect(state.client).toBeNull(); // will FAIL until you fix reducer to clear `client`
    expect(state.token).toBeNull();
    expect(state.status).toBe("idle");
    expect(state.error).toBeNull();
    expect(localStorage.removeItem).toHaveBeenCalledWith("csbr_auth");
  });

  // ----------------- login thunk -----------------

  it("loginClient success sets client/token, status, and persists to localStorage", async () => {
    const store = makeStore();
    axios.post.mockResolvedValue({
      data: {
        success: true,
        token: "TKN",
        client: { id: "1", clientname: "nick" },
      },
    });

    const thunk = store.dispatch(
      loginClient({ clientname: "nick", password: "pw", remember: true })
    );
    await thunk;

    const state = store.getState().auth;
    expect(state.status).toBe("succeeded");
    expect(state.client).toEqual({ id: "1", clientname: "nick" });
    expect(state.token).toBe("TKN");
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "csbr_auth",
      JSON.stringify({ client: state.client, token: state.token })
    );
    expect(axios.post).toHaveBeenCalledWith(
      expect.stringMatching(/\/api\/login$/),
      { clientname: "nick", password: "pw", remember: true },
      { withCredentials: false }
    );
  });

  it("loginClient rejected when API returns success:false (uses message)", async () => {
    const store = makeStore();
    axios.post.mockResolvedValue({
      data: { success: false, message: "Bad creds" },
    });

    const action = await store.dispatch(
      loginClient({ clientname: "nick", password: "nope" })
    );

    // thunk result
    expect(action.type).toMatch(/rejected$/);
    expect(action.payload).toEqual({ message: "Bad creds" });

    const state = store.getState().auth;
    expect(state.status).toBe("failed");
    expect(state.error).toBe("Bad creds");
    expect(localStorage.setItem).not.toHaveBeenCalled();
  });

  it("loginClient rejected on axios error (uses server message if available)", async () => {
    const store = makeStore();
    axios.post.mockRejectedValue({ response: { data: { message: "Boom" } } });

    const action = await store.dispatch(
      loginClient({ clientname: "nick", password: "nope" })
    );

    expect(action.type).toMatch(/rejected$/);
    expect(action.payload).toEqual({ message: "Boom" });

    const state = store.getState().auth;
    expect(state.status).toBe("failed");
    expect(state.error).toBe("Boom");
  });

  // ----------------- logout thunk -----------------

  it("logoutClient success clears local state and storage", async () => {
    const store = makeStore();

    // prime state as logged in
    localStorage.setItem(
      "csbr_auth",
      JSON.stringify({ client: { id: "1" }, token: "T" })
    );
    store.dispatch({
      type: loginClient.fulfilled.type,
      payload: { success: true, client: { id: "1" }, token: "T" },
    });

    axios.post.mockResolvedValue({ data: { success: true } });

    await store.dispatch(logoutClient({ clientname: "nick" }));

    const state = store.getState().auth;
    expect(state.client).toBeNull();
    expect(state.token).toBeNull();
    expect(state.status).toBe("idle");
    expect(state.error).toBeNull();
    expect(localStorage.removeItem).toHaveBeenCalledWith("csbr_auth");
    expect(axios.post).toHaveBeenCalledWith(
      expect.stringMatching(/\/api\/logout$/),
      { clientname: "nick" },
      { withCredentials: true }
    );
  });

  it("logoutClient rejected still clears state but stores error message", async () => {
    const store = makeStore();
    // prime as logged in
    store.dispatch({
      type: loginClient.fulfilled.type,
      payload: { success: true, client: { id: "1" }, token: "T" },
    });

    axios.post.mockRejectedValue({
      response: { data: { message: "Server down" } },
    });

    const action = await store.dispatch(logoutClient({ clientname: "nick" }));
    expect(action.type).toMatch(/rejected$/);
    expect(action.payload).toEqual({ message: "Server down" });

    const state = store.getState().auth;
    expect(state.client).toBeNull();
    expect(state.token).toBeNull();
    expect(state.status).toBe("idle");
    expect(state.error).toBe("Server down");
    expect(localStorage.removeItem).toHaveBeenCalledWith("csbr_auth");
  });
});
