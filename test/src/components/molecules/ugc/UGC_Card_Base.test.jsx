import React from "react";
import { describe, it, beforeEach, afterEach, expect, vi } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render, screen, within, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import UGC_Card_Base from "../../../../src/components/Molecules/UGC/UGC_Card_Base.jsx";

const baseGrid = { colStart: 1, colEnd: 3, rowStart: 2, rowEnd: 4 };

function renderCard(extraProps = {}, children = null) {
  return render(
    <UGC_Card_Base
      id="card-1"
      gridPosition={baseGrid}
      zIndex={200}
      radius={24}
      aspectRatio="16/9"
      background="#101010"
      borderColor="#222"
      elevation
      {...extraProps}
    >
      {children}
    </UGC_Card_Base>
  );
}

describe("UGC_Card_Base — a11y & semantics", () => {
  it("renders article with default aria-label", () => {
    renderCard();
    const article = screen.getByLabelText(/UGC card/i);
    expect(article).toHaveAttribute("role", "region");
    expect(article).toHaveAttribute("tabindex", "-1");
  });

  it("acts like a button when onOpen provided (role+tabindex)", () => {
    const onOpen = vi.fn();
    renderCard({ onOpen });
    const article = screen.getByRole("button", { name: /ugc card/i });
    expect(article).toHaveAttribute("tabindex", "0");
  });

  it("keyboard: Enter triggers onOpen", async () => {
    const onOpen = vi.fn();
    renderCard({ onOpen });
    const btn = screen.getByRole("button", { name: /ugc card/i });

    await userEvent.type(btn, "{Enter}");
    expect(onOpen).toHaveBeenCalledTimes(1);
  });

  it("keyboard: Space triggers onOpen and preventDefault is set", async () => {
    const onOpen = vi.fn((e) => {
      // e.defaultPrevented should be true
      expect(e.defaultPrevented).toBe(true);
    });
    renderCard({ onOpen });
    const btn = screen.getByRole("button", { name: /ugc card/i });

    await userEvent.type(btn, " ");
    expect(onOpen).toHaveBeenCalledTimes(1);
  });

  it("keyboard: random keys do not trigger onOpen", async () => {
    const onOpen = vi.fn();
    renderCard({ onOpen });
    const btn = screen.getByRole("button", { name: /ugc card/i });

    await userEvent.type(btn, "a{Tab}{Escape}");
    expect(onOpen).not.toHaveBeenCalled();
  });
});

describe("UGC_Card_Base — layout & styling", () => {
  it("applies gridPosition and zIndex on <article>", () => {
    renderCard();
    const article = screen.getByLabelText(/UGC card/i);
    expect(article).toHaveStyle({
      gridColumn: "1 / 3",
      gridRow: "2 / 4",
      zIndex: "5",
      position: "relative",
    });
  });

  it("applies inner card styles: radius, bg, border, elevation, aspectRatio", () => {
    renderCard();
    const article = screen.getByLabelText(/UGC card/i);
    const inner = within(article).getByRole("generic");
    expect(inner).toHaveStyle({
      borderRadius: "24px",
      background: "#101010",
      border: "1px solid #222",
      boxShadow: "0 8px 24px rgba(0,0,0,.08)",
      aspectRatio: "16/9",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      touchAction: "manipulation",
    });
  });

  it("when aspectRatio is falsey (''), uses minHeight=200 instead", () => {
    renderCard({ aspectRatio: "" });
    const inner = within(screen.getByLabelText(/UGC card/i)).getByRole(
      "generic"
    );
    expect(inner).toHaveStyle({ minHeight: "200px" });
  });

  it("style prop merges and can override inner styles", () => {
    renderCard({ style: { background: "#ff00ff", borderRadius: "8px" } });
    const inner = within(screen.getByLabelText(/UGC card/i)).getByRole(
      "generic"
    );
    expect(inner).toHaveStyle({ background: "#ff00ff", borderRadius: "8px" });
  });
});

describe("UGC_Card_Base — interaction", () => {
  it("click triggers onOpen if provided", async () => {
    const onOpen = vi.fn();
    renderCard({ onOpen });
    const btn = screen.getByRole("button", { name: /ugc card/i });
    await userEvent.click(btn);
    expect(onOpen).toHaveBeenCalledTimes(1);
  });

  it("click does nothing without onOpen (region)", async () => {
    renderCard();
    const region = screen.getByRole("region", { name: /ugc card/i });
    await userEvent.click(region);
    // no crash, no action expected
  });

  it("clicking on child action buttons should NOT open card (requires stopPropagation) — CONTRACT", async () => {
    const onOpen = vi.fn();
    const onVote = vi.fn();
    renderCard(
      { onOpen },
      <div>
        <button
          aria-label="vote up"
          onClick={(e) => {
            e.stopPropagation();
            onVote();
          }}
        >
          👍
        </button>
      </div>
    );
    await userEvent.click(screen.getByRole("button", { name: /vote up/i }));
    expect(onVote).toHaveBeenCalledTimes(1);
    expect(onOpen).not.toHaveBeenCalled();
  });

  it("WITHOUT stopPropagation, clicking action bubbles and opens the card (current behavior)", async () => {
    const onOpen = vi.fn();
    const onShare = vi.fn();
    renderCard(
      { onOpen },
      <div>
        <button aria-label="share" onClick={() => onShare()}>
          Share
        </button>
      </div>
    );
    await userEvent.click(screen.getByRole("button", { name: /share/i }));
    expect(onShare).toHaveBeenCalledTimes(1);
    expect(onOpen).toHaveBeenCalledTimes(1);
  });
});

describe("UGC_Card_Base — content slots (children)", () => {
  it("renders text content in children", () => {
    renderCard({}, <div>Some caption text</div>);
    expect(screen.getByText(/Some caption text/i)).toBeInTheDocument();
  });

  it("renders a <video> in children and preserves attributes", () => {
    renderCard(
      {},
      <video data-testid="vid" src="http://example.com/v.mp4" controls />
    );
    const vid = screen.getByTestId("vid");
    expect(vid).toHaveAttribute("src", "http://example.com/v.mp4");
    expect(vid).toHaveAttribute("controls");
  });

  it("renders stats section in children", () => {
    renderCard(
      {},
      <div aria-label="stats">
        <span aria-label="likes">42</span>
        <span aria-label="views">9001</span>
      </div>
    );
    expect(screen.getByLabelText(/stats/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/likes/i)).toHaveTextContent("42");
    expect(screen.getByLabelText(/views/i)).toHaveTextContent("9001");
  });

  it("renders voting UI in children and handles up/down", async () => {
    const up = vi.fn();
    const down = vi.fn();
    renderCard(
      {},
      <div>
        <button
          aria-label="upvote"
          onClick={(e) => {
            e.stopPropagation();
            up();
          }}
        >
          ⬆️
        </button>
        <button
          aria-label="downvote"
          onClick={(e) => {
            e.stopPropagation();
            down();
          }}
        >
          ⬇️
        </button>
      </div>
    );
    await userEvent.click(screen.getByRole("button", { name: /upvote/i }));
    await userEvent.click(screen.getByRole("button", { name: /downvote/i }));
    expect(up).toHaveBeenCalledTimes(1);
    expect(down).toHaveBeenCalledTimes(1);
  });
});

describe("UGC_Card_Base — PropTypes warnings (type coverage)", () => {
  let spy;
  beforeEach(() => {
    spy = vi.spyOn(console, "error").mockImplementation(() => {});
  });
  afterEach(() => spy.mockRestore());

  it("warns when gridPosition numbers are wrong types (strings)", () => {
    render(
      <UGC_Card_Base
        id="x"
        gridPosition={{
          colStart: "1",
          colEnd: "2",
          rowStart: "3",
          rowEnd: "4",
        }}
      />
    );
    const msg = spy.mock.calls.map((c) => String(c[0])).join("\n");
    expect(msg).toMatch(/Failed prop type/);
    expect(msg).toMatch(/`colStart` is marked as required/); // and will complain about type
  });
});

//
// ────────────────────────────────────────────────────────────────────────────────
//   CONTRACT / FUTURE FEATURES — these WILL FAIL until you implement them
// ────────────────────────────────────────────────────────────────────────────────
//

describe("UGC_Card_Base — CONTRACT features (expected future behavior)", () => {
  it("supports flipping: toggles data-flipped attribute when flip control used — CONTRACT", async () => {
    renderCard();
    const card = screen.getByLabelText(/ugc card/i);
    // Expect default not flipped
    expect(card).not.toHaveAttribute("data-flipped");
    // Simulate a flip control in children (your future implementation should update state)
    // This assertion will FAIL until you wire flipping and set data-flipped="true"
    fireEvent(card, new Event("flip")); // placeholder event
    expect(card).toHaveAttribute("data-flipped", "true");
  });

  it("supports copy link: clicking 'copy' copies to clipboard and shows toast — CONTRACT", async () => {
    const write = vi.fn().mockResolvedValue();
    navigator.clipboard = { writeText: write };

    renderCard(
      {},
      <button aria-label="copy link" onClick={(e) => e.stopPropagation()}>
        Copy
      </button>
    );
    await userEvent.click(screen.getByRole("button", { name: /copy link/i }));
    // CONTRACT: the card should expose canonical share URL, e.g., data-share-url
    const card = screen.getByLabelText(/ugc card/i);
    const url = card.getAttribute("data-share-url"); // will be null today
    await expect(write).toHaveBeenCalledWith(url);
  });

  it("supports share: invokes Web Share API when available — CONTRACT", async () => {
    const share = vi.fn().mockResolvedValue();
    navigator.share = share;

    renderCard(
      {},
      <button aria-label="share" onClick={(e) => e.stopPropagation()}>
        Share
      </button>
    );
    await userEvent.click(screen.getByRole("button", { name: /share/i }));
    expect(share).toHaveBeenCalled(); // will FAIL until wired
  });

  it("supports remove: clicking remove emits 'remove' event or calls onRemove prop — CONTRACT", async () => {
    const onRemove = vi.fn();
    renderCard(
      { onRemove },
      <button aria-label="remove" onClick={(e) => e.stopPropagation()}>
        X
      </button>
    );
    await userEvent.click(screen.getByRole("button", { name: /remove/i }));
    expect(onRemove).toHaveBeenCalled(); // will FAIL (prop not supported yet)
  });

  it("supports archive: toggles data-archived and calls onArchive — CONTRACT", async () => {
    const onArchive = vi.fn();
    renderCard(
      { onArchive },
      <button aria-label="archive" onClick={(e) => e.stopPropagation()}>
        Archive
      </button>
    );
    const card = screen.getByLabelText(/ugc card/i);
    expect(card).not.toHaveAttribute("data-archived");

    await userEvent.click(screen.getByRole("button", { name: /archive/i }));
    expect(card).toHaveAttribute("data-archived", "true"); // will FAIL
    expect(onArchive).toHaveBeenCalled(); // will FAIL
  });

  it("exposes copy/share/remove/archive controls via ARIA and prevents bubbling to card — CONTRACT", async () => {
    const onOpen = vi.fn();
    renderCard(
      { onOpen },
      <div>
        <button aria-label="copy link" onClick={(e) => e.stopPropagation()}>
          Copy
        </button>
        <button aria-label="share card" onClick={(e) => e.stopPropagation()}>
          Share
        </button>
        <button aria-label="remove card" onClick={(e) => e.stopPropagation()}>
          Remove
        </button>
        <button aria-label="archive card" onClick={(e) => e.stopPropagation()}>
          Archive
        </button>
      </div>
    );

    await userEvent.click(screen.getByRole("button", { name: /copy link/i }));
    await userEvent.click(screen.getByRole("button", { name: /share card/i }));
    await userEvent.click(screen.getByRole("button", { name: /remove card/i }));
    await userEvent.click(
      screen.getByRole("button", { name: /archive card/i })
    );
    expect(onOpen).not.toHaveBeenCalled(); // will PASS due to stopPropagation in children
  });
});
