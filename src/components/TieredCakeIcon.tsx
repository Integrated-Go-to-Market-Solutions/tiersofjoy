import type { Theme, Topper } from "@/lib/products";

const THEME_COLORS: Record<Theme, { light: string; dark: string }> = {
  blush: { light: "#f2c9ce", dark: "#d98a95" },
  sage: { light: "#cfe0c5", dark: "#7c9a68" },
  sand: { light: "#ecdcc2", dark: "#cf9f5f" },
  sky: { light: "#cfe3ef", dark: "#6f9dbf" },
};

function Topper({ topper, dark }: { topper: Topper; dark: string }) {
  if (topper === "goggles") {
    return (
      <g>
        <rect x="46" y="8" width="28" height="6" rx="3" fill={dark} />
        <circle cx="46" cy="14" r="10" fill="#ffffff" stroke={dark} strokeWidth="3" />
        <circle cx="74" cy="14" r="10" fill="#ffffff" stroke={dark} strokeWidth="3" />
      </g>
    );
  }
  if (topper === "paw") {
    return (
      <g fill={dark}>
        <ellipse cx="60" cy="18" rx="11" ry="9" />
        <circle cx="47" cy="6" r="4.5" />
        <circle cx="57" cy="1" r="4.5" />
        <circle cx="68" cy="1" r="4.5" />
        <circle cx="76" cy="6" r="4.5" />
      </g>
    );
  }
  return (
    <g fill={dark}>
      <circle cx="60" cy="10" r="6" />
      <path d="M60 10 L34 -2 L38 16 Z" />
      <path d="M60 10 L86 -2 L82 16 Z" />
    </g>
  );
}

export default function TieredCakeIcon({
  theme,
  topper,
  tiers,
  className,
}: {
  theme: Theme;
  topper: Topper;
  tiers: number;
  className?: string;
}) {
  const { light, dark } = THEME_COLORS[theme];
  const maxWidth = 96;
  const minWidth = 40;
  const tierHeight = 30;
  const step = tiers > 1 ? (maxWidth - minWidth) / (tiers - 1) : 0;
  const topPadding = 24;
  const totalHeight = topPadding + tiers * tierHeight + 6;

  const rows = Array.from({ length: tiers }, (_, i) => {
    const width = maxWidth - i * step;
    const y = topPadding + (tiers - 1 - i) * tierHeight;
    const x = 60 - width / 2;
    return { x, y, width, key: i };
  });

  return (
    <svg
      viewBox={`0 -10 120 ${totalHeight}`}
      className={className}
      role="img"
      aria-hidden="true"
    >
      <Topper topper={topper} dark={dark} />
      {rows.map((row) => (
        <g key={row.key}>
          <rect
            x={row.x}
            y={row.y}
            width={row.width}
            height={tierHeight - 4}
            rx="8"
            fill={light}
            stroke={dark}
            strokeWidth="1.5"
          />
          <rect
            x={row.x}
            y={row.y + (tierHeight - 4) / 2 - 3}
            width={row.width}
            height="6"
            fill={dark}
            opacity="0.55"
          />
        </g>
      ))}
    </svg>
  );
}
