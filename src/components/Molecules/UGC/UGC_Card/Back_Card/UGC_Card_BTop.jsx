// src/components/Molecules/UGC/UGC_Card_BTop.jsx
import React, { memo } from "react";
import PropTypes from "prop-types";

/** tiny slug helper for default routes */
const slugify = (s = "") =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/**
 * Back top overlay:
 * - "More information" with dynamic link to creator profile
 * - Diagonal UGC number line (35–45°) in the corner
 * - Sits INSIDE UGC_Card_BBase (absolute overlay)
 */
function UGC_Card_BTop({
  creatorId,
  creatorName,
  href, // explicit URL (overrides routeBuilder/default)
  routeBuilder, // function({ id, name, slug }) => string
  LinkComponent, // optional router Link component
  linkTarget = "_self",

  ugcNumber, // e.g., "UGC-00420"
  angleDeg = 40, // 35–45 looks right
  compact = false,
  style,
}) {
  // build profile link
  const slug = slugify(creatorName);
  const profileHref =
    href ??
    (routeBuilder
      ? routeBuilder({ id: creatorId, name: creatorName, slug })
      : `/creator/${creatorId ?? slug}`);

  const wrap = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    pointerEvents: "none",
  };

  const bar = {
    pointerEvents: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    padding: compact ? "6px 10px" : "10px 14px",
    background: "linear-gradient(180deg, rgba(0,0,0,.65), rgba(0,0,0,.25))",
    color: "#fff",
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit",
    backdropFilter: "blur(2px)",
    WebkitBackdropFilter: "blur(2px)",
    ...style,
  };

  const label = { margin: 0, fontSize: compact ? 12 : 13, opacity: 0.85 };
  const name = {
    margin: 0,
    fontWeight: 600,
    fontSize: compact ? 13 : 14,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: 220,
  };

  const linkStyle = {
    display: "inline-flex",
    alignItems: "baseline",
    gap: 8,
    color: "#fff",
    textDecoration: "none",
    padding: compact ? "4px 8px" : "6px 10px",
    borderRadius: 10,
    border: "1px solid rgba(255,255,255,.3)",
    background: "rgba(255,255,255,.08)",
  };

  // UGC number diagonal
  const diagWrap = {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    padding: compact ? "4px 10px" : "6px 12px",
    borderRadius: 10,
    border: "1px solid rgba(255,255,255,.3)",
    background: "rgba(255,255,255,.08)",
    fontWeight: 600,
    fontSize: compact ? 12 : 13,
  };

  const line = {
    content: '""',
    position: "absolute",
    top: -6,
    right: -6,
    width: 110,
    height: 0,
    borderTop: "2px solid rgba(255,255,255,.45)",
    transform: `rotate(${angleDeg}deg)`,
    transformOrigin: "right top",
    pointerEvents: "none",
  };

  const CreatorLink = LinkComponent || "a";

  return (
    <div className="ugc-btop" style={wrap}>
      <div style={bar}>
        {/* Left: More information -> creator profile */}
        <CreatorLink
          to={LinkComponent ? profileHref : undefined}
          href={!LinkComponent ? profileHref : undefined}
          target={linkTarget}
          rel={linkTarget === "_blank" ? "noopener noreferrer" : undefined}
          aria-label={`More information about ${creatorName}`}
          title={`More information about ${creatorName}`}
          style={linkStyle}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            style={{ display: "flex", flexDirection: "column", minWidth: 0 }}
          >
            <span style={label}>More information</span>
            <span style={name}>Creator: {creatorName}</span>
          </div>
          <span aria-hidden="true">↗</span>
        </CreatorLink>

        {/* Right: UGC number + diagonal line */}
        {ugcNumber ? (
          <div
            style={diagWrap}
            aria-label={`UGC number ${ugcNumber}`}
            title={`UGC number ${ugcNumber}`}
          >
            <span>{ugcNumber}</span>
            <span style={line} aria-hidden="true" />
          </div>
        ) : null}
      </div>
    </div>
  );
}

UGC_Card_BTop.propTypes = {
  creatorId: PropTypes.string,
  creatorName: PropTypes.string.isRequired,
  href: PropTypes.string,
  routeBuilder: PropTypes.func,
  LinkComponent: PropTypes.elementType,
  linkTarget: PropTypes.oneOf(["_self", "_blank"]),
  ugcNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  angleDeg: PropTypes.number,
  compact: PropTypes.bool,
  style: PropTypes.object,
};

UGC_Card_BTop.defaultProps = {
  creatorId: undefined,
  href: undefined,
  routeBuilder: undefined,
  LinkComponent: undefined,
  linkTarget: "_self",
  ugcNumber: undefined,
  angleDeg: 40,
  compact: false,
  style: {},
};

export default memo(UGC_Card_BTop);
