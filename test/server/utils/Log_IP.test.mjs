// Test/Server/utils/LogIp/Log_IP.test.mjs
import { expect } from "chai";
import sinon from "sinon";
import crypto from "crypto";

// Import your ESM module (default export)
import logIp from "../../../server/utils/LogIp/Log_IP.js";

describe("utils/LogIp/logIp", () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    // deterministic hashing for tests
    process.env = { ...OLD_ENV, IP_SALT: "TEST_SALT" };
    sinon.restore();
  });

  afterEach(() => {
    process.env = OLD_ENV;
    sinon.restore();
  });

  it("handles null/empty input gracefully", () => {
    const res = logIp(null, { includeRaw: true, toConsole: false });
    expect(res.ts).to.be.instanceOf(Date);
    expect(res.ipHash).to.equal(null);
    expect(res.ipTrunc).to.equal(null);
    expect(res.raw).to.equal(null);
  });

  it("hashes and truncates IPv4 to /16 and returns raw when requested", () => {
    const ip = "123.45.67.89";
    const expectedHash = crypto
      .createHmac("sha256", "TEST_SALT")
      .update(ip)
      .digest("hex");

    const res = logIp(ip, { includeRaw: true, toConsole: false });

    expect(res.ts).to.be.instanceOf(Date);
    expect(res.ipHash).to.equal(expectedHash);
    expect(res.ipTrunc).to.equal("123.45.0.0/16");
    expect(res.raw).to.equal(ip);
  });

  it("normalizes IPv4-mapped IPv6 (::ffff:) before hashing/truncation and logs when toConsole=true", () => {
    const ip = "::ffff:10.20.30.40";
    const normalized = "10.20.30.40";
    const expectedHash = crypto
      .createHmac("sha256", "TEST_SALT")
      .update(normalized)
      .digest("hex");

    const spy = sinon.spy(console, "log");
    const res = logIp(ip, { includeRaw: true, toConsole: true });

    expect(res.ipHash).to.equal(expectedHash);
    expect(res.ipTrunc).to.equal("10.20.0.0/16");
    expect(res.raw).to.equal(normalized);

    expect(spy.calledOnce).to.equal(true);
    const [label, payload] = spy.firstCall.args;
    expect(label).to.equal("[logIp]");
    expect(payload).to.have.property("ipHash", expectedHash);
  });

  it("does not log when toConsole=false", () => {
    const spy = sinon.spy(console, "log");
    logIp("1.2.3.4", { toConsole: false });
    expect(spy.called).to.equal(false);
  });

  it("leaves non-IPv4 (e.g., IPv6) untruncated", () => {
    const ip = "2001:db8::1";
    const expectedHash = crypto
      .createHmac("sha256", "TEST_SALT")
      .update(ip)
      .digest("hex");

    const res = logIp(ip, { includeRaw: true, toConsole: false });

    expect(res.ipHash).to.equal(expectedHash);
    expect(res.ipTrunc).to.equal(ip); // unchanged
    expect(res.raw).to.equal(ip);
  });

  it("omits raw when includeRaw=false", () => {
    const res = logIp("8.8.8.8", { includeRaw: false, toConsole: false });
    expect(res).to.not.have.property("raw");
  });
});
