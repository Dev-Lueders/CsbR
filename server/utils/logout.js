// server/utils/logout.js

/**
 * Logs the user out by calling your revoke endpoint, then optionally runs a
 * callback and navigates to another page.
 *
 * Works in the browser (uses fetch + window.location). If you want to use
 * axios, pass an axios instance in the options.
 */
export async function logout({
  revokeUrl = "/api/auth/logout",
  navigateTo = "/",
  axios, // optional axios instance
  onAfter, // optional callback after successful logout
} = {}) {
  try {
    if (axios) {
      // axios flow
      await axios.post(revokeUrl, {}, { withCredentials: true });
    } else {
      // fetch flow
      await fetch(revokeUrl, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      });
    }

    if (typeof onAfter === "function") onAfter();

    if (navigateTo) {
      window.location.assign(navigateTo);
    }
  } catch (err) {
    console.error("Logout failed:", err);
    throw err;
  }
}

// also provide a default export so either import style works
export default logout;
